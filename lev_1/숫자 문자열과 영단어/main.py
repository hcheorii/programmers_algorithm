def solution(s):
    string_list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    num_list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    
    answer = []
    for i in range(len(s)):
        if s[i] in num_list:
            answer.append(s[i])
        elif s[i:i+3] in string_list:
            answer.append(num_list[string_list.index(s[i:i+3])])
        elif s[i:i+4] in string_list:
            answer.append(num_list[string_list.index(s[i:i+4])])
        elif s[i:i+5] in string_list:
            answer.append(num_list[string_list.index(s[i:i+5])])
            
            
    return int(''.join(answer))

# 숫자 기준으로 나눴는데 길이가 6이상이면 그건 2개이상의 문자열수가 들어있는 것.
