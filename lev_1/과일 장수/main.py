def solution(k, m, score):
    def list_chunk(lst, n):
        return [lst[i:i+n] for i in range(0, len(lst), n)]
    
    answer = 0
    score.sort(reverse=True)
    tmp = list_chunk(score, m)
    
    for i in range(len(tmp)):
        if(max(tmp[i]) > k or len(tmp[i]) != m):
            tmp.remove(tmp[i])
    for i in range(len(tmp)):
        answer += min(tmp[i]) * m
    return answer