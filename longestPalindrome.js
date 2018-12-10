const longestPalindrome = function (s) {
    if (s.length == 1) {
        return s
    }
    let str = '#' + s.split('').join('#') + '#'
    let rl = []
    let mx = 0
    let pos = 0
    let ml = 0
    console.log(str);
    for (let i = 0; i < str.length; i++){
        if (i < mx) {
            rl[i] = Math.min(rl[2 * pos - i], mx - i)
        } else {
            rl[i] = 1
        }
        while (i - rl[i] > 0 && i + rl[i] < str.length && str[i - rl[i]] == str[i + rl[i]]) {
            rl[i]++
        }
        if (rl[i] + i - 1 > mx) {
            mx = rl[i] + i - 1
            pos = i
        }
        if (ml < rl[i]) {
            ml = rl[i]
            sub = str.substring(i - rl[i]+1, i + rl[i])
        }
    }
    console.log(rl);
    return sub.split('#').join('').trim()
};

longestPalindrome("abcdedcbaadfdsf");