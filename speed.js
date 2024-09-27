function speedDetector(speed) {
    const speedLimit = 70;

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

