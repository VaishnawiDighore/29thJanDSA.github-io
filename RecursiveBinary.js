function Binary_Search(arr, x)
{   
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (r >= l) {
         mid = l + Math.floor((r - l) / 2);
        if (arr[mid] == x)
            return mid;
  
        if (arr[mid] > x)
            r = mid - 1;
        else
            l = mid + 1;
    }
    return -1;
}
    let Array1= [9,0,7,6,5,4,3,2,1];
    let arr = Array1.sort();
    let x = 10;
    let n = arr.length;
    let result = Binary_Search(arr, x);
    
    console.log(result);