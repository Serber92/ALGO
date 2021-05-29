var Solution = function(nums) {
    this.preserve = nums;
};

Solution.prototype.reset = function() {
    var resetInner = function() {
        return this.preserve;
    }.bind(this);
    return resetInner();
};

Solution.prototype.param = function() {
    var paramInner = function() {
        return arguments[0]
    }.bind(this);
    return paramInner();
};

const a = new Solution([1,2,3]);
console.log(a.param())
