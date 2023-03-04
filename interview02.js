function solution(b1,b2){
    let width = Math.trunc((b1+b2)/4);

    while(width > 0)
    {
        if(Math.trunc(b1/width)+Math.trunc(b2/width) >= 4) return width;

        width--;
    }

    return 0;
}