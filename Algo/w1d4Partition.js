function partition(nums) {
    let startval = nums[0];
    let count = 0;
    for (let i = 1; i < nums.length; i++){
        // console.log(nums[i]);
        //if the current element is less than the first element
        if (nums[i]< startval){
          count++;
          [nums[i], nums[count]]=[nums[count], nums[i]];
        }
    
  
    }
  
    console.log(count);
    
    //move the start val into the right place by putting it at index of count
    [nums[0], nums[count]]= [nums[count], nums[0]];
    console.log(nums);
    return count;
}

partition([4, 3, -9, 5, 12, 13, 21, 17, 27]);