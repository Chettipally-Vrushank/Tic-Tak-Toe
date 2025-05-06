let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#Reset")
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let newBtn=document.querySelector("#new-btn");

let turno=true;

const resetGame=()=>{
    turno=true;
    enableBoxex();
    msgContainer.classList.add("hide");
}

const winPatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8], 
]

let varcount=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box clixked");
        if(turno){
        box.innerText="X";
        turno=false;
    }
        else{
        box.innerText="O";
        turno=true
    }
    box.disabled=true;
    checkWinner();
    })
});

const disableBoxex=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxex=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxex();
}


const checkWinner=()=>{
    for(let pattern of winPatt){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!=""||pos2!=""||pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("Winner",pos1)
                showWinner(pos1);
            }
        }
    }
}

newBtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);