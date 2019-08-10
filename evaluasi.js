for (let i = 0; i < 9;i++){
  for(let h = 0; h < 9; h++){
    if(i >= 8 - h  ){
      document.write(h*2)
    }else{
      document.write('- ')
    }
  }
  document.write('<br>')
}


document.write('<br>')

var a = 0
var b = 1
var c = 1 

   for ( var i = 0; i < 10; i++){
      document.write(c + ' ')
    c = a + b;
    a = b
    b = c
     
  
     


   }



document.write('<br>')

document.write('<br>')


   for (let i = 1; i < 9;i++){
    for(let h = 1; h < 9; h++){
      if( i == h  || i == 9- h ){
        document.write(i*2 + 1)
     
      }else{
        document.write(' - ')
      }
    }
    document.write('<br>')
  }

