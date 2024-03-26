function solution(s) {
    var open = ["{", "(", "["];
    var close = ["}", ")", "]"];
    var dic = {
        "}": "{",
        ")": "(",
        "]": "[",
    };
    var answer = 0;

    for (var i = 0; i < s.length; i++) {
        var cka = true;
        var stack = [];
        if (i !== 0) {
            s = s.substring(1, s.length) + s[0];
        }

        for (var j = 0; j < s.length; j++) {
            if (j == 0 && close.includes(s[j])) {
                cka = false;
                break;
            }

            if (open.includes(s[j])) {
                stack.push(s[j]);
            } else {
                var p = stack.pop();
                if (dic[s[j]] == p) {
                    continue;
                } else {
                    cka = false;
                    break;
                }
            }
        }
        if (stack.length !== 0) {
            cka = false;
        }
        if (cka) {
            answer += 1;
        }
    }
    return answer;
}
