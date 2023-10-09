def solution(n, arr1, arr2):
    answer = []
    arr1_2 = []
    arr2_2 = []
    new_answer = []
    for i in range(len(arr1)):
        arr1_2.append(format(arr1[i], 'b').zfill(n))
        arr2_2.append(format(arr2[i], 'b').zfill(n))
        
    for i in range(len(arr1_2)):
        for j in range(n):
            if(arr1_2[i][j] == "0" and arr2_2[i][j] == "0"):
                answer.append(" ")
            elif(arr1_2[i][j] == "1" or arr2_2[i][j] == "1"):
                answer.append("#")
                
    for i in range(n):
        new_answer.append(''.join(answer[i*n:i*n+n]))
    
    return new_answer


