def solution(sizes):
    height = []
    width = []
    
    
    for i in range(0, len(sizes)):
        sizes[i].sort(reverse=True)
    
    for i in range(0, len(sizes)):
        width.append(sizes[i][0])
        height.append(sizes[i][1])
    

    
    return max(width)*max(height)