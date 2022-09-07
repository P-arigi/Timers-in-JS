let timerId=setTimeout(function(){
     console.log("Hello")

},3000)
clearTimeout(timerId)   //Here we used the timerId to stop the time.That's why we didn't get any output