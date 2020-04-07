let findElement = (a,b) =>{
  // console.log(b);
  for(let i=0;i<b.length;i++)
  {
    if(a==b[i]){
      return i;
    }
  }
  
}

document.write("[1,2,4,5,23,8,34] index of 23 is : "+ findElement(23,[1,2,4,5,23,8,34]));
