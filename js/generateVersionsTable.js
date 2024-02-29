// (C) 2007-2024 GoodData Corporation
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', 'versions.json', false);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == '200') {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

var versions;
loadJSON(function (res) {
    versions = JSON.parse(res);
});

function apiReferenceUrl(doc, version) {
    const baseUrl = '/gooddata-ui-apidocs/v' + version;
    return baseUrl + '/docs/' + doc;
}

function documentationUrl(version) {
    if (version === "next" || version === undefined) {
        return "https://www.gooddata.com/docs/gooddata-ui/latest/";
    } else if (version.startsWith("9")) {
        var majorAndMinorVersion = version.split(".").slice(0, 2).join(".");
        return "https://www.gooddata.com/docs/gooddata-ui/" + majorAndMinorVersion + "/";
    } else if (version === "8.12.0") {
        return "https://sdk.gooddata.com/gooddata-ui/docs/about_gooddataui.html";
    } else {
        // 8.11 and below
        const urlParts = [
            'https://sdk.gooddata.com/gooddata-ui/docs',
            version,
            'about_gooddataui.html'
        ];

        return urlParts.filter(Boolean).join('/');
    }
}

function isStable(version) {
    return version.split('-').length === 1;
}

function getStableVersions(versions) {
    return versions.filter(isStable);
}

function getLatestStable() {
    return getStableVersions(versions)[0];
}

function getVersionsOfType(type, versions) {
    return versions.filter((v) => {
        const versionSplit = v.split('-');

        return versionSplit.length >= 2 && versionSplit[1] === type;
    });
}

function getLatest(type, versions) {
    return getVersionsOfType(type, versions)[versions.length];
}

function parseVersionToNumber(version) {
    return parseInt(version.replace(/\D/g, ''));
}

function renderRowVersionTable(tableBodyId, version, documentationLink, apiReferenceLink) {
    // add version label
    const versionTableBody = document.getElementById(tableBodyId);
    const versionTableRow = document.createElement('tr');
    const versionLabel = document.createElement('th');
    versionLabel.textContent = version;
    versionTableRow.appendChild(versionLabel);

    // add Documentation link
    const versionDocumentation = document.createElement('td');
    const versionDocumentationLink = document.createElement('a');
    versionDocumentationLink.textContent = 'Documentation';
    versionDocumentationLink.setAttribute('href', documentationLink);
    versionDocumentation.appendChild(versionDocumentationLink);
    versionTableRow.appendChild(versionDocumentation);

    // add API Reference link
    const versionApiReference = document.createElement('td');
    const versionApiReferenceLink = document.createElement('a');
    versionApiReferenceLink.textContent = 'API Reference';
    versionApiReferenceLink.setAttribute('href', apiReferenceLink);
    versionApiReference.appendChild(versionApiReferenceLink);
    versionTableRow.appendChild(versionApiReference);

    versionTableBody.appendChild(versionTableRow);
}

// stable table row
renderRowVersionTable(
    'latest-stable-version-table-body',
    getLatestStable(),
    documentationUrl(/* intentionally empty for latest version */),
    apiReferenceUrl('index.html', getLatestStable())
);

// Next table row
renderRowVersionTable(
    'next-version-table-body',
    'Next',
    documentationUrl('next'),
    apiReferenceUrl('index.html', 'Next')
);

const prevStableVersions = versions
    .filter((ver) => ver !== getLatestStable());

prevStableVersions.forEach((ver) => {
    renderRowVersionTable(
        'past-versions-table-body',
        ver,
        documentationUrl(ver),
        apiReferenceUrl('index.html', ver)
    );
});
