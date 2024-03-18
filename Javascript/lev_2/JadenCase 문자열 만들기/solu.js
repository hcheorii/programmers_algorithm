function solution(s) {
    var answer = [];
    s.split(" ").forEach((item) => {
        if (item == "") {
            answer.push(item);
        } else if (item[0].toUpperCase() == item[0]) {
            answer.push(item[0] + item.slice(1).toLowerCase());
        } else {
            answer.push(item[0].toUpperCase() + item.slice(1).toLowerCase());
        }
    });
    return answer.join(" ");
}
