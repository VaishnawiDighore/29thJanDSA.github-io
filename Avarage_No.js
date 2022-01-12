function avg_no(arr,n){
    if(n == 1){
        return arr[n -1];
    }else{
        return ((avg_no(arr, n -1) * (n -1) + arr[n - 1])/n);
    }
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let n = arr.length;
let ans = avg_no(arr, n);
console.log(ans);