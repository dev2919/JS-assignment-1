let fact = a =>{
  let fac = 1;
  for(let i=1;i<=a;i++){
    fac = i*fac;    
  }
  return fac;
}

document.write(fact(4));
  