def solution(t, p):
    answer = 0
    list_t = list(t)
    int_p = int(p)
    tmp = []
    
    for i in range(0, len(t) - len(p) + 1):
        tmp.append(int(''.join(list_t[i:i + len(p)])))
    
    for i in range(len(tmp)):
        if int_p >= tmp[i]:
            answer += 1
        
    return answer