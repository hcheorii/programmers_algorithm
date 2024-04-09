function solution(cacheSize, cities) {
    var q = [];
    var answer = 0;
    for (var i = 0; i < cities.length; i++) {
        var upper = cities[i].toUpperCase();
        if (cacheSize == 0) {
            answer = cities.length * 5;
        } else {
            if (q.includes(upper)) {
                q.splice(q.indexOf(upper), 1);
                q.push(upper);
                answer += 1;
            } else {
                if (q.length == cacheSize) {
                    q.shift();
                    q.push(upper);
                } else {
                    q.push(upper);
                }
                answer += 5;
            }
        }
    }
    return answer;
}
