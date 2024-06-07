const btn = document.createElement("button");
btn.innerHTML = "scroll to top";
document.body.appendChild(btn);

window.open("https://open.spotify.com/")

const leftCol = document.getElementById('leftcolumn')
const yesCount = document.getElementById("yes-count");
const noCount = document.getElementById("no-count")
const submitButton = document.getElementById("vote-button")

let yesVotes = 0;
let noVotes = 0;

submitButton.addEventListener('click',(event) => {
    event.preventDefault(); 
    const selectedVote = document.querySelector('input[name="vote"]:checked');
   
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

const arr = [
    {"artist": "Eminem", "song": "Houdini", "review": "4/5"},
    {"artist": "GloRilla, Megan Thee Stallion & Cardi B", "song": "Wanna Be Remix", "review": "3.5/5"},
    {"artist": "Kehlani ", "song": "Next Up", "review": "5/5"},
    {"artist": "Lancey, Teezo Touchdown & Cash Cobain", "song": "Daylight" , "review": "2/5"},
    {"artist": "Logic ft. DJ Drama", "song": "Deja Vu", "review": "2/5"},
]

arr.array.forEach(element => {
    
});




// const arr = [
//     {"artist": "Kehlani", "song":"Next up"},
//     {"artist": "Eminem", "song":"Houdini"}
// ]

// const review = document.getElementById("review")




// arr.forEach(element => {
//     console.log(element, review)
//     let new_el = document.createElement("p")
    
//     new_el.innerHTML = `[${element.artist}]- ${element.song}`
//     console.log(new_el, element.artist, element.song)
//     review.appendChild(new_el)
// });