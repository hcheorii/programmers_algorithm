function solution(n) {
    var answer = 0;

    function one_number(n) {
        //1의 개수
        return (
            [...n.toString(2)].sort((a, b) => a - b).indexOf("1") -
            [...n.toString(2)].length +
            1
        );
    }

    var tmp = n + 1; //n보다 1큰수

    while (true) {
        if (one_number(tmp) == one_number(n)) {
            //점점 가면서 수가 커지니까 나오자마자 그게 정답.

            answer = tmp;
            break;
        } else {
            tmp++; //아니라면 다음 수 비교를 위해 tmp 1 증가
        }
    }
    return answer;
}
