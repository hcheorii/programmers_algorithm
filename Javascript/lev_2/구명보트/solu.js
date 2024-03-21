function solution(people, limit) {
    var count = 0;

    people.sort((a, b) => a - b);

    while (people.length !== 0) {
        var tmp_1 = people[0];
        var tmp_2 = people[people.length - 1];

        if (tmp_1 + tmp_2 > limit) {
            count += 1;
            people.pop();
        } else {
            count += 1;
            people.pop();
            people.shift();
        }
    }

    return count;
}
