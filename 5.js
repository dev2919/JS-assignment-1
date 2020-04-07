let strReverse = a =>{
  let b =[];
  let c= a.length-1;
  for(let i=0;i<=a.length;i++){

    a[c];    
    b[i]=a[c];
    c--;        
  }
  b=b.join("");
  document.write(b);
}

strReverse("awesome");



