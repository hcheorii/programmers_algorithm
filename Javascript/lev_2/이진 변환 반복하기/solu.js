function solution(s) {
    var count = 0;
    var zero_sum = 0;
    while (s != "1") {
        var zero_num = s
            .split("")
            .sort((a, b) => a - b)
            .indexOf("1"); //이거 전까지가 0의 개수.
        var one_num = s
            .split("")
            .sort((a, b) => a - b)
            .slice(zero_num).length; //1의 개수..
        zero_sum += zero_num;
        s = one_num.toString(2);
        count += 1;
    }
    return [count, zero_sum];
}
