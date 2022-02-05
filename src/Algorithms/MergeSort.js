function msort(arr)
{
    const copy=[...arr];
    mergesort(copy,0,copy.length-1);
    return copy;
}
export default msort;

function mergesort(arr,l,r)
{
    if(l<=r)
      return;
    const mid=(l+r)/2;
    mergesort(arr,l,mid);
    mergesort(arr,mid+1,r);
    merge(arr,l,mid,r);
}

function merge(arr,l,mid,r)
{
    const b=[];
    let i=l,j=mid+1;
    while(i<=mid && j<=r)
    {
        if(arr[i]<arr[j])
        {
           b.push(arr[i]);i++;
        }
        else{
            b.push(arr[j]);j++;
        }
    }
    if(i>mid)
    {
        while(j<=r)
        {
            b.push(arr[j]);j++;
        }
    }
    else{
        while(i<=mid)
        {
            b.push(arr[i]);i++;
        }
    }
    for(let i=l;i<=r;i++)
    {
        arr[i]=b[i];
    }
}