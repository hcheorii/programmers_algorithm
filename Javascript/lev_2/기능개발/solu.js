function solution(progresses, speeds) {
    var day = []; //걸리는 일수.
    var answer = [];
    for (var i = 0; i < progresses.length; i++) {
        var tmp = progresses[i];
        var gap = 0;
        while (tmp < 100) {
            tmp += speeds[i];
            gap += 1;
        }
        day.push(gap);
    }

    var current = 0;
    var count = 0;
    for (var i = 0; i < day.length; i++) {
        if (i == 0) {
            current = day[i];
            count += 1;
        } else {
            if (current < day[i]) {
                current = day[i];
                answer.push(count);
                count = 1;
            } else {
                count += 1;
            }
        }
        if (i == day.length - 1) {
            answer.push(count);
        }
    }
    return answer;
}
