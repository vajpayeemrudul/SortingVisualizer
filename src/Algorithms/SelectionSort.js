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
export default selection;