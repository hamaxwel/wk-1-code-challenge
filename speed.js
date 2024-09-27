function speedDetector(speed) {
    const speedLimit = 70;
 //setting the speed limit to be 70 
    //set number of km per demerit point to 5 

    
    //use if else statement to check the driving speed against the speed limit.
    // if the first condition is met, output "Ok"
    //if the car speed exceeds the limit, calculate the number of points based on the km.
    //if the points calculated exceeds 12, console.log "license suspended"
    
    // Check if you are below the speed limit
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculating demerit points
        let demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log("Points: " + demeritPoints);
        
        // Check if your license is suspended
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

    //test the function with any speed
    let carSpeed = 120; 
    speedDetector(carSpeed);

