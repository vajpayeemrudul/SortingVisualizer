function bubble(arr)
{
    const copy=[...arr];
    const length=copy.length;
    for(let i=0;i<length;i++)
    {
        for(let j=i+1;j<length;j++)
        {
            if(copy[i]>copy[j])
            {
                let temp=copy[i];
                copy[i]=copy[j];
                copy[j]=temp;
            }
        }
    }
    return copy;
}

function selection(arr)
{
   const copy=[...arr];
   for(let i=0;i<copy.length;i++)
   {
       let min=i;
       for(let j=i+1;j<copy.length;j++)
       {
           if(copy[j]<arr[min])
           {
               min=j;
           }
       }
       let temp=copy[i];
       copy[i]=copy[min];
       copy[min]=temp;
   }
   return copy;
}

function insertion(arr)
{
    const copy=[...arr];
    for(let i=0;i<copy.length;i++)
    {
        let key=copy[i];
        let j=i-1;
        while(j>=0 && copy[j]<key)
        {
            copy[j+1]=copy[j];
            j--;
        }
        copy[j+1]=key;
    }
    return copy;
}

function msort(arr)
{
    const copy=[...arr];
    mergesort(copy,0,copy.length-1);
    return copy;
}

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

export {bubble,selection,insertion,msort};