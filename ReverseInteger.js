
function Num(n) {

    let ans = 0;

    while (n != 0) {
        let digit = n % 10;
        ans = ans * 10 + digit;

        n = Math.floor(n / 10);
    }



    return ans;

}

let result = Num(123);
console.log(result);

