let starPattern = a => {
  let arr = [];
  let j = 0;
  for(let i=0;i<a;i++){
      arr.push("*");
    document.write(" "+arr);
    document.write('<br>');

    j++;
    
  }
}

starPattern(5);
