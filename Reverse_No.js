let num = 1234567890;
function reverse_no(num) {
        let rev_num = 0;
        while(num > 0)
        {
            rev_num = rev_num * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return rev_num;
    }
    let n= reverse_no(num)
console.log(n);