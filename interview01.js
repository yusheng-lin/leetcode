function solution(s){
    let status=0;
    const firsts = new Map();
    firsts.set(0,-1);
    const bits = new Map();
    let max = 0;
    for(let i=0;i<s.length;i++){
        let c = s[i];
        let bit = bits.get(c);
        if (bit === undefined){
            bit = Math.pow(2,bits.size);
            bits.set(c, bit);
        }
        status^=bit;
        let first = firsts.get(status);
        if(first === undefined){
            firsts.set(status,i)
        }
        else{
            max = Math.max(i-first, max);
        }
    }
    return max;
}