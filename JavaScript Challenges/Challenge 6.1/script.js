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
async function fetchRandomFact(){
    try{
        const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        const data = await response.json();
        const randomFact= data.text;
        console.log(randomFact);
    }catch (error){
        console.log("An error occured while fetching the random fact");
    }
}


//step4
const urls = ["https://dog.ceo/api/breeds/image/random","https://dog.ceo/api/breeds/image/random"];

const fetchImages = async() =>{
    try{
        const promises = urls.map(url => fetch(url));
        const responses = await Promise.all(promises);
        const images = await
        Promise.all(responses.map(response=>response.blob()));
        images.forEach (image => {
            console.log(image);
        });

    }catch(error){
        console.log("An error occured while fetching the images.");
    }
};

fetchImages();