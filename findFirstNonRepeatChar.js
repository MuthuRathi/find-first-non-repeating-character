function findFirstNonRepeatChar(str) {

    //"aaaabbbcccdee" -> 'e'
    for (var i = 0; i < str.length; i++) {

        if (str[i] == str[i + 1]) {
            while (str[i] == str[i + 1])
                i++;
        }
        else {
            return str[i];
        }

    }

    return null;
}
