# @xn-sakina/mental

`tsconfig.json` base configs

### Install

```bash
  pnpm add @xn-sakina/mental
```

### Usage

#### libs

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

#### react project

```js
{
  "extends": "@xn-sakina/mental/react",
  "include": ["src"]
}
```

### Optimizations

```js
{
  "compilerOptions": {
    // upgrade output syntax target
    "target": "es6",
    // keep empty exports file
    "isolatedModules": false,
    // generate declaration source map
    "declarationMap": true
    // ...
  }
}
```

### License

MIT
