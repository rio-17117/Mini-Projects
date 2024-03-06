//JOKE GEN
let Jlist = [" What do you call an ant who fights crime? A vigilANTe!", "Why are snails slow? Because they're carrying a house on their back. ", "What's the smartest insect? A spelling bee!", "Why did the teddy bear say no to dessert? Because she was stuffed. ", "Name the kind of tree you can hold in your hand? A palm tree! ", "What does a storm cloud wear under his raincoat? Thunderwear. ", "What did the left eye say to the right eye? Between us, something smells! ", "Why do birds fly south in the winter? It's faster than walking! ", "Q: How do you weigh a millennial? A: In Instagrams. ", "Q: What kind of shoes does a lazy person wear? A: Loafers. ", "I went to a smoke shop to discover that it has been replaced by an apparel store. Clothes, but no cigar. ", "What happens when an artist has trouble finding inspiration? She draws a blank. "];
let randomjoke = Math.floor(Math.random() * Jlist.length);
let Rpick = Jlist[randomjoke];
console.log(Rpick);
let jokepara = document.getElementById('joke-container');
// console.log("hello")
// console.log(Rpick[jokepara])
jokepara.innerHTML = Rpick;

function changeJoke() {
    let randomjoke = Math.floor(Math.random() * Jlist.length);
    let Rpick = Jlist[randomjoke];
    console.log(Rpick);
    document.getElementById('joke-container').innerHTML = Rpick;
}
// GGWP