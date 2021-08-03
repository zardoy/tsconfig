# My TSConfig presets

Default and `react` preset have `noEmit: true`, so `tsc` is only for type-checking. Use Vite or esbuild for the actual compiling, it would save you a lot of time.

## Usage

Usage:

```ts
{
    extends: "@zardoy/tsconfig/react"
}
```

Available presets: `react`, `node`

## Heads up

This project includes `index.d.ts` files, which **globally** changes typings for `entries` and `fromEntries`.

## Featured options

- `--generateCpuProfile tsc-output.cpuprofile`, `--extendedDiagnostics`

## Interesting things

You can use generics in JSX Components: ` <Button<number> someProp={5} /> `
