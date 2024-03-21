function solution(n) {
    let k = 0;
    while (n > 0) {
        if (n % 2 !== 0) {
            n = n - 1;
            k += 1;
        }
        n = n / 2;
    }
    return k;
}
