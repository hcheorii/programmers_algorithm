def solution(x):
    answer = True
    tmp = list(str(x))
    a = 0
    for i in range(len(tmp)):
        a += int(tmp[i])
    answer = x % a == 0
    return answer