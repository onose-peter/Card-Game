let randomNumber = Math.floor(Math.random() * 6) +1;
let randomImage = 'dice' + randomNumber + '.png';
let randomImageSource = '../images/' + randomImage;

document.querySelector('.img1').setAttribute('src', randomImageSource);

let randomNumber2 = Math.floor(Math.random() *6 ) + 1;
let randomImage1 = '../images/' + 'dice' + randomNumber2 + '.png';

document.querySelector('.img2').setAttribute('src', randomImage1);

if (randomNumber > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 WINS';
}
else if (randomNumber2 > randomNumber) {
    document.querySelector('h1').innerHTML = 'Player 2 WINS'
}
else if (randomNumber === randomNumber2){
    document.querySelector('h1').innerHTML = 'DRAW';
}
else;