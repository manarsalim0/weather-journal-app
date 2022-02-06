/* Global Variables */
// US is default country. Parameter is zip code,country code
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=f55253a91aad7bc77176f7dc835c03b4&units=metric"; //(&units=imperial) for Fahrenheit && (&units=metric) for celcius

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+ 1 +'.'+ d.getDate()+'.'+ d.getFullYear();


//check if zip Code label Is Empty
function checkIfZipCodeIsEmpty(zipCode){
    if (zipCode.length == 0) {
        alert("zipcode is empty");
        return
}};

//when zip Code is wrong
function zipCodeIsWrong(){
    alert("Check the entry zipcode");
    return
};

//check if feelings label Is Empty
function checkIfFeelingsIsEmpty(feelings){
    if (feelings.length == 0) {
        alert("feelings textarea is empty");
        return
}};

//post data to API
const gettingInformation = async () => {
    
    //Get the entered data
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    //get zipCode data from API
    const res = await fetch(baseURL + zipCode + apiKey);

    //check if zip Code label Is Empty
    checkIfZipCodeIsEmpty(zipCode);

    //check if feelings label Is Empty
    checkIfFeelingsIsEmpty(feelings);
    
    try {
        //get data from API
        // transform into json
        const allData = await res.json();
        allData["feelings"] = feelings;
        allData["date"] = newDate;
        await postThisData('/add', allData);
        //call updateUserInterface function
        updateUserInterface();
    } 
    //If something goes wrong, show the error message
    catch (error) {
        console.error("error", error);
        
    }
    
};

//Event Listener when click on element with generate ID
document.getElementById('generate').addEventListener('click', gettingInformation);

// post data to server to save it 
const postThisData = async (baseURL = '', data = {}) => {
    const response = await fetch(baseURL, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'no-cache',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
        },
          //match Content-Type': 'application/json with body data type
        body: JSON.stringify(data)
        });
        try {
            // transform into json
            const newData = await response.json();
            return newData;

        }
        //If something goes wrong, show the error message 
        catch (error) {
            console.log('Error', error);
            zipCodeIsWrong();
        }
};


//if the server get response successfully from API and save this data in the server then it can update UI with this data
//If something goes wrong, show the error message
const updateUserInterface = async () => {
    const request = await fetch('/all');
    try {
        // transform into json
        const allData = await request.json();
        //Update the content of the elements based on the information obtained
        document.getElementById('date').innerHTML = "date : "+ allData.date;
        document.getElementById('temp').innerHTML = 'temp is '+ allData.temperature +" C";
        document.getElementById('content').innerHTML = "your feelings today: "+ allData.feelings;
    }

    catch (error) {
        console.log('error', error);

    }
}




