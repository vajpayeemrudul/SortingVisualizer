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
export default insertion;