fetchdata();

async function fetchdata() {
    try {
        const name = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        console.log(data)

        if (data.sprites && data.sprites.front_default) {
            const sprite = data.sprites.front_default;
            const img = document.getElementById("sprite");

            img.src = sprite;
            img.style.display = 'block';
        } else {
            console.error("Sprite not found in the response");
        }

    } catch (err) {
        console.error(err);
    }
}
