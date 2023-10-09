def solution(phone_number):
    answer = ''
    last_four_num = phone_number[len(phone_number)-4:]
    front_num = len(phone_number) - 4
    answer = f'{(front_num*"*")}{last_four_num}'
    return answer