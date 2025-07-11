# bochi

`tsconfig.json` / `prettier` / `biome` base configs

> *Required: TypeScript >= `5.5 beta`*

## Install

```bash
  pnpm add -D bochi
```

## TSConfig

### Library

Common config:

 - Default source dir: `src`
 - Default output dir: `dist`
 - Default include: `src`

#### Commonjs Library

```ts
// tsconfig.json
{
  "extends": "bochi/lib"
}
```

#### Native ESM Library

> Required: `package.json` > `"type": "module"`

```ts
// tsconfig.json
{
  "extends": "bochi/lib-native-esm"
}
```

#### React Components Library

```ts
{
  "extends": "bochi/lib-react"
}
```

### Website Project

#### React Project

> *Required: TypeScript >= `5`*

```ts
{
  "extends": "bochi/project",
  "include": ["src"]
}
```

### Advanced

```ts
{
  "compilerOptions": {
    // upgrade output syntax target
    "target": "es6",
    // generate declaration source map
    "declarationMap": true
    // ...
  }
}
```

## Prettier

```ts
// .prettierrc.js
module.exports = require('bochi/prettier')
```

## Biome

```ts
// biome.json
{
  "extends": ["./node_modules/bochi/biome.json"]
}
```

## Dprint

```ts
// dprint.json
{
  "extends": "./node_modules/bochi/dprint.json"
}
```

## Package version

Package Name|Version
:-:|:-:
`bochi`|[`v5.x`](https://github.com/xn-sakina/bochi)
`@xn-sakina/mental`|[`v4.x`](https://github.com/xn-sakina/bochi/releases/tag/v4.2.1)
`@xn-sakina/mental`|[`v3.x`](https://github.com/xn-sakina/bochi/releases/tag/v3.1.0)

## License

MIT
