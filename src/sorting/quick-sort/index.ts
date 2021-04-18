const quickPartition = (arr: number[], left: number, right: number) => {
  if (left >= right) return;
  let k = arr[left];
  left += 1;
  while (left <= right) {
    while (k >= arr[left] && left <= right) {
      [arr[left], arr[left - 1]] = [arr[left - 1], arr[left]];
      left += 1;
    }
    while (k < arr[left] && left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      right -= 1;
    }
  }
  arr[left - 1] = k;
  return left - 1;
};
export const quickSort = (originArr: number[]) => {
  const arr = [...originArr];
  if (arr.length <= 1) return arr;
  const queue = [[0, arr.length - 1]];
  while (queue.length > 0) {
    const [left, right] = queue.shift()!;
    const mid = quickPartition(arr, left, right);
    if (mid != null) {
      queue.push([left, mid - 1]);
      queue.push([mid + 1, right]);
    }
  }
  return arr;
};
