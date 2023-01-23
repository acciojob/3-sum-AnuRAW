function threeSum(arr, target) {
  //your code here
  let ans = Infinity;
  arr.sort((a, b) => a - b);
  arr.forEach((a, i) => {
    const target2 = target - a;
    let l = i + 1;
    let r = arr.length - 1;
    while (l < r) {
      if (Math.abs(target - (arr[l] + arr[r] + a)) <= Math.abs(target - ans)) {
        ans = arr[l] + arr[r] + a;
      }
      if (arr[l] + arr[r] > target2) r--;
      else l++;
    }
  });
  return ans;
}
 
module.exports = threeSum;
