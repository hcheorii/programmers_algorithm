function solution(n) {
    var sum = 0;
    n.toString()
        .split("")
        .forEach((item) => {
            sum += parseInt(item);
        });
    return sum;
}
