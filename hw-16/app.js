
function random(amount, charactersSet) {
  let result = '';
  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * charactersSet.length)
    result += charactersSet[randomIndex];
  }
  return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const randomKey = random(length,characters);

//console.log(random(16, characters));
