const logos = document.getElementsByClassName('cardlogos');

for (let i = 0; i < logos.length; i++) {
    logos[i].addEventListener('click', function handleClick() {
        if (i === 0) {
            window.open('https://danielddg.github.io/sign-up-form/', '_blank');
        } else if (i === 1) {
            window.open('https://danielddg.github.io/rock-paper-scissors/', '_blank');
        } else if (i === 2) {
            window.open('https://danielddg.github.io/landing-page/', '_blank');
        } else if (i === 3) {
            window.open('https://danielddg.github.io/etch-a-sketch/', '_blank');
        } else if (i === 4) {
            window.open('https://danielddg.github.io/calculator/', '_blank');
        } else {
            window.open('https://danielddg.github.io/odin-recipes/', '_blank');
        }
    });
}