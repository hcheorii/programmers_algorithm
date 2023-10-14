def solution(name, yearning, photo):
    tmp = dict()
    answer = []
    for i in range(len(name)):
        tmp[name[i]] = yearning[i]
    
    for i in range(len(photo)):
        k = 0
        for j in range(len(photo[i])):
            if photo[i][j] in name:
                k += tmp[photo[i][j]]
        answer.append(k)
        
    return answer