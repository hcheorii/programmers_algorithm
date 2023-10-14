def solution(n):
    answer = 0
    a = []
    for i in range(1, n+1):
        if(n % i == 0):
            a.append(i)
    answer = sum(a)
    return answer