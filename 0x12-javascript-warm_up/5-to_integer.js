#!/usr/bin/node
let arg = process.argv[2];
if (isNAN(arg)) {
  console.log('Not s number');
} else {
  console.log('My number: ' + arg);
}
