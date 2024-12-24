let Tans =""
let count = 0;
let game = false
const StartGame = (state) =>{
    if (!state) {
        game =  false;
        document.getElementById("output").innerText =`Press Start to begin the game.`
        return;
    }else{
        Random();
        game =  true;
    }
    document.getElementById("output").innerText = `Game Start` ;
}


const GetAnswer = (text) => {
    if(game){
        check(text);
        return ;
    }
    document.getElementById("output").innerText =`plaess start game`
    return ;
}


const Random = () => {
    const text = "ABCD"
    let index = Math.floor(Math.random() * text.length)
    Tans = text[index]
}

const check = ( ans ) => {
    count++;

    if (ans === Tans) {
        Swal.fire({
            title: "🎉 you win 🎉",
            icon: "success",
            draggable: true
          });
        ResetGame();
        
        return ;
    }
    if (count >= 3 ) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `answer is ${Tans}`,
          });
         ResetGame();
         return ;
    }
     document.getElementById("output").innerText =`your answer ${ans} worng try again..`
}

const ResetGame=()=>{
    Tans =""
    count = 0;
    game = false
    return ;
}