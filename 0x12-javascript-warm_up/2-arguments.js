#!/usr/bin/node
let p = process.argv.lenght;
if (p === 2) {
console.log('No Argument');
} else if (p === 3) {
console.log('Argument found');
} else {
console.log('Arguments found');
}
