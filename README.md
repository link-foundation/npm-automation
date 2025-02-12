[![npm](https://img.shields.io/npm/v/@deep-foundation/npm-automation.svg)](https://www.npmjs.com/package/@deep-foundation/npm-automation)
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/npm-automation) 
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

Automates actions that you do in your deep package when you use npm

[**Documentaiton**](https://deep-foundation.github.io/npm-automation/)

## Prereqisitions
Install package
```
npm install --save-dev @deep-foundation/npm-automation
```
# Using
## Library
- [npm-pull](https://deep-foundation.github.io/npm-automation/functions/npmPull.html)
- [npm-release](https://deep-foundation.github.io/npm-automation/functions/npmRelease.html)
- [npm-install](https://deep-foundation.github.io/npm-automation/functions/npmInstall.html)
- [sync-dependencies](https://deep-foundation.github.io/npm-automation/functions/syncDependencies.html)
## Cli
```
npx npm-pull
```

```
npx npm-release 
[--new-version=<NEW_VERSION>] 
[--package-json-file-path=<PACKAGE_JSON_FILE_PATH>] 
[--deep-json-file-path=<DEEP_JSON_FILE_PATH>]
```

```
npx npm-install 
--name=<NAME> 
--version=<VERSION> 
[--package-json-file-path=<PACKAGE_JSON_FILE_PATH>] 
[--deep-json-file-path=<DEEP_JSON_FILE_PATH>]
```

```
npx sync-dependencies 
[--package-json-file-path=<PACKAGE_JSON_FILE_PATH>] 
[--deep-json-file-path=<DEEP_JSON_FILE_PATH>]
```
