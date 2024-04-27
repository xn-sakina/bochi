import chalk from 'chalk'
import { a as a1 } from './other.js'
import { a as a2 } from './commonjs.cjs'

const a = 1
console.log(chalk.red(a))
export const b = a

console.log(a1);
console.log(a2);
