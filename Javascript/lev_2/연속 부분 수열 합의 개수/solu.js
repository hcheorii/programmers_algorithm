function solution(elements) {
    var tmp = [];
    var answer = [];
    var real_answer = [];
    for (var i = 0; i < 2; i++) {
        // 79114 79114
        elements.forEach((item) => {
            tmp.push(item);
        });
    }

    for (var i = 1; i < elements.length + 1; i++) {
        for (var j = 0; j < elements.length; j++) {
            if (i == 1) {
                //1인경우
                answer.push(elements[j]);
            } else if (i == elements.length) {
                //전체인경우
                answer.push(elements);
            } else {
                //나머지
                var l = tmp.slice(j, j + i);
                var sum = 0;
                for (var k = 0; k < l.length; k++) {
                    sum += l[k];
                }
                answer.push(sum);
            }
        }
    }

    return [...new Set(answer)].length;
}
