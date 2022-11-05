const btRock = document.querySelector("#btRock");
const btPaper = document.querySelector("#btPaper");
const btScissor = document.querySelector("#btScissor");
const txAnswer = document.querySelector("#txAnswer");
const txComputer = document.querySelector("#txComputer");
const txWinner = document.querySelector("#txWinner");
const imgRock = document.querySelector("#animationsRock");
const imgPaper = document.querySelector("#animationsPaper");
const imgScissor = document.querySelector("#animationsScissor");
const imgRockForComputer = document.querySelector("#animationsRockComp");
const imgPaperForComputer = document.querySelector("#animationsPaperComp");
const imgScissorForComputer = document.querySelector("#animationsScissorComp");
const vs = document.querySelector("#vs");

let addition = 82;

let delayTheAnswer = 12000;
let delayForGetClose = 4000;

let computerChoose;
let playerChoose;
let winner;

let degree1= 0;
let degree2= 0;
let degree3= 0;

let delayAnimation;
let delayAnimationForComputer;
let delayFight;

let getCloseForTie = 0;
let getCloseForWin = 0;

btRock.addEventListener("click", () => {//button of rock
    
        showImage(imgRock);   
        
        delayAnimation = setInterval(igniteAnimation,1,imgRock);

        //All buttons are being disable during game time
        btDisable();
        //in here i am clearing all values to play again
        txAnswer.textContent = "Your Answer:"
        txComputer.textContent = "Computer Answer:"
        txWinner.textContent = "Winner:"
        playerChoose = "Rock";
        txAnswer.textContent = "Your Answer: "+ playerChoose ;
        //ai is creating random answer
        createRandomAnswer(imgRock);
         //checks for who win
        checkWhoWin();
        //is for showing winner at screen
        showWinner();

})

btPaper.addEventListener("click", () => {//button of paper

        showImage(imgPaper);

        delayAnimation = setInterval(igniteAnimation,1,imgPaper);

        //All buttons are being disable during game time
        btDisable();
        //in here i am clearing all values to play again
        txAnswer.textContent = "Your Answer:"
        txComputer.textContent = "Computer Answer:"
        txWinner.textContent = "Winner:"
        playerChoose = "Paper";
        txAnswer.textContent = "Your Answer: "+ playerChoose;
        //ai is creating random answer
        createRandomAnswer(imgPaper);
        //checks for who win
        checkWhoWin();
        //is for showing winner at screen
        showWinner();

})

 btScissor.addEventListener("click", () => {//button of scissor

        showImage(imgScissor);

        delayAnimation = setInterval(igniteAnimation,1,imgScissor);

        //All buttons are being disable during game time
        btDisable();
          //in here i am clearing all values to play again
        txAnswer.textContent = "Your Answer:"
        txComputer.textContent = "Computer Answer:"
        txWinner.textContent = "Winner:"
        playerChoose = "Scissor";
        txAnswer.textContent = "Your Answer: "+ playerChoose;
        //ai is creating random answer
        createRandomAnswer(imgScissor);
         //checks for who win
        checkWhoWin();
        //is for showing winner at screen
        showWinner();

})

function createRandomAnswer(element){//creating random case

    let random = (Math.floor(Math.random()*3))+1;
    
    if(random == 1) computerChoose = "Rock";
    else if(random == 2) computerChoose="Paper";
    else computerChoose = "Scissor";
    
    setTimeout(() => {//igniting ComputerAnswers show and animation go on

        txComputer.textContent = "Computer Answer: "+computerChoose

        if(computerChoose == "Rock") {
            showImage(imgRockForComputer);
            delayAnimationForComputer = setInterval(igniteAnimationForComputer,1,imgRockForComputer);

            setTimeout(() =>  {//ignite fight

                vs.style = "visibility:hidden";
                delayFight = setInterval(fight,1,element,imgRockForComputer);

            },delayForGetClose);
        }
        if(computerChoose == "Paper") {
            showImage(imgPaperForComputer);
            delayAnimationForComputer = setInterval(igniteAnimationForComputer,1,imgPaperForComputer);

            setTimeout(() =>  {//ignite fight

                vs.style = "visibility:hidden";
                delayFight = setInterval(fight,1,element,imgPaperForComputer);

            },delayForGetClose);

        }
        if(computerChoose == "Scissor") {
            showImage(imgScissorForComputer);
            delayAnimationForComputer = setInterval(igniteAnimationForComputer,1,imgScissorForComputer);

            setTimeout(() =>  {//ignite fight

                vs.style = "visibility:hidden";
                delayFight = setInterval(fight,1,element,imgScissorForComputer);

            },delayForGetClose);
        }


    },3000);
}

