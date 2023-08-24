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
  

  //step2
  function simulateNetworkRequest() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        var randomNumber = Math.random();
        if (randomNumber < 0.5) {
          resolve("Data fetched successfully!");
        } else {
          reject("Network Error!");
        }
      }, 3000);
    });
  }

  simulateNetworkRequest()
  .then(function(message) {
    console.log(message);
  })
  .catch(function(error) {
    console.log(error);
  });

  async function fetchData() {
    try {
      var response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      var data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  fetchData();

  //step3
  