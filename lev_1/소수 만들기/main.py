from itertools import combinations, permutations
import math

def solution(nums):
    def is_prime_number(x):
        for i in range(2, int(math.sqrt(x)) + 1):
            if x % i == 0:
                return False 
        return True
    answer = 0
    li = []
    perm = list(combinations(nums, 3))

    for i in range(len(perm)):
        li.append(sum(perm[i]))
    
    for i in range(len(li)):
        if(is_prime_number(li[i]) == True):
            answer += 1
    
    return answer