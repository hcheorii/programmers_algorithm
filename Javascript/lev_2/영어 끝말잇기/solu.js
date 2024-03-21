function solution(n, words) {
    var used = [words[0]];
    var valid = true;
    var answer = [];

    for (var i = 1; i < words.length; i++) {
        if (words[i - 1].charAt(words[i - 1].length - 1) !== words[i][0]) {
            valid = false;
        } else if (used.includes(words[i])) {
            valid = false;
        } else if (words[i].length == 1) {
            valid = false;
        } else {
            used.push(words[i]);
        }

        if (valid == false) {
            if ((i + 1) % n == 0) {
                answer.push(n);
            } else {
                answer.push((i + 1) % n);
            }
            answer.push(Math.trunc(i / n) + 1);
            break;
        }
    }

    if (valid) {
        answer = [0, 0];
    }
    return answer;
}
