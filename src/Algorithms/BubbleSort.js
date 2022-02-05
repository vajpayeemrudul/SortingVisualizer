function bubble(arr)
{
    const copy=[...arr];
    const length=copy.length;
    for(let i=0;i<length;i++)
    {
        for(let j=i+1;j<length;j++)
        {
            if(copy[j]>copy[i])
            {
                let temp=copy[i];
                copy[i]=copy[j];
                copy[j]=temp;
            }
        }
    }
    return copy;
}

export default bubble;