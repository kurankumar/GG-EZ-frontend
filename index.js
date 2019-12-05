const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const SCORES_URL = `${BASE_URL}/scores`

document.addEventListener("DOMContentLoaded", () => {
    console.log("THE DOM HAS LOADED")

    let randNumb = Math.floor(Math.random() * 10 + 1); 
        
        
    let guess = 0; 
        
    const submitGuess = document.querySelector("#submitguess")
    submitGuess.addEventListener("click", () => {
            
                
        const userGuess = document.querySelector("#guessField").value; 
        
        if(userGuess == randNumb) 
        {     
            alert("Congratulations! You guess correctly in " + guess + " GUESSES "); 
        } 
        else if(userGuess > randNumb) 
        {     
            guess++; 
            alert("Your guess was too big.."); 
        } 
        else
        { 
            guess++; 
            alert("Your guess was too small..") 
        } 
    })

    console.log("THE DOM HAS REACHED THIS POINT")

})
