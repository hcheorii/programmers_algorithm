def solution(a, b):
    answer = 1234567890
    arr = []
    for i in range(len(a)):
        arr.append(a[i]*b[i])
    answer = sum(arr)
        
    return answer