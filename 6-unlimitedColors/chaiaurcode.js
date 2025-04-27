const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const randomColor = function(){
  let color="#"
  const hex="0123456789ABCDEF"
  for(let i=0;i<6;i++)
  {
    const code=(parseInt(Math.random()*16))
    color+=hex[code]
  }
  return color;
}

let intervalId;  // Declared in global scope so that clearInterval can access this.

start.addEventListener("click",function(){
  intervalId = setInterval(function(){
    document.body.style.backgroundColor=randomColor()
  },3000)
})

stop.addEventListener("click", function(){
  clearInterval(intervalId);
})
