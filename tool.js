function getNodes(n){
    var next, head;
    while(n > 0){
        if (next){
            next.next = head;
            head = next;
        }
        next = {
            val : n--
        };
    }
    next.next = head;
    return next;
}


var tree = {
    "val":1,
    "left":{
       "val":2,
       "left":{
          "val":3
       },
       "right":{
          "val":4
       }
    },
    "right":{
       "val":2,
       "left":{
          "val":4
       },
       "right":{
          "val":3
       }
    }
 };