function searchCharacter() {
    const characterId = document.getElementById("character-id").value;
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => response.json())
        .then(data => {
            const character = data;
            document.getElementById("character-info").innerHTML = `
                <h2>Character Info</h2>
                <img src="${character.image}" alt="Character Image">
                <p>Name: ${character.name}</p>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
                <p>Gender: ${character.gender}</p>
                <p>Origin: ${character.origin.name}</p>
                <p>Last known location: ${character.location.name}</p>
                <p>Episodes: ${character.episode.length}</p>
                <p>Created: ${character.created}</p>
            `;
        })
        .catch(err => {
            console.log(err);
        });
}