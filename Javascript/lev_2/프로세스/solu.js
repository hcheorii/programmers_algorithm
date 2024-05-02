function solution(priorities, location) {
    const dataset = priorities.map((priority, idx) => ({ priority, idx }));
    var count = 0;

    while (dataset.length !== 0) {
        var m = Math.max(...priorities);
        var { priority, idx } = dataset.shift();
        if (priority < m) {
            dataset.push({ priority, idx });
        } else if (priority == m) {
            if (idx == location) {
                count += 1;
                break;
            } else {
                priorities[idx] = 1;
                count += 1;
            }
        }
    }

    return count;
}
