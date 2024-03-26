function gcd(num1, num2) {
    return num2 > 0 ? gcd(num2, num1 % num2) : num1;
}

function lcm(num1, num2) {
    return (num1 * num2) / gcd(num1, num2);
}

function solution(arr) {
    while (arr.length !== 1) {
        var tmp_1 = arr.pop();
        var tmp_2 = arr.pop();
        arr.push(lcm(tmp_1, tmp_2));
    }

    return arr[0];
}
