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

function docUrl(doc, version) {
    const baseUrl = '/tony-test/v' + version;
    return baseUrl + '/docs/' + doc;
}

function getStableVersions(versions) {
    return versions.filter((v) => v.split('-').length === 1);
}

function getLatestStable() {
    return versions.filter((v) => v.split('-').length === 1)[
        versions.length - 1
    ];
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

function renderRowVersionTable(tableBodyId, version, documentationLink) {
    // add version label
    const versionTableBody = document.getElementById(tableBodyId);
    const versionTableRow = document.createElement('tr');
    const versionLabel = document.createElement('th');
    versionLabel.textContent = version;
    versionTableRow.appendChild(versionLabel);

    // add documentation link
    const versionDocumentation = document.createElement('td');
    const versionDocumentationLink = document.createElement('a');
    versionDocumentationLink.textContent = 'Documentation';
    versionDocumentationLink.setAttribute('href', documentationLink);
    versionDocumentation.appendChild(versionDocumentationLink);
    versionTableRow.appendChild(versionDocumentation);
    versionTableBody.appendChild(versionTableRow);
}

// stable table row
renderRowVersionTable(
    'latest-stable-version-table-body',
    getLatestStable(),
    docUrl('index.html', getLatestStable())
);

// Next table row
renderRowVersionTable(
    'next-version-table-body',
    'Next',
    docUrl('index.html', 'Next')
);

const prevStableVersions = versions.filter((ver) => ver !== getLatestStable()).reverse();
prevStableVersions.forEach((ver) => {
    renderRowVersionTable(
        'past-versions-table-body',
        ver,
        docUrl('index.html', ver)
    );
});
