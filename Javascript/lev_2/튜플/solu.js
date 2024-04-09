function solution(s) {
    var answer = [];
    var tmp = s.slice(2, -2).split("},{");
    var answer = [];
    for (var i = 0; i < tmp.length; i++) {
        answer.push(tmp[i].split(",").map((item) => parseInt(item)));
    }
    answer.sort((a, b) => a.length - b.length);

    var real = [];
    for (var i = 0; i < answer.length; i++) {
        for (var j = 0; j < answer[i].length; j++) {
            if (i == 0) {
                real.push(answer[i][j]);
            } else {
                if (!answer[i - 1].includes(answer[i][j])) {
                    real.push(answer[i][j]);
                }
            }
        }
    }

    return real;
}
