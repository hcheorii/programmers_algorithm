def solution(s, n):
    answer = []
    tmp_lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    tmp_upper = []
    list_s = list(s)
    
    for i in tmp_lower:
        tmp_upper.append(i.upper())
        
        
    for i in list_s:
        if i in tmp_lower:
            if(tmp_lower.index(i) + n > len(tmp_lower) -1):
                answer.append(tmp_lower[n-(26 - tmp_lower.index(i))])
            else:
                answer.append(tmp_lower[tmp_lower.index(i)+n])
                
        elif i in tmp_upper:
            if(tmp_upper.index(i) + n > len(tmp_upper) -1):
                answer.append(tmp_upper[n-(26 - tmp_upper.index(i))])
            else:
                answer.append(tmp_upper[tmp_upper.index(i)+n])
        elif i == " ":
            answer.append(" ")
            
        result = "".join(answer)
    
    
    
    return result