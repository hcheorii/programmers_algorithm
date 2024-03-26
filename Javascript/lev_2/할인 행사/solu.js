function solution(want, number, discount) {
    // discount길이와 10의 차이 + 1 번 돌아야함
    var want_num = {};
    var want_li = [];
    var answer = 0;
    const equals = (a, b) => {
        if (a.length === b.length) {
            return a.every((v, i) => v === b[i]);
        }
    };

    for (var i = 0; i < number.length; i++) {
        for (var j = 0; j < number[i]; j++) {
            want_li.push(want[i]);
        }
    }
    want_li.sort();

    for (var i = 0; i < discount.length - 9; i++) {
        var tmp = discount.slice(i, i + 10);
        tmp.sort();
        if (equals(tmp, want_li)) {
            answer += 1;
        }
    }

    return answer;
}
