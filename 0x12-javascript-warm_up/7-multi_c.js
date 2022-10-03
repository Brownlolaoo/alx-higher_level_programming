#!/usr/bin/node
if (process.arg[2] === undefined || isNaN(process.argv[2])) {
  console.log('missing number of occurance');
} else {
  const x = Number(process.argv[2]);
  let p = 0;
  while (p < x) {
   console.log('C is fun');
   p++;
 }
}
