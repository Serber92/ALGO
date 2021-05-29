// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

var maxProfit = function(prices) {
    let b = 0;
    let s = 1;
    let prof = 0;
    
    while(s < prices.length) {
        if (prices[s] - prices[b] > prof) {
            prof = prices[s] - prices[b];
        }
        if (prices[s] <= prices[b]) {
            b = s;
            s++;
        } else {
           s++; 
        }
    }
    
    return prof;
    
};