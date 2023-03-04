function solution(grid){
    const map = new Map();

    for(let i=0;i<grid.length;i++){
        let hs = grid[i];
        for(let d of hs){
            let ds = map.get(d);
            if (ds === undefined){
                ds = new Set();
                map.set(d,ds)
            }
            ds.add(i);
        }
    }
    let total = 0

    for(let ds of map.values()){
        if(ds.size >=2)
        total++;
    }
   
    return total;
}