console.log("Welcome to tic tac toe")

let music=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3");
let over=new Audio("gameover.mp3");

let turn="X";
let isgameover=false;
let boxContents=document.getElementsByClassName("box-content");



//Function to return the turn
const changeTurn=()=>{
    return turn ==="X"?"O":"X";
}

// Function to check for win

const checkWin=()=>{
    

    let wins=[
        [0,1,2,5,5,0 ],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,65,15,135]
    ]

    wins.forEach(e =>{
        if ((boxContents[e[0]].innerText===boxContents[e[1]].innerText) && (boxContents[e[2]].innerText===boxContents[e[1]].innerText) &&(boxContents[e[0]].innerText !=="")){
      
            document.querySelector(".info").innerText=boxContents[e[0]].innerText+ " won!";
            isgameover=true;
             document.querySelector('.line').style.width="22vw";
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
        

    })
}

//Main game logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxContent=element.querySelector(".box-content");// why no document.queryselector
    element.addEventListener('click',()=>{// why not e
        if(boxContent.innerText==='' && !isgameover){
            boxContent.innerText=turn;
         
            turn=changeTurn();
            audioturn.play();
            checkWin();
            
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;// what is this actually showing
            }

        }
    })

})

// Add on click listener to reset button

reset.addEventListener('click',()=>{
    let boxContents=document.querySelectorAll('.box-content');
    Array.from(boxContents).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    isgameover=false;
      document.querySelector('.line').style.width="0px";
    document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
     


})