//step1
function delay (milliseconds){
    return new Promise(resolve => setTimeout (resolve,milliseconds));
}


//step2
fetch("https://uselessfacts.jsph.pl/random.json?language=en")
.then(response=>response.json())
.then(data =>{
    const randomFact= data.text;
    console.log(randomFact);
})

.catch(error => {console.log ("An error occured while fetching the random fact.");
});

//step3