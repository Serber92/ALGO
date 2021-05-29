// O(n^2)
// For example: Take the string \text{"abcbabcab"}"abcbabcab". 
// Here, the largest palindrome segment from beginning is \text{"abcba"}"abcba", and the remaining segment is \text{"bcab"}"bcab". 
// Hence the required string is reverse of \text{"bcab"}"bcab"( = \text{"bacb"}"bacb") + original string( = \text{"abcbabcab"}"abcbabcab") = \text{"bacbabcbabcab"}"bacbabcbabcab".


// O(n)
// Create a temporary string(say str2) which is:
// str2 = str + '?' reverse(str);
// Create an array(say lps[]) of size of length of the string str2 which will store the longest palindromic prefix which is also a suffix of string str2.
// Update the lps[] by using preprocessing algorithm of KMP Search Algorithm.
// lps[length(str2) – 1] will give the length of the longest palindromic prefix string of the given string str.

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

let shortestPalindrome = (s) => {
    let str2 = s + "#" + reverseString(s);

    let lps = buildPatternTable(str2);

    let pal_point = s.length - lps[str2.length - 1];
    
    if (!pal_point) {
        return s;
    }
    return reverseString(s.slice(-pal_point)) + s;
};

let reverseString = (str) => {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


let test = "aacecaaa";
console.log(shortestPalindrome(test));
