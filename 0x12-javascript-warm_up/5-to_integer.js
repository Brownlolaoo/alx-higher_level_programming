#!/usr/bin/node
let a = process.argv[2];
if (isNAN(a)) {
  console.log('Not s number');
} else {
  console.log('My number: ' + a);
}
