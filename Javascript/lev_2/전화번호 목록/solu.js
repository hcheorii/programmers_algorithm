function solution(phone_book) {
    const sortedPhoneBook = phone_book
        .slice()
        .sort((a, b) => a.length - b.length);

    const dic = {};

    for (const number of sortedPhoneBook) {
        for (let j = 1; j < number.length; j++) {
            const prefix = number.slice(0, j);
            if (dic[prefix]) {
                // return false;
            }
        }
        dic[number] = true;
    }

    return true;
}
