def solution(s):
    answer = []
    tmp = []
    
    for i in range(len(s)):
        tmp = s[:i]
        id = tmp.rfind(s[i])
        if(id == -1):
            answer.append(id)
        else:
            answer.append(i-id)
            
    return answer