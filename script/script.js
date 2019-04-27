const fibonacci = {
    0: 0,
    1: 1,
    2: 1,
    3: 2,
    4: 3,
    5: 5,
    6: 8,
    7: 13,
    8: 21,
    9: 34,
    10: 55
};

const Iterator = function () {
    this.index = 0;
    this.fibonacci = fibonacci
};

Iterator.prototype = {
    current: function(){
        return this.fibonacci[this.index]
    },
    next: function () {
        return this.fibonacci[this.index++]
    },
    rewind: function () {
        this.index = 0;
        return this.fibonacci[this.index]
    },
    key: function () {
        return Object.keys(this.fibonacci)[this.index]
    },
    prev: function () {
        return this.fibonacci[this.index--]
    }
};
const iterator = new Iterator();