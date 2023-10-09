def solution(n):
    answer = []
    tmp = list(str(n))
    tmp.reverse()
    for i in range(len(tmp)):
        tmp[i] = int(tmp[i])
    return tmp