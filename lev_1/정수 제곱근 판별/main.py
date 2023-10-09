def solution(n):
    answer = 0
    tmp = n**(1/2)
    if(tmp - int(tmp) == 0):
       answer = (tmp+1)**2
    else:
       answer = -1
       
    return answer