

const leftCol = document.getElementById('leftcolumn')
const pollForm = document.querySelector(".vote-button");
const yesCount = document.getElementById("yes-count");
const noCount = document.getElementById("no-count")
let yesVotes = 0;
let noVotes = 0;
console.log(pollForm)
pollForm.addEventListener("click",(e) =>{
 

    yesCount.innerHTML = yesVotes
    noCount.innerHTML= noVotes
    
    
    const noButton = document.getElementsByClassName("no")
    const yesButton = document.getElementsByClassName("yes")

    
    
});
// 


submitButton.addEventListener('click',() => {
    const selectedVote = document.querySelector('input[name="vote"]:checked');
    if (selectedVote.value ==='yes') {
        yesVotes++;
        yesVotesCount.textContent = yesVotes;
    } else if (selectedVote.value === 'no'){
        noVotes++;
        noVotesCount.textContext=noVotes
    }
    else
    alert('please select an option before submitting');
    
}) 