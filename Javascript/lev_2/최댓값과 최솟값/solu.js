function solution(s) {
    var answer = [];
    s.split(" ").forEach((item) => answer.push(parseInt(item)));
    answer.sort((a, b) => a - b);
    return [answer[0], answer[answer.length - 1]].join(" ");
}
