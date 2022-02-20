function displayIfChildIsAbleToRideTheRollerCoaster(childheight){
    var childHeight = -1
    if (childHeight < 0){
        return "please enter valid number!"
    }
    
    if (childHeight >= 52){
        return "Get on that ride, kiddo!"
    }
    else{
        return "Sorry kiddo. Maybe next year."
    }

}

console.log(displayIfChildIsAbleToRideTheRollerCoaster(-20))