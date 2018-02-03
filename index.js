let math = {}
math.max = function (...arg) {
    return Math.max(...arg) ;
}
math.min = function (...arg) {
    return Math.min(arg) ;
}
console.log(math.max(12,2,3,4,5))