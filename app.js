

const leftCol = document.getElementById('leftcolumn')
const yesCount = document.getElementById("yes-count");
const noCount = document.getElementById("no-count")
const submitButton = document.getElementById("vote-button")
let yesVotes = 0;
let noVotes = 0;

submitButton.addEventListener("click",(e) =>{
    yesCount.innerHTML = yesVotes
    noCount.innerHTML= noVotes
    
});

submitButton.addEventListener('click',(event) => {
    event.preventDefault();
    const selectedVote = document.querySelector('input[name="vote"]:checked');
    if (selectedVote.value ==='yes') {
        yesVotes++;
        yesVotes.textContent = yesVotes;
    } else if (selectedVote.value === 'no'){
        noVotes++;
        noVotes.textContext=noVotes
    }
    else { 
        window.alert('please select an option before submitting');
    }
    
}) 