def solution(d, budget):
    sum = 0
    answer = 0
    d.sort()
    for i in range(len(d)):
        if(sum+d[i] <= budget):
            sum += d[i]
            answer += 1
    
    return answer