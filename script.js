// Write your JavaScript code here!




window.addEventListener("load", function() {
    const formSubmitButton = document.querySelector("#formSubmit");
    const Pilot = document.querySelector("#pilotName");
    const Copilot = document.querySelector('input[name="copilotName"]');
    const Fuel = document.querySelector('input[name="fuelLevel"]');
    const Cargo = document.querySelector('input[name="cargoMass"]');
    const statusList = document.querySelector("div#faultyItems");
    
    
    formSubmitButton.addEventListener("click", function(event){
        event.preventDefault()
        
        formSubmission(document, statusList, Pilot.value, Copilot.value, Fuel.value, Cargo.value)
        
    });
    
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        Destination = pickPlanet(listedPlanets);
          
        const dName = Destination.name;
        const dDiameter = Destination.diameter;
        const dStar = Destination.star;
        const dDistance = Destination.distance;
        const dMoons = Destination.moons;
        const dImage = Destination.image;
        addDestinationInfo(document, dName, dDiameter, dStar, dDistance, dMoons, dImage)
        
        
        
    })
    
});