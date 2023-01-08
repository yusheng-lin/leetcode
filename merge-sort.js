function sort(arr)
{
  
    switch(arr.length)
    {
        case 1: return arr;
        case 2: {
            if(arr[0] > arr[1])
            {
                var t = arr[0];
                arr[0] = arr[1];
                arr[1] = t; 
            }
            return arr;
        }
    }
  var mid = Math.floor(arr.length/2);
  var left = sort(arr.slice(0, mid));
  var right = sort(arr.slice(mid, arr.length));
  
  if (left[0] > right[0] || left[left.length-1] > right[right.length-1])
  {
    var result = [];

    while(left.length > 0 && right.length > 0)
    {
        var lv = left[0], rv=right[0];
        if (lv < rv){
            result.push(lv);
            left.shift();
        }
        else{
            result.push(rv);
            right.shift();
        }
    }

    if (left.length > 0) Array.prototype.push.apply(result,left);
    if (right.length > 0)Array.prototype.push.apply(result,right);
    return result;
  }
  else
    return left.concat(right);
}

