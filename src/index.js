module.exports = function reverse(n) {
    return parseInt(Array.from(String(n)).reverse().join(""))
}
