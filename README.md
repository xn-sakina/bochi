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

> Required: `package.json` > `"type": "module"`

```js
{
  "extends": "@xn-sakina/mental/lib-native-esm",
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

> Required: typescript >= 5

```js
{
  "extends": "@xn-sakina/mental/project",
  "include": ["src"]
}
```

> **Note**
> 
> v3 please use (typescript < 5) : `@xn-sakina/mental/project-legacy`

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
