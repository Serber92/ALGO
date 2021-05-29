// O(n) + O(logn) ≈ O(n)

const binarySearch = (arr, v, s, e) => {
  if (s === e) {
    if (arr[s] > v) {
      return s;
    } else {
      return s + 1;
    }
  }

  if (s > e) {
    return s;
  }

  const m = Math.trunc((s + e) / 2);

  if (arr[m] < v) {
    return binarySearch(arr, v, m + 1, e);
  }
  else if (arr[m] > v) {
    return binarySearch(arr, v, s, m - 1);
  } else {
    return m;
  }
}

// insert new value into array
const insertionSort = (arr, v) => {
  let insertIndex = binarySearch(arr, v, 0, arr.length - 1);
  arr.splice(insertIndex, 0, v);
  return arr;
}