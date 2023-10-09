def solution(s):
    answer = []
    tmp = 0
    for i in range(len(s)):
        if(s[i] == " "):
            answer.append(" ")
            tmp = 0
        else:
            if(tmp%2 == 0):
                answer.append(s[i].upper())
                tmp += 1
            else:
                answer.append(s[i].lower())
                tmp += 1
                
                
    return ''.join(answer)