function checkWhoWin(){//this is check for who win

    switch(computerChoose) {

        case "Rock":

            switch(playerChoose){

                case "Rock":
                    winner = "Tie";
                    break;
                case "Paper":
                    winner = "You Win !!!";
                    break;
                case "Scissor":
                    winner = "Computer Win :((";
                     break;
            }

            break;
        case "Paper":

            switch(playerChoose){

                case "Rock":
                    winner = "Computer Win :((";
                    break;
                case "Paper":
                    winner = "Tie";
                    break;
                case "Scissor":
                    winner = "You Win !!!";
                     break;
            }

            break;
        case "Scissor":

            switch(playerChoose){

                case "Rock":
                    winner = "You Win !!!";
                    break;
                case "Paper":
                    winner = "Computer Win :((";
                    break;
                case "Scissor":
                    winner = "Tie";
                     break;
            }

            break;
    }

}

function showWinner(){//this is end of the game

    setTimeout(() => {

        txWinner.textContent = "Winner: "+ winner
        
        hideImages(imgPaper);
        hideImages(imgRock);
        hideImages(imgScissor);

        hideImages(imgPaperForComputer);
        hideImages(imgRockForComputer);
        hideImages(imgScissorForComputer);

        showImage(vs);

        //buttons are being enable to play again
        btPaper.disabled = false;
        btRock.disabled = false;
        btScissor.disabled = false;

    },delayTheAnswer);

  
}

function btDisable(){//function of button disable

    btPaper.disabled = true;
    btRock.disabled = true;
    btScissor.disabled = true;

} 

function hideImages(element){//hide images
    element.style = "visibility:hidden";
}

function showImage(element){//show images
    element.style = "visibility:visible";
}

function igniteAnimation(element){//rotate animation for first element

    element.style.transform = `rotateZ(${degree1}deg)`

    if(degree1 <= 720) degree1++;

    if (degree1 >= 720) {
    degree1=0;
    clearInterval(delayAnimation);
    }

}

function igniteAnimationForComputer(element){//rotate animation for second element

    element.style.transform = `rotateZ(${-degree2}deg)`

    if(degree2 <= 720) degree2++;

    if (degree2 >= 720) {
        degree2=0;
        clearInterval(delayAnimationForComputer);
        }


}

function fight(player,computer){//figting animate

    if(winner == "Tie"){ //if its tie

        if(getCloseForTie <= 137) getCloseForTie++;

        if(computerChoose == "Paper" && playerChoose == "Paper"){
            addition = 0;

            player.style.left = `${addition+getCloseForTie}px`;
            computer.style.left = `${addition-getCloseForTie}px`;

        }else if(computerChoose == "Scissor" && playerChoose == "Scissor") {

            addition = 82;

            player.style.right = `${addition-getCloseForTie}px`;
            computer.style.right = `${addition+getCloseForTie}px`;


        }else{
            addition = 82;

            player.style.left = `${addition+getCloseForTie}px`;
            computer.style.left = `${addition-getCloseForTie}px`;

        }

        player.style.transform = `rotateZ(${degree3}deg)`;
        computer.style.transform = `rotateZ(${-degree3}deg)`;

    }else{//if there is a winner

        if(getCloseForWin <= 350) getCloseForWin++;

        switch(playerChoose){

            case "Rock":

                switch(computerChoose){
 
                    case "Paper":
                
                        computer.style.transform = `rotateZ(${-degree3}deg)`;
                        computer.style.left = `${-getCloseForWin}px`;

                        if(getCloseForWin >= 350) player.style = "visibility:hidden"

                        break;
                    case "Scissor":

                        player.style.transform = `rotateZ(${degree3}deg)`;
                        player.style.left = `${82+getCloseForWin}px`;    
                        
                        if(getCloseForWin >= 350) computer.style = "visibility:hidden"

                        break;
                    default:
                        break;
                }
        
                break;
            case "Paper":

                switch(computerChoose){
 
                    case "Rock":

                        player.style.transform = `rotateZ(${degree3}deg)`;
                        player.style.left = `${getCloseForWin}px`;
                        
                        if(getCloseForWin >= 350) computer.style = "visibility:hidden"

                        break;
                    case "Scissor":
                
                        computer.style.transform = `rotateZ(${-degree3}deg)`;
                        computer.style.right = `${82+getCloseForWin}px`;

                        if(getCloseForWin >= 350) player.style = "visibility:hidden"

                        break;
                    default:
                        break;
                }

                break;
            case "Scissor":

                switch(computerChoose){
 
                    case "Paper":
                
                        player.style.transform = `rotateZ(${degree3}deg)`;
                        player.style.right = `${82-getCloseForWin}px`;

                        if(getCloseForWin >= 350) computer.style = "visibility:hidden"

                        break;
                    case "Rock":

                        computer.style.transform = `rotateZ(${-degree3}deg)`;
                        computer.style.left = `${82-getCloseForWin}px`;

                        if(getCloseForWin >= 350) player.style = "visibility:hidden"

                        break;
                    default:
                        break;
                }

                break;
            default:
                break;
        }

    }

    if(degree3 <= 720) degree3++;
    if(degree3 >= 720) {
        degree3 = 0;
        getCloseForTie = 0;
        getCloseForWin = 0;
       clearInterval(delayFight); 
    }
}