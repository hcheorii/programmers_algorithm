def solution(n):
    answer = 0
    tmp = list(str(n))
    tmp.sort(reverse = True)
    result = list(map(int,tmp))
    
    for i in range(len(result)):
        answer += result[i]*10**(len(result) -1 -i)
        
    return answer