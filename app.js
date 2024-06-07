
const btn = document.createElement("button");
btn.innerHTML = "top";
document.body.appendChild(btn);


const leftCol = document.getElementById('leftcolumn')
const yesCount = document.getElementById("yes-count");
const noCount = document.getElementById("no-count")
const submitButton = document.getElementById("vote-button")
let yesVotes = 0;
let noVotes = 0;

// submitButton.addEventListener("click",(e) => {
//     yesCount.innerHTML = yesVotes
//     noCount.innerHTML= noVotes
    
// });

submitButton.addEventListener('click',(event) => {
    event.preventDefault();
    const selectedVote = document.querySelector('input[name="vote"]:checked');
   // console.log(selectedVote.value)
 
    try {
        if (selectedVote.value ==='yes') {
            yesVotes++;
            yesCount.textContent = yesVotes;
        } else {
            noVotes++;
            noCount.textContent= noVotes
        }
    } catch (error) {
        alert(error)
    }
  
  
    
}) 
