function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('icon');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
  }
  
  setInterval(createHeart, 300);

var phrases = ["My baby love you so much forever you and I",
    "I love you oh! I love you so much forever you and I"];


function typeWriter(phrases, index) {
    if (index < phrases.length) {
        var phrase = phrases[index];
        var i = 0;

        function typeNextCharacter() {
            var divTag = document.createElement("h4");
            document.querySelector(".inner").appendChild(divTag);
            var outputElement = document.querySelectorAll(".inner>h4")[index];
            if (i < phrase.length) {
                outputElement.textContent += phrase[i];
                i++;
                setTimeout(typeNextCharacter, 150); // Typing speed
                if(i >= phrase.length){
                    var brTag = document.createElement("br");
                    document.querySelector(".inner").appendChild(brTag);
                    index++;
                typeWriter(phrases, index); // Move to the next phrase
                }
            } 
        }

        typeNextCharacter();
    }
}

typeWriter(phrases, 0); // Start typing


