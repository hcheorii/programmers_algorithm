def solution(numbers):
    answer = -1
    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    answer = sum(list(set(arr) - set(numbers)))
        
    return answer