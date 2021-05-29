const qs = (arr, s = 0, e = arr.length - 1) => {
  if (s >= e) {
    return;
  }
  let p = partititon(s, e, arr);
  qs(arr, s, p - 1);
  qs(arr, p + 1, e);

  return arr;
}

const swap = (a, b, arr) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const partititon = (index_first, index_last, arr) => {
  let p = Math.floor((index_first+index_last)/2);
  swap(p, index_last, arr);

  for (let i = index_first; i < index_last; i++) {
    if (arr[i] < arr[index_last]) {
      swap(i, index_first, arr);
      index_first++;
    }
  }
  swap(index_last, index_first, arr);
  return index_first;
}

let a = [3,56,2,8,7,9,23];
console.log(qs(a));