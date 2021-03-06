
let turn = 1;
const choices =["X","O"]
let playerScoreX = 0;
let playerScoreO = 0;


const addScore = (winner) =>{
    let PlayerX = document.querySelector("#playerXScore")
    let PlayerO = document.querySelector("#playerOScore")
    console.log(winner)
    if (winner === "X"){
        playerScoreX = playerScoreX+1
        PlayerX.innerText = playerScoreX
    } else {
        playerScoreO = playerScoreO+1
        PlayerO.innerText = playerScoreO
    }
}
const playerMove = (event) => {
    let player = document.querySelector("#currentPlayer")
   const cell = event.target    
    if (turn%2 === 0){
        cell.innerHTML = choices[0]
        player.innerHTML = "Player O's turn"
    }
    else {
        cell.innerHTML= choices[1]
        player.innerHTML = "Player X's turn"
  }
  //remove event listener after X or O is added to div
  cell.removeEventListener("click", playerMove)
  //update turn by 1 
  turn = turn+1
  checkWinner()
}
    
const removeListener = () =>{
    const div = document.querySelectorAll(".cell")
    for(let i = 0; i < div.length; i++) {
        div[i].removeEventListener("click", playerMove)
        div[i].innerText = ""
    }
    let turn = 1;
    gameBoard()   
}

const gameBoard =()=> {    
    const div = document.querySelectorAll(".cell")
    const restart = document.querySelector("#tryAgain")
    //all divs can be clicked and invoke playerMove
    for (let i=0; i<div.length; i++){
        div[i].addEventListener("click", playerMove)
    }
    //restart button set to remove score and chg turn back to 1
    restart.addEventListener("click", ()=>{
        let PlayerX = document.querySelector("#playerXScore")
        let PlayerO = document.querySelector("#playerOScore")
        playerScoreX = 0;
        playerScoreO = 0;
        PlayerX.innerText = playerScoreX
        PlayerO.innerText = playerScoreO
        turn = 1
    })
}

    

document.addEventListener("DOMContentLoaded", ()=>{
        gameBoard() 
})

const checkWinner = () => {
    const div1 = document.querySelector("#div1").innerText
    const div2 = document.querySelector("#div2").innerText
    const div3 = document.querySelector("#div3").innerText
    const div4 = document.querySelector("#div4").innerText
    const div5 = document.querySelector("#div5").innerText
    const div6 = document.querySelector("#div6").innerText
    const div7 = document.querySelector("#div7").innerText
    const div8 = document.querySelector("#div8").innerText
    const div9 = document.querySelector("#div9").innerText
    if (div1 === div2 && div2 === div3 && div1 !== "" ){
        alert("Player " + div1+ " is the winner!")
        addScore(div1)
        removeListener()
    }else if (div4 === div5 && div5 === div6 && div4 !== ""){
        alert("Player " + div4+ " is the winner!")
        addScore(div4)
        removeListener()
    }else if (div7 === div8 && div8 === div9 && div7 !== ""){
        alert("Player " + div7+ " is the winner!")
        addScore(div7)
        removeListener()
    }else if (div1 === div5 && div5 === div9 && div1 !== ""){
        alert("Player " + div1+ " is the winner!")
        addScore(div1)
        removeListener()
    }else if (div3 === div5 && div5 === div7 && div3 !== ""){
        alert("Player " + div3+ " is the winner!")
        addScore(div3)
        removeListener()
    }else if (div1 === div4 && div4 === div7 && div1 !== ""){
        alert("Player " + div1+ " is the winner!")
        addScore(div1)
        removeListener()
    }else if (div2 === div5 && div5 === div8 && div2 !== ""){
        alert("Player " + div2+ " is the winner!")
        addScore(div2)
        removeListener()
    }else if (div3 === div6 && div6 === div9 && div3 !== ""){
        alert("Player " + div3+ " is the winner!")
        addScore(div3)
        removeListener()
    } else if((div1==="X"||div1==="O") && (div2==="X"||div2==="O") && (div3==="X"||div3==="O") && (div4==="X"||div4==="O") && (div5==="X"||div5==="O") && (div6==="X"||div6==="O") && (div7==="X"||div7==="O") && (div8==="X"||div8==="O") && (div9==="X"||div9==="O")){
        alert("It's a tie!")
        removeListener()
    }
}