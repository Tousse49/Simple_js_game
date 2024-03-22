document.addEventListener("DOMContentLoaded", function() {
    const inputSection = document.getElementById("input_data");
    const clientSection = document.getElementById("client_data");
    const registerButton = document.getElementById("Register_client");
    const editClientButton = document.getElementById("Edit_client");

    
    registerButton.addEventListener("click", function() {
      
        inputSection.style.display = "none";
        
        
        clientSection.style.display = "block";
        
       
        const navigation = document.getElementById("navigation");
        navigation.style.display = "block";
    });

    
    editClientButton.addEventListener("click", function() {
       
        inputSection.style.display = "block";
        
       
        clientSection.style.display = "none";
    
        const navigation = document.getElementById("navigation");
        navigation.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const startSection = document.getElementById("Start");
    const imagesSection = document.getElementById("images");
    const selectImage = document.getElementById("select_image");
    const confirmChoiceButton = document.getElementById("confirm_choice");
    const audioSection = document.getElementById("audio");
    const audioSelect = document.getElementById("select_sound");
    const confirmSoundButton = document.getElementById("confirm_sound");

    document.getElementById("start_game").addEventListener("click", function() {
        const choice = document.getElementById("choice").value;

        if (choice === "sound") {
            startSection.style.display = "none";
            audioSection.style.display = "block";
            
           
        } else if (choice === "image") {
            startSection.style.display = "none";
            imagesSection.style.display = "block";

        }
    });

    confirmChoiceButton.addEventListener("click", function() {
        
        imagesSection.style.display = "none";
        audioSection.style.display = "block";
    });

    confirmSoundButton.addEventListener("click", function() {
      
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const leftNumber = document.getElementById("leftNumber");
    const rightNumber = document.getElementById("rightNumber");
    const leftClicks = document.getElementById("leftClicks");
    const rightClicks = document.getElementById("rightClicks");
    const gameResult = document.getElementById("gameResult");
    const newGameButton = document.getElementById("newGame");
    const id = 58440; 
    let leftCounter = 0;
    let rightCounter = 0;
    let result = 0;

    newGameButton.addEventListener("click", function() {
        const n = id % 2 === 0 ? 162 : 161;
        const randomNumber1 = Math.floor(Math.random() * n) + 1;
        const randomNumber2 = Math.floor(Math.random() * n) + 1;

        leftNumber.textContent = randomNumber1;
        rightNumber.textContent = randomNumber2;
    });

    leftNumber.addEventListener("click", function() {
        if (id % 2 === 0) {
            leftCounter++;
            updateResults();
        }
    });

    rightNumber.addEventListener("click", function() {
        if (id % 2 === 1) {
            rightCounter++;
            updateResults();
        }
    });

    rightNumber.addEventListener("contextmenu", function(event) {
        event.preventDefault(); 
        if (id % 2 === 1) {
            rightCounter++;
            updateResults();
        }
    });

    function updateResults() {
        result = leftCounter - rightCounter;
        leftClicks.textContent = leftCounter;
        rightClicks.textContent = rightCounter;
        gameResult.textContent = result;
    }
});

