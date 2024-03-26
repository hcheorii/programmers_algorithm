function solution(k, tangerine) {
    const s = [...new Set(tangerine)];
    var dic = [];
    var sum = 0;
    var count = 0;
    s.forEach((item) => {
        var count = 0;
        for (var i = 0; i < tangerine.length; i++) {
            if (item == tangerine[i]) {
                count += 1;
            }
        }
        dic[item] = count;
    });

    dic.shift();
    dic.sort((a, b) => b - a);

    for (var i = 0; i < dic.length; i++) {
        sum += dic[i];
        count += 1;
        if (sum >= k) {
            break;
        }
    }

    return count;
}
