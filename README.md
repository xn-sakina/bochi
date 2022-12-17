# @xn-sakina/mental

`tsconfig.json` base configs

## Install

```bash
  pnpm add -D @xn-sakina/mental
```

## Usage

### Library

#### Commonjs Library

```js
{
  "extends": "@xn-sakina/mental/lib",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

#### Native ESM Library

```js
{
  "extends": "@xn-sakina/mental/lib-esm",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

#### React Components Library

```js
{
  "extends": "@xn-sakina/mental/lib-react",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

### Project

#### React Project

```js
{
  "extends": "@xn-sakina/mental/react",
  "include": ["src"]
}
```

## Optimizations

```js
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

## License

MIT
