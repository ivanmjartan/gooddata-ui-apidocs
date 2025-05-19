/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const docVersion = require(process.cwd() + "/version.json");

/* List of projects/orgs using your project for the users page */
const users = [
    {
        caption: "User1",
        image: "img/docusaurus.svg",
        infoLink: "https://www.gooddata.com",
        pinned: true,
    },
];

const siteConfig = {
    title: "GoodData.UI API reference" /* title for your website */,
    tagline: "A powerful JavaScript library for building analytical applications",
    url: "https://sdk.gooddata.com" /* your website url */,
    baseUrl: `/gooddata-ui-apidocs/v${docVersion.version}/` /* base url for your project */,
    projectName: "gooddata-ui-apidocs",
    headerLinks: [
        // Breadcrumbs links
        { href: "/gooddata-ui/", label: "GoodData.UI" },
        { href: "https://www.gooddata.com/developers/cloud-native/doc/", label: "Docs & APIs" },

        // Main nav links
        { href: "https://www.gooddata.com/developers/", label: "Developers" },
        { href: "https://www.gooddata.com/developers/cloud-native/", label: "GoodData.CN" },
        { href: "/gooddata-ui/", label: "GoodData.UI" },
        { href: "https://www.gooddata.com/developers/cloud-native/doc/", label: "Docs & APIs" },

        // Secondary nav
        { href: `/gooddata-ui-apidocs/index.html`, label: docVersion.version },
        { href: "/gooddata-ui/docs/interactive_examples.html", label: "Code samples", external: true },
        { href: "https://github.com/gooddata/gooddata-ui-sdk/", label: "GitHub", external: true },
    ],
    onPageNav: "separate",
    users,
    /* path to images for header/footer */
    headerIcon: "img/gooddata.svg",
    footerIcon: "img/gooddata.svg",
    favicon: "img/favicon.ico",
    /* colors for website */
    colors: {
        primaryColor: "#14B2E2",
        secondaryColor: "#205C3B",
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
    copyright: "Copyright © " + new Date().getFullYear() + " GoodData",
    organizationName: "gooddata",
    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks
        theme: "default",
    },
    scripts: ["https://buttons.github.io/buttons.js", `${this.baseUrl}js/toggleNav.js`],
    // You may provide arbitrary config keys to be used as needed by your template.
    repoUrl: "https://github.com/gooddata/gooddata-ui-apidocs",
    algolia: {
        appId: "WMJ16KLCLT",
        apiKey: "e5b1637b413b99533ae0f13f3d9d1417",
        indexName: "gooddata",
        algoliaOptions: {
            facetFilters: ["version:" + docVersion.version, "tags:gooddata-ui-apidocs"],
        },
    },
    twitter: "true",
    twitterImage: "img/metaimage.png",
    ogImage: "img/metaimage.png",
    disableHeaderTitle: true,
    customDocPath: "",
};

module.exports = siteConfig;
