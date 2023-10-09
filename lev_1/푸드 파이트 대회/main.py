def solution(food):
    answer = []
    tmp = []
    
    for i in range(len(food)):
        tmp.append(food[i]//2)
            
    for i in range(len(tmp)):
        for j in range(tmp[i]):
            answer.append(i)
            
    answer = answer + [0] + sorted(answer, reverse=True)
    return ''.join(str(x) for x in answer)
    
