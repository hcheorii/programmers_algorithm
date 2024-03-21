function solution(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] == s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length == 0 ? 1 : 0;
}
