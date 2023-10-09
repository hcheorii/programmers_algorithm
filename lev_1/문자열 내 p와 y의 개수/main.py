def solution(s):
    answer = True
    
    # [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    tmp = list(s)
    count_p = tmp.count("p") + tmp.count("P")
    count_y = tmp.count("y") + tmp.count("Y")
    
    if(count_p == count_y):
        answer = True
    else:
        answer = False
    

    return answer