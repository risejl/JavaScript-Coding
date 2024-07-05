class ArrayWrapper {
  private _nums: number[];
  
  constructor(nums: number[]) {
    this._nums = nums;
  }
  
  valueOf(): number {
    return this._nums.reduce((sum, num) => sum + num, 0);
  }
  
  toString(): string {
    return `[${this._nums.join(',')}]`;
  }
};