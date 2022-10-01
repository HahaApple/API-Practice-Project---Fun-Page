// Fetch with async await
document.getElementById('button1').addEventListener('click', ()=>{
    getJoke()
    .then(data => {
        console.log(data);
        const question = `<p class="text-white fs-1 fw-bold">${data.setup}</p>`;
        document.getElementById('output').innerHTML = question;
        document.getElementById('answer').innerHTML = '';

        setTimeout(() => {
            const answer = `<p class="fs-1 fw-bold">${data.punchline}</p>`;
            document.getElementById('answer').innerHTML = answer;
        }, 3000);
    
    })
    .catch(err => console.log(err));
});

async function getJoke() {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    return data;
}


document.getElementById('button2').addEventListener('click',
    getFunThing);

function getFunThing() {
    fetch('https://www.boredapi.com/api/activity')
        .then(res => res.json())
        .then(data => {
            const output = `<p class="fs-1 fw-bold">${data.activity}</p>`
            document.getElementById('output').innerHTML = output;
            document.getElementById('answer').innerHTML = '';
           })
        .catch(err => console.log(err));
}
