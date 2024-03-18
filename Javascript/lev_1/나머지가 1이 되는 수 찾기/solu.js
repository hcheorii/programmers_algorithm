function solution(n) {
    var answer = [];
    for (var i = 1; i < n; i++) {
        if (n % i == 1) {
            answer.push(i);
        }
    }

    answer.sort((a, b) => a - b);
    return answer[0];
}
