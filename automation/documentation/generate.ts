import { glob } from 'glob';
import {generateDocumentation} from '../../src/generate-documentation.js'
import path from 'path';
import fsExtra from 'fs-extra';
import { execa } from 'execa';

main();

async function main() {
  process.env.DEBUG = `*`;
  const cliAppFilePaths = await glob(`./dist/cli/*.js`, {absolute: true})
  for (const cliAppFilePath of cliAppFilePaths) {
    fsExtra.chmodSync(cliAppFilePath, '755');
  }
  await generateDocumentation({
    generateCliAppsHelpInReadmeOptions: {
      cliAppFilePaths: cliAppFilePaths,
      rootHeaderLevel: 2
    },
    generateUsageWaysOfNpmCliAppsInMarkdownFormatOptions: {
      cliUtilityNames: cliAppFilePaths.map(cliAppFilePath => path.basename(cliAppFilePath, '.js')),
      rootHeaderLevel: 2
    },
    generateTableOfContentsForMarkdownOptions: {
      markdownFilePath: './README.md',
      rootHeaderLevel: 1
    } 
  })
};