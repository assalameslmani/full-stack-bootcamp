//step1
setTimeout(function() {
    console.log("Hello after 5 seconds!");
  }, 5000);

  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    console.log(hours + ":" + minutes + ":" + seconds);
  }
  
  setInterval(displayTime, 1000);

  var delayedPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Promise resolved!");
    }, 2000);
  });

  delayedPromise.then(function(message) {
    alert(message);
    console.log("Chained message!");
  });
  