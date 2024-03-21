function solution(n) {
    var newArr = [0, 1];
    for (var i = 2; i <= n; i++) {
        newArr.push((newArr[i - 1] + newArr[i - 2]) % 1234567);
    }
    return newArr[n];
}
