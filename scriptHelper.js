// Write your helper functions here!


require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    const missionTarget = document.querySelector("div#missionTarget")
    
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
        </ol>
     <img src=${imageUrl}>
     `;
}

function validateInput(testInput) {
    return !testInput ? "Empty"
    :  !isNaN(testInput) ? "Is a Number"
    :  "Not a Number";     
    
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    const launchStat = document.querySelector("h2#launchStatus");
    const pilotStat = list.querySelector("li#pilotStatus");
    const copilotStat = list.querySelector("li#copilotStatus");
    const fuelStat = list.querySelector("li#fuelStatus");
    const cargoStat = list.querySelector("li#cargoStatus");

    launchStat.innerHTML= "Shuttle is Ready for Launch";
    launchStat.style.color= "green";
    
    for (i=0; i<arguments.length; i++){
        let testField = validateInput(arguments[i])
        let currentField = arguments[i];
        
        if (testField === "Empty"){
            window.alert("All fields are required!")
            launchStat.innerHTML= "Shuttle Not Ready for Launch";
            launchStat.style.color= "red";
        }
        else if (currentField === pilot){
            
            if (testField === "Not a Number"){
                pilotStat.innerHTML= `Pilot ${pilot} is ready for launch`;
                
            } else {
                window.alert("Make sure to enter valid information for each field!")
                launchStat.innerHTML= "Shuttle Not Ready for Launch";
                launchStat.style.color= "red";
                pilotStat.innerHTML= "Please enter valid information"; 
            }; 
        }      
        else if (currentField === copilot){
            
            if (testField === "Not a Number"){
                copilotStat.innerHTML= `Co-pilot ${copilot} is ready for launch`;
            } else {
                window.alert("Make sure to enter valid information for each field!")
                launchStat.innerHTML= "Shuttle Not Ready for Launch";
                launchStat.style.color= "red";
                copilotStat.innerHTML= "Please enter valid information"
            };
        }      
        else if (currentField === fuelLevel){
           
            if (testField === "Is a Number"){
           
                if (fuelLevel < 10000){
                    fuelStat.innerHTML= "Fuel level too low for launch";
                    launchStat.style.color= "red";
                    launchStat.innerHTML= "Shuttle Not Ready for Launch"
                    list.style= "visibility= visible";
                    
                }
                else if (fuelLevel > 10000) {
                    fuelStat.innerHTML= "Fuel level high enough for launch";                    
                }
                
            } else {
                window.alert("Make sure to enter valid information for each field!")
                launchStat.innerHTML= "Shuttle Not Ready for Launch";
                launchStat.style.color= "red";
                fuelStat.innerHTML= "Please enter valid information";                
            };        
        }    
        else if (currentField === cargoLevel){
            
            if (testField === "Is a Number"){
                                
                if(cargoLevel > 10000){
                    list.style= "visibility = visible";
                    launchStat.style.color= "red";
                    launchStat.innerHTML= "Shuttle Not Ready for Launch";
                    cargoStat.innerHTML= "Cargo mass too heavy for launch";
                } 
                else if (cargoLevel <10000){
                    cargoStat.innerHTML= "Cargo mass low enough for launch";
                }

        } else {
            window.alert("Make sure to enter valid information for each field!");
            launchStat.innerHTML= "Shuttle Not Ready for Launch";
            launchStat.style.color= "red";
            cargoStat.innerHTML= "Please enter valid information"; 
        };
        }                                                             
    }
    
    list.style= "visibility= visible";
};


 async function myFetch() {
     let planetsReturned;

 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         return response.json();
    })
    .then( function(data){
      return data; 
    });
    return planetsReturned;
};

 
 function pickPlanet(planets) {
    
    const destination = planets[Math.floor((Math.random()* 6))];     
    
    return destination;
};
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;