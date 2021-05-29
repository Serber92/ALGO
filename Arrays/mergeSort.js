const mergeSorted = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  let res = [];

  while (p1 < arr1.length || p2 < arr2.length) {
    if (p1 === arr1.length && p2 < arr2.length) {
      return [...res, ...arr2.slice(p2)];
    }
    else if (p1 < arr1.length && p2 === arr2.length) {
      return [...res, ...arr1.slice(p1)];
    }
    else if (arr1[p1] < arr2[p2]) {
      res.push(arr1[p1]);
      p1++;
    } 
    else {
      res.push(arr2[p2]);
      p2++;
    }
  }

  return res;
}

const MergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let m = Math.floor(arr.length / 2);

  return mergeSorted(MergeSort(arr.slice(0, m)), MergeSort(arr.slice(m, arr.length)));
}

let a = [1,65,3,5,8,324,34,9];
console.log(MergeSort(a));