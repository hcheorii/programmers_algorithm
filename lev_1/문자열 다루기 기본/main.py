def solution(s):
    answer = True
    tmp = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    li = list(s)
    
    if(len(s) == 4 or len(s) == 6):
        for i in range(0, len(li)):
            if li[i] not in tmp:
                answer = False
    else :
        answer = False
        
    return answer