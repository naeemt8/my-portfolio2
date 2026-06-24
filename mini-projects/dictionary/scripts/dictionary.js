
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

document.getElementById("wordInput")
.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        searchBtn.click();
    }

});

searchBtn.addEventListener("click", async () => {

    const word = document.getElementById("wordInput").value;

    if(word === ""){
        alert("Please enter a word");
        return;
    }

    try {

        result.innerHTML = "<p>Loading...</p>";
        const response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        if(!response.ok){
            throw new Error("Word not found");
        }

        const data = await response.json();

        displayData(data);

        console.log(data);
        

        document.getElementById("wordInput").value = '';

    }
    catch(error){

        result.innerHTML = `
            <p>${error.message}</p>
        `;
    }

});

function displayData(data){

    const audioSrc = data[0].phonetics.find(item => item.audio)?.audio || "";

    console.log( 'audio src : ' , audioSrc);

    const word = data[0].word;

    const phonetic = data[0].phonetic || "Not Available";

    const definition = data[0].meanings[0].definitions[0].definition;

    const example = data[0]?.meanings[0]?.definitions[0]?.example || "No example available";

    const wordType = data[0].meanings.map(item => item.partOfSpeech).join(", ");

    result.innerHTML = `
        <audio id="myAudio" src="${audioSrc}"></audio>
        <button class="audio-btn" id="playBtn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
        </button>
        <h2>${word}</h2>
        <p><strong>Pronunciation:</strong> ${phonetic}</p>
        <p><strong>Definition:</strong> ${definition}</p>
        <p><strong>Example:</strong> ${example}</p>
        <p><strong>Word type:</strong> ${wordType}</p>
    `;

    const audioElem = document.getElementById('myAudio');
    const playBtn = document.getElementById('playBtn');

    playBtn.addEventListener('click', () => {
        console.log('audio');
        
        if (audioElem.paused) {
            audioElem.play();
        } else {
            audioElem.pause();
        }
    });
}