from itertools import combinations
def solution(number):
    answer = 0
    list_number = list(number)
    
    tmp = list(combinations(list_number, 3))
    
    for i in range(len(tmp)):
        if(sum(tmp[i]) == 0):
            answer += 1
                
    return answer