from itertools import combinations, permutations

def solution(numbers):
    answer = []
    tmp = list(permutations(numbers, 2))
    for i in range(len(tmp)):
        answer.append(sum(tmp[i]))

    answer.sort(reverse=True)
    return sorted(list(set(answer)))

