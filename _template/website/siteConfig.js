/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const docVersion = require(process.cwd() + '/version.json');

/* List of projects/orgs using your project for the users page */
const users = [
    {
        caption: 'User1',
        image: 'img/docusaurus.svg',
        infoLink: 'https://www.gooddata.com',
        pinned: true,
    },
];

const siteConfig = {
    title: 'GoodData-UI-ApiDocs' /* title for your website */,
    tagline:
        'A powerful JavaScript library for building analytical applications',
    url: 'https://sdk.gooddata.com' /* your website url */,
    baseUrl: `/tony-test/v${docVersion.version}/` /* base url for your project */,
    projectName: 'gooddata-ui-apidocs',
    headerLinks: [
        {
            href: `/tony-test/v${docVersion.version}/index`,
            label: 'GoodData-UI-ApiDocs',
        },
        { href: `/tony-test/index.html`, label: docVersion.version },
    ],
    onPageNav: 'separate',
    users,
    /* path to images for header/footer */
    headerIcon: 'img/gooddata.svg',
    footerIcon: 'img/gooddata.svg',
    favicon: 'img/favicon.ico',
    /* colors for website */
    colors: {
        primaryColor: '#14B2E2',
        secondaryColor: '#205C3B',
    },
    docsSideNavCollapsible: true,
    /* custom fonts for website */
    /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
    // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
    copyright: 'Copyright © ' + new Date().getFullYear() + ' GoodData',
    organizationName: 'gooddata',
    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks
        theme: 'default',
    },
    scripts: [
        'https://buttons.github.io/buttons.js',
        `${this.baseUrl}js/toggleNav.js`,
    ],
    // You may provide arbitrary config keys to be used as needed by your template.
    repoUrl: 'https://github.com/gooddata/gooddata-ui-apidocs',
    twitter: 'true',
    twitterImage: 'img/metaimage.png',
    ogImage: 'img/metaimage.png',
    disableHeaderTitle: true,
    customDocPath: '',
};

module.exports = siteConfig;
