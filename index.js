const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/api/v1/users`
const SCORES_URL = `${BASE_URL}/api/v1/scores`

document.addEventListener("DOMContentLoaded", () => {
    console.log("THE DOM HAS LOADED")

    const userForm = document.querySelector("#create-user-form")
    userForm.addEventListener("submit", function(event){
        event.preventDefault() 

        const username = document.querySelector("#new-username").value
        
        fetch(USERS_URL, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username
                }
            })
        })
        .then(res => res.json())
        .then(data => {
            
            
                const userLI = document.querySelector("#users-list")
                const li = document.createElement("li")
                const userID = data.id

                const editUser = document.createElement("button")
                editUser.setAttribute("data-user-id", userID)
                editUser.innerText = "Edit"
                editUser.className = "edit-user"

                const deleteUser = document.createElement("button")
                deleteUser.setAttribute("data-user-id", userID)
                deleteUser.innerText = "Delete"
                deleteUser.className = "delete-user"

                li.innerText = username
                li.appendChild(editUser)
                li.appendChild(deleteUser)
                userLI.appendChild(li)

        event.target.reset() 
    })
    })


    fetch(USERS_URL)
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < data.length; i++ ){
            const userLI = document.querySelector("#users-list")
            const li = document.createElement("li")
            const userID = data[i].id

            const editUser = document.createElement("button")
            const username = "I have been edited!"
            editUser.setAttribute("data-user-id", userID)
            editUser.innerText = "Edit"
            editUser.className = "edit-user"

            editUser.addEventListener("click", () => {
                fetch(`${USERS_URL}/${userID}`, {
                    method: 'PATCH', 
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      user: {
                          username
                      }  
                    })
                    
                })
            })


            const deleteUser = document.createElement("button")
            deleteUser.setAttribute("data-user-id", userID)
            deleteUser.innerText = "Delete"
            deleteUser.className = "delete-user"
            deleteUser.addEventListener("click", () => {

                fetch(`${USERS_URL}/${userID}`, {
                    method: 'DELETE', 
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  })
                  .then(res => res.json())
                  .then(data => {
                    const li = document.querySelector(`button[data-user-id="${userID}"]`).parentElement
                    li.parentNode.removeChild(li)
                    
                })
            })
            
            
            li.innerText = data[i].username
            li.appendChild(editUser)
            li.appendChild(deleteUser)
            userLI.appendChild(li)
    
        }

    })

    








    let randNumb = Math.floor(Math.random() * 10 + 1); 
        
        
    let guess = 0; 
        
    const submitGuess = document.querySelector("#submitguess")
    submitGuess.addEventListener("click", () => {
            
                
        const userGuess = document.querySelector("#guessField").value; 
        
        if(userGuess == randNumb){     
            alert("Congratulations! You guess correctly in " + guess + " GUESSES "); 
        } 
        else if(userGuess > randNumb){     
            guess++; 
            alert("Your guess was too big.."); 
        } 
        else{ 
            guess++; 
            alert("Your guess was too small..") 
        } 
    })

    console.log("THE DOM HAS REACHED THIS POINT")

})
