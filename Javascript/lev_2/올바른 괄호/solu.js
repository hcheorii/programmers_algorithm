function solution(s) {
    var li = s.split("");
    var answer = [];
    for (var i = 0; i < li.length; i++) {
        if (i == 0 && li[i] == ")") {
            return false;
        } else if (li[i] == "(") {
            answer.push("(");
        } else {
            answer.pop();
        }
    }
    if (answer.length !== 0) {
        return false;
    } else {
        return true;
    }
}
//길이만큼 돌고 스택이 비어있지 않으면 false
