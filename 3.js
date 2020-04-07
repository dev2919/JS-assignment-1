let digitsum = a =>{
  let d=0;
  let sum=0;

  while(a!=0){
    d=parseInt(a%10);
    a=parseInt(a/10);
    sum=sum+d;
  }
  return sum;
} 

document.write(digitsum(192));
