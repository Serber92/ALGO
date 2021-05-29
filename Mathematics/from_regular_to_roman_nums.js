var intToRoman = function(num) {
    let hash = {
        1:'I',
        5:'V',
        10:'X',
        50:'L',
        100:'C',
        500:'D',
        1000:'M',
        900:'CM',
        400:'CD',
        90:'XC',
        40:'XL',
        9:'IX',
        4:'IV'
    }
    let order = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    let start = 0;
    let string = '';
    let order_index = 0;
    
    while(start < num) {
        while(start + order[order_index] <= num) {
            start += order[order_index];
            string += hash[order[order_index]];
        }
        order_index++;
    }
    
    return string;

};