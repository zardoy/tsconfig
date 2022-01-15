//@ts-check
import * as fs from 'fs'
import { modifyPackageJsonFile } from 'modify-json-file'

const presets = 'react node node-lib'.split(' ')

/** @type{"pre" | "post"} */
// @ts-ignore
const stage = process.argv[2]

await modifyPackageJsonFile(
    { dir: '.' },
    {
        files: ['tsconfig.json', ...presets.map(p => `${p}.json`)],
    },
)

for (const preset of presets) {
    const presetTsconfig = `tsconfig-${preset}.json`
    const presetPublish = `${preset}.json`
    if (stage === 'pre') {
        await fs.promises.rename(presetTsconfig, presetPublish)
    } else {
        await fs.promises.rename(presetPublish, presetTsconfig)
    }
}
