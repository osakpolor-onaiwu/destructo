function add(a,b,c) {
    if(a<b){
        throw `a is smaller than b`
    }
    return a + b * c
}

module.exports = add