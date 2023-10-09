def solution(arr1, arr2):
    answer = []
    for i in range(len(arr1)):
        
        tmp = [x + y for x, y in zip(arr1[i],arr2[i])]
        answer.append(tmp)
    return answer