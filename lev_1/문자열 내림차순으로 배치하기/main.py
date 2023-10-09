def solution(s):
    answer = ''
    tmp = list(s)
    big = []
    small = []
    
    for i in range(len(tmp)):
        if(tmp[i].isupper() == True):
            big.append(tmp[i])
        else:
            small.append(tmp[i])
    big.sort(reverse = True)
    small.sort(reverse = True)
    
    answer = ''.join(small + big)
            
    return answer