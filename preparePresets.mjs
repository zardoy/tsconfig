//@ts-check

import * as fs from "fs";
import jsonfile from "jsonfile";

const presets = "react node".split(" ")

/** @type{"pre" | "post"} */
const stage = process.argv[2];

const pkg = await jsonfile.readFile("package.json")
pkg.files = [
    "tsconfig.json",
    ...(presets.map(p => `${p}.json`))
];
await jsonfile.writeFile("package.json", pkg, { spaces: 2 });

for (let preset of presets) {
    const presetTsconfig = `tsconfig-${preset}.json`;
    const presetPublish = `${preset}.json`
    if (stage === "pre") {
        await fs.promises.rename(presetTsconfig, presetPublish);
    } else {
        await fs.promises.rename(presetPublish, presetTsconfig);
    }
}