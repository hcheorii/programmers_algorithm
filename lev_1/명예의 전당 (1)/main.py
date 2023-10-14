def solution(k, score):
    answer = []
    hof = [] #명예의전당
    if(k >= len(score)):
        for i in range(len(score)):
            hof.append(score[i])
            answer.append(min(hof))
    else:
        for i in range(k):
            hof.append(score[i]) #[1, 10, 20]
            answer.append(min(hof))
        for i in range(k, len(score)):
                if(score[i] <= min(hof)):
                    answer.append(min(hof))
                else:
                    hof.remove(min(hof))
                    hof.append(score[i])
                    answer.append(min(hof))
    return answer