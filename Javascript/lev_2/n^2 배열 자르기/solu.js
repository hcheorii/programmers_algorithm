function solution(n, left, right) {
    var answer = [];
    for (var i = left; i < right + 1; i++) {
        var x = Math.trunc(i / n);
        var y = i % n;
        answer.push(Math.max(x + 1, y + 1));
    }

    return answer;
}
