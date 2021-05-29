// O (n + m)

let buildPatternTable = (str) => {
  let pattern = [0];
  let i = 1;
  let j = 0;

  while (i < str.length) {
    if (str[i] === str[j]) {
      pattern[i] = j + 1;
      i++;
      j++;
    } else {
      if (j > 0) {
        j = pattern[j-1];
      } else {
        pattern[i] = 0;
        i++;
      }
    }
  }

  return pattern;
}

let KMP = (str, sub) => {
  if (sub.length === 0) {
    return 0;
  }

  let pattern = buildPatternTable(sub);
  let i = 0;
  let j = 0;

  while (i < str.length) {
    if (str[i] === sub[j]) {
      if (j === sub.length -1) {
        return i - sub.length + 1;
      }
      i++;
      j++;
    } else {
      if (j > 0) {
        j = pattern[j-1];
      } else {
        j = 0;
        i++;
      }
    }
  }

  return -1;
}


console.log(KMP('abxabcabcaby', 'abcaby'))