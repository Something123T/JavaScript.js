
function BinarySearch(n){
    let s=0;
    let e=n;
    let m=Math.floor(s+(e-s)/2);
    let ans=0;

    while(s<=e){
        if(Number(Math.pow(m,2))===n){
            return Number(m);
        }
        else if(Number(Math.pow(m,2))<n){
          s=m+1;
        }else{
            ans=m;
            e=m-1;
        }

        m=Math.floor(s+(e-s)/2);
    }

    return ans;
}

let index=BinarySearch(81);

console.log(index);



