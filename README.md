# GoodData-UI-APIDOCS

GoodData.UI is a powerful JavaScript library for building analytical applications on top of the GoodData platform. The best way to start working with Gooddata.UI is to visit [sdk.gooddata.com/gooddata-ui](https://sdk.gooddata.com/gooddata-ui/).

This repository contains the source code of the [documentation](https://sdk.gooddata.com/gooddata-ui-apidocs/index.html).

## Create/Update Version
In order to create/update a new version, there are a couple of prerequisites for a successful version creation.

1. `gooddata-ui-sdk` and `gooddata-ui-apidocs` need to have the same path
2. In `gooddata-ui-sdk` run `rush build` then `rush build-docs` after modifying some of the documentation
3. The script will ask you for a version number/name. Please note that version number/name is **case sensitive** (in case of `Next`), which is extremely important. **WARNING:** When you input an existing version number/name, it will replace the old build with a new one that the script generates.
4. After the script finishes, navigate to `gooddata-ui-apidocs` and create a new pull request with the changes.

## Delete Version
Delete the build with the version number/name and delete the specific version in `versions.json` in the root.

## Best Practices 
When making changes to the `gooddata-ui-sdk` documentation, refer to [TSDoc](https://tsdoc.org/) documentation and its rules/limitations. Remember to also avoid `JSDoc` as it is not compatible with `TSDoc` and the documentation generator. 

## License

(C) 2020 GoodData Corporation

For more information, please see [LICENSE](LICENSE).
