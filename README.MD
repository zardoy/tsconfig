# My TSConfig presets

By default all presets have `noEmit: true`, so `tsc` is only for type-checking, but not in Node preset.

## Heads up

This project includes `index.d.ts` files, which **globally** changes typings for `entries` and `fromEntries`.

## Featured options

- `--generateCpuProfile tsc-output.cpuprofile`, `--extendedDiagnostics`

## Interesting things

You can use generics in JSX Components: ` <Button<number> someProp={5} /> `
