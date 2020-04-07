let sort = a =>{
  
  for(let i =0;i<a.length;i++)
  {
    for(let j=0;j<a.length;j++)
    {
      if(a[j]>a[j+1]){
      let temp = a[j];
        a[j]=a[j+1];
        a[j+1]=temp; 
      }
  }
}

return a;

}

document.write("the sorted array is " + sort([14,5,6]));
