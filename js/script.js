const jokepara = document.getElementById('jokepara');
function fetchJokes(){
    fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(fetchedJoke => {
        const jokeText = fetchedJoke.attachments[0].text;

        jokepara.innerHTML = jokeText;
    })
}

fetchJokes();

document.getElementById('btn').addEventListener('click',()=>{
    jokepara.innerHTML="Loading...";
    fetchJokes();
})