let math = {}
math.max = function (...arg) {
    return Math.max(...arg) ;
}
math.min = function (...arg) {
    return Math.min(...arg) ;
}
math.avg = function (...args) {
    let total = 0 ;
    for(let arg of args ){
        total+=arg ;
    }
    return total/args.length ; 
}
console.log(math.max(12,2,3,4,5))