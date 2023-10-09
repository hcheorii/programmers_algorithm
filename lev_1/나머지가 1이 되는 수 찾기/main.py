def solution(n):
    answer = 0
    a = []
    for i in range(1, n):
        if(n % i == 1):
            a.append(i)
            
    answer = min(a)
    return answer