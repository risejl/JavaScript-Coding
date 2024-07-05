const ArrayWrapper = function(nums) {
  this._nums = nums;
  };
    
  /**
   * @return {number}
   */
  
  ArrayWrapper.prototype.valueOf = function() {
    return this._nums.reduce((sum, num) => sum + num, 0);
  }
  
  /**
   * @return {string}
   */
  
  ArrayWrapper.prototype.toString = function() {
    return `[${this._nums.join(',')}]`;
  }