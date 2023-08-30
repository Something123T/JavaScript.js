// Find element in log(n) time : 


function BinarySearch(arr, key) {
    
    let s = 0;
    let e = arr.length;
    let mid = Math.floor(s + (e - s) / 2);

     

    while (s <= e) {
        if (Number(arr[mid]) === key) {
            return mid;
        }

        else if (Number(arr[mid]) < key) {
            s = mid + 1;
        } else {
            e = mid - 1;
        }

        mid = Math.floor(s + (e - s) / 2);
    }

    return -1;
}



let arr=[1,2,3,4,5,6,7,7,9];
  

let ans=BinarySearch(arr,3);

console.log(ans);
