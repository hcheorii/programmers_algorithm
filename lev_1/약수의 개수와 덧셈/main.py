def solution(left, right):
    answer = 0
    whole = []
    plus = []
    minus = []
    count = 0
    for i in range(left, right + 1):
        whole.append(i)
        
        
        
    for i in range(whole[0], whole[-1]+1):
        for j in range(1, i+1):
            if(i%j == 0):
                count = count + 1
        if(count % 2 == 0):
            plus.append(i)
            count = 0
        else:
            minus.append(i)
            count = 0
            
    answer = sum(plus) - sum(minus)
    return answer