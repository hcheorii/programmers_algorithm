def solution(a, b):
    answer = 0
    if(a > b):
        small = b
        big = a
    elif(b> a):
        small = a
        big = b
    else:
        return a
    
    for i in range(0, big-small+1):
        answer += small
        small += 1
    
            
   
    return answer