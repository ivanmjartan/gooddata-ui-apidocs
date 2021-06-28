# GoodData-UI-APIDOCS

GoodData.UI is a powerful JavaScript library for building analytical applications on top of the GoodData platform. The best way to start working with Gooddata.UI is to visit [sdk.gooddata.com/gooddata-ui](https://sdk.gooddata.com/gooddata-ui/).

This repository contains the source code of the [documentation](https://sdk.gooddata.com/gooddata-ui-apidocs/index.html).

## Create/Update Version

**NOTE:** For all the related scripts to work, `gooddata-ui-sdk` and `gooddata-ui-apidocs` have to be cloned in the same directory (so that `cd ./gooddata-ui-apidocs` works from `gooddata-ui-sdk`).

To preview changes you made in `gooddata-ui-sdk`, make sure all the projects you changed are build and then run `rush start-docs`.
This will run the documentation with your changes.

**NOTE:** if you make some other changes in the code after the documentation site has stared, you need to build it again and run the `rush start-docs` again – there is no "hot reload".

To release a new version of the apidocs, use the CI job called `gooddata-ui-sdk-apidocs-release`.

## Delete Version
Delete the build with the version number/name and delete the specific version in `versions.json` in the root.

## Best Practices
When making changes to the `gooddata-ui-sdk` documentation, refer to [TSDoc](https://tsdoc.org/) documentation and its rules/limitations. Remember to also avoid `JSDoc` as it is not compatible with `TSDoc` and the documentation generator.

## License

(C) 2020 GoodData Corporation

For more information, please see [LICENSE](LICENSE).
