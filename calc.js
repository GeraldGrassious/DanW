var run = true;

function twisteds(){
    let player = prompt("How many Alive players on the floor?");
    if (isNaN(player) === false && player !== null){
        if (player % 1 !== 0){
            alert("I see you're trying to break my program Shrimpo, well let me help you, I'll break it for you.");
            window.location.href = "https://www.bing.com/search?pglt=41&q=local+therapists+office+near+me+for+shrimps+with+anger+issues&cvid=a29b55b647a746b18c21f6988256656e&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCTE3NzM1ajBqMagCALACAA&FORM=ANNTA1&PC=U531";
            return;
        }
        else{
            player = parseInt(player);
        }
    }
    else{
        alert("Oh Shrimpo, master of literature, rookie at basic reading. Look man, if you can't type a simple whole number, you don't deserve to even use this program");
        window.location.href = "https://www.bing.com/search?pglt=41&q=local+therapists+office+near+me+for+shrimps+with+anger+issues&cvid=a29b55b647a746b18c21f6988256656e&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCTE3NzM1ajBqMagCALACAA&FORM=ANNTA1&PC=U531";
        return;
    }
    if (player <= 0 || player > 8){
        alert("Shrimpo my man (or women I'm not sexist), have you ever played the game? The max amount of players is 8. Also, you can't play the games with 0 players or less, which is kinda obvious.");
        return;
    }
    let floor = prompt("What floor number do you want to calculate for");
    if (isNaN(floor) === false && floor !== null){
        if (floor % 1 !== 0){
            alert("I see you're trying to break my program Shrimpo, well let me help you, I'll break it for you.");
            window.location.href = "https://www.bing.com/search?pglt=41&q=local+therapists+office+near+me+for+shrimps+with+anger+issues&cvid=a29b55b647a746b18c21f6988256656e&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCTE3NzM1ajBqMagCALACAA&FORM=ANNTA1&PC=U531";
            return;
        }
        else{
            floor = parseInt(floor);
        }
    }
    else{
        alert("Oh Shrimpo, master of literature, rookie at basic reading. Look man, if you can't type a simple whole number, you don't deserve to even use this program");
        window.location.href = "https://www.bing.com/search?pglt=41&q=local+therapists+office+near+me+for+shrimps+with+anger+issues&cvid=a29b55b647a746b18c21f6988256656e&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCTE3NzM1ajBqMagCALACAA&FORM=ANNTA1&PC=U531";
        return;
    }
    if (floor <= 0){
        alert("Shrimpo, do you need a therapist? You literally cannot go below floor 1 you dingus.");
        return;
    }

    let twisted = 0

    if (player == 1){
        /*
        if floor <= 12
            twisted = 2
        elif floor <= 16:
            twisted = 3
        elif floor <= 21:
            twisted = 4
        elif floor <= 24:
            twisted = 5
        elif floor >= 25:
            twisted = 6
    */
        if (floor <= 12){
            twisted = 2
        }
        else if (floor <= 16){
            twisted = 3
        }
        else if (floor <= 21){
            twisted = 4
        }
        else if (floor <= 24){
            twisted = 5
        }
        else if (floor >= 25){
            twisted = 6
        }
    }
    else if (player == 2){
        /*
        if floor <= 11:
            twisted = 2
        elif floor <= 15:
            twisted = 3
        elif floor <= 19:
            twisted = 4
        elif floor <= 23:
            twisted = 5
        elif floor >= 24:
            twisted = 6
    */
        if (floor <= 11){
            twisted = 2
        }
        else if (floor <= 15){
            twisted = 3
        }
        else if (floor <= 19){
            twisted = 4
        }
        else if (floor <= 23){
            twisted = 5
        }
        else if (floor >= 24){
            twisted = 6
        }
    }
    else if (player == 3){
        /*
        if floor <= 10:
            twisted = 2
        elif floor <= 14:
            twisted = 3
        elif floor <= 18:
            twisted = 4
        elif floor <= 22:
            twisted = 5
        elif floor >= 23:
            twisted = 6
    */
        if (floor <= 10){
            twisted = 2
        }
        else if (floor <= 14){
            twisted = 3
        }
        else if (floor <= 18){
            twisted = 4
        }
        else if (floor <= 22){
            twisted = 5
        }
        else if (floor >= 23){
            twisted = 6
        }
    }
    else if (player == 4){
        /*
        if floor <= 9:
            twisted = 2
        elif floor <= 13:
            twisted = 3
        elif floor <= 17:
            twisted = 4
        elif floor <= 21:
            twisted = 5
        elif floor >= 22:
            twisted = 6
    */
        if (floor <= 9){
            twisted = 2
        }
        else if (floor <= 13){
            twisted = 3
        }
        else if (floor <= 17){
            twisted = 4
        }
        else if (floor <= 21){
            twisted = 5
        }
        else if (floor >= 22){
            twisted = 6
        }
    }
    else if (player == 5){
        /*
        if floor <= 9:
            twisted = 2
        elif floor <= 12:
            twisted = 3
        elif floor <= 15:
            twisted = 4
        elif floor <= 18:
            twisted = 5
        elif floor >= 19:
            twisted = 6
    */
        if (floor <= 9){
            twisted = 2
        }
        else if (floor <= 12){
            twisted = 3
        }
        else if (floor <= 15){
            twisted = 4
        }
        else if (floor <= 18){
            twisted = 5
        }
        else if (floor >= 19){
            twisted = 6
        }
    }
    else if (player == 6 || player == 7){
        /*
        if floor <= 8:
            twisted = 2
        elif floor <= 11:
            twisted = 3
        elif floor <= 14:
            twisted = 4
        elif floor <= 17:
            twisted = 5
        elif floor >= 18:
            twisted = 6
    */
        if (floor <= 8){
            twisted = 2
        }
        else if (floor <= 11){
            twisted = 3
        }
        else if (floor <= 14){
            twisted = 4
        }
        else if (floor <= 17){
            twisted = 5
        }
        else if (floor >= 18){
            twisted = 6
        }
    }
    else if (player == 8){
        /*
        if floor <= 7:
            twisted = 2
        elif floor <= 10:
            twisted = 3
        elif floor <= 13:
            twisted = 4
        elif floor <= 16:
            twisted = 5
        elif floor >= 17:
            twisted = 6
    */
        if (floor <= 7){
            twisted = 2
        }
        else if (floor <= 10){
            twisted = 3
        }
        else if (floor <= 13){
            twisted = 4
        }
        else if (floor <= 16){
            twisted = 5
        }
        else if (floor >= 17){
            twisted = 6
        }
    }
    alert("There are " + twisted + " Twisteds on floor " + floor)
}
