# My TSConfig presets

> Doesn't follow semver!

Default and `react` preset have `noEmit: true`, so `tsc` is only for type-checking. Use Vite or esbuild for the actual compiling, it would save you a lot of time.

## Usage

Usage:

```ts
{
    extends: "@zardoy/tsconfig/react"
}
```

Available presets: `react`, `node`, `node-lib`.

## Heads up

This project includes `index.d.ts` files, which **globally** improves typings for `entries` and `fromEntries`.

<!-- - `--generateCpuProfile tsc-output.cpuprofile`, `--extendedDiagnostics` -->

## Interesting facts

You can use generics in JSX Components: ` <Button<number> someProp={5} /> `
