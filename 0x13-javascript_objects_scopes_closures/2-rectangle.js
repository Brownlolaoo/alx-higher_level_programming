#!/usr/bin/node
class Rectangle {
    constructor (w, h) {
        if (((w = parseint(w)) > 0) && ((h = parseint(h)) > 0)) {
            this.width = w;
            this.height = h;
        }
    }
}
module.exports = Rectangle;
