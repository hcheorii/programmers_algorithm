def solution(n):
    tmp = 0
    arr = []
    answer = 0
    
    while(n != 0):
        tmp = n%3
        n = n//3
        arr.append(tmp)
    
    for i in range(len(arr)):
        answer += arr[i]*(3**(len(arr)-1-i))
        
    return answer