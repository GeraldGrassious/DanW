//var run = true;

function twisteds(){
    let player = prompt("How many Alive players on the floor?");
    if (isNaN(player) === false && player !== null && player !== ""){
        if (player % 1 !== 0){
            alert("I see you're trying to break my program Shrimpo, well let me help you, I'll break it for you.");
            window.location.href = "https://www.bing.com/search?pglt=41&q=local+therapists+office+near+me+for+shrimps+with+anger+issues&cvid=a29b55b647a746b18c21f6988256656e&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCTE3NzM1ajBqMagCALACAA&FORM=ANNTA1&PC=U531";
            return;
        }
        else{
            player = parseInt(player);
        }
    }
    else if (player === null || player === ""){
        return;
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
    let floor = prompt("What floor number do you want to calculate for?");
    if (isNaN(floor) === false && floor !== null && floor !== ""){
        if (floor % 1 !== 0){
            alert("I see you're trying to break my program Shrimpo, well let me help you, I'll break it for you.");
            window.location.href = "https://www.bing.com/search?pglt=41&q=local+therapists+office+near+me+for+shrimps+with+anger+issues&cvid=a29b55b647a746b18c21f6988256656e&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCTE3NzM1ajBqMagCALACAA&FORM=ANNTA1&PC=U531";
            return;
        }
        else{
            floor = parseInt(floor);
        }
    }
    else if (floor === null || floor === ""){
        return;
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
function revtwisteds(){
    let player = prompt("How many Alive players on the floor?");
    if (isNaN(player) === false && player !== null && player !== ""){
        if (player % 1 !== 0){
            alert("I see you're trying to break my program Shrimpo, well let me help you, I'll break it for you.");
            window.location.href = "https://www.bing.com/search?pglt=41&q=local+therapists+office+near+me+for+shrimps+with+anger+issues&cvid=a29b55b647a746b18c21f6988256656e&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCTE3NzM1ajBqMagCALACAA&FORM=ANNTA1&PC=U531";
            return;
        }
        else{
            player = parseInt(player);
        }
    }
    else if (player === null || player === ""){
        return;
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
    let twisted = prompt("What amount of Twisteds do you want to calculate for?");
    if (isNaN(twisted) === false && twisted !== null && twisted !== ""){
        if (twisted % 1 !== 0){
            alert("I see you're trying to break my program Shrimpo, well let me help you, I'll break it for you.");
            window.location.href = "https://www.bing.com/search?pglt=41&q=local+therapists+office+near+me+for+shrimps+with+anger+issues&cvid=a29b55b647a746b18c21f6988256656e&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCTE3NzM1ajBqMagCALACAA&FORM=ANNTA1&PC=U531";
            return;
        }
        else{
            twisted = parseInt(twisted);
        }
    }
    else if (twisted === null || twisted === ""){
        return;
    }
    else{
        alert("Oh Shrimpo, master of literature, rookie at basic reading. Look man, if you can't type a simple whole number, you don't deserve to even use this program");
        window.location.href = "https://www.bing.com/search?pglt=41&q=local+therapists+office+near+me+for+shrimps+with+anger+issues&cvid=a29b55b647a746b18c21f6988256656e&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCTE3NzM1ajBqMagCALACAA&FORM=ANNTA1&PC=U531";
        return;
    }
    if (twisted < 2 || twisted > 6){
        alert("Shrimpo, I'm getting worried? Did your friends dare you to get a lobotomy? Oh, actually, better question, do you even have friends?");
        return;
    }

    const floors = [];
    /*
        #1 Players
    elif players == 1:
        if ptwisted == 2:
            floors.append(1)
            floors.append(12)
        if ptwisted == 3:
            floors.append(13)
            floors.append(16)
        if ptwisted == 4:
            floors.append(17)
            floors.append(21)
        if ptwisted == 5:
            floors.append(22)
            floors.append(24)
        if ptwisted == 6:
            floors.append(25)
            floors.append("and above")
    */
    if (player === 1){
        if (twisted === 2){
            floors.push(1);
            floors.push(12);
        }
        else if (twisted === 3){
            floors.push(13);
            floors.push(16)
        }
        else if (twisted === 4){
            floors.push(17);
            floors.push(21)
        }
        else if (twisted === 5){
            floors.push(22);
            floors.push(24)
        }
        else if (twisted === 6){
            floors.push(25);
            floors.push("above")
        }
    }
    /*
    #2 Players
    elif players == 2:
        if ptwisted == 2:
            floors.append(1)
            floors.append(11)
        if ptwisted == 3:
            floors.append(12)
            floors.append(15)
        if ptwisted == 4:
            floors.append(16)
            floors.append(19)
        if ptwisted == 5:
            floors.append(20)
            floors.append(23)
        if ptwisted == 6:
            floors.append(24)
            floors.append("and above")
    */
    else if (player === 2){
        if (twisted === 2){
            floors.push(1);
            floors.push(11);
        }
        else if (twisted === 3){
            floors.push(12);
            floors.push(15);
        }
        else if (twisted === 4){
            floors.push(16);
            floors.push(19);
        }
        else if (twisted === 5){
            floors.push(20);
            floors.push(23);
        }
        else if (twisted === 6){
            floors.push(24);
            floors.push("above");
        } 
    }
    /*
    #3 Players
    elif players == 3:
        if ptwisted == 2:
            floors.append(1)
            floors.append(10)
        if ptwisted == 3:
            floors.append(11)
            floors.append(14)
        if ptwisted == 4:
            floors.append(15)
            floors.append(18)
        if ptwisted == 5:
            floors.append(19)
            floors.append(22)
        if ptwisted == 6:
            floors.append(23)
            floors.append("and above")
    */
    else if (player === 3){
        if (twisted === 2){
            floors.push(1);
            floors.push(10);
        }
        else if (twisted === 3){
            floors.push(11);
            floors.push(14);
        }
        else if (twisted === 4){
            floors.push(15);
            floors.push(18);
        }
        else if (twisted === 5){
            floors.push(19);
            floors.push(22);
        }
        else if (twisted === 6){
            floors.push(23);
            floors.push("above");
        } 
    }
    /*
    #4 Players
    elif players == 4:
        if ptwisted == 2:
            floors.append(1)
            floors.append(9)
        if ptwisted == 3:
            floors.append(10)
            floors.append(13)
        if ptwisted == 4:
            floors.append(14)
            floors.append(17)
        if ptwisted == 5:
            floors.append(18)
            floors.append(21)
        if ptwisted == 6:
            floors.append(22)
            floors.append("and above")
    */
    else if (player === 4){
        if (twisted === 2){
            floors.push(1);
            floors.push(9);
        }
        else if (twisted === 3){
            floors.push(10);
            floors.push(13);
        }
        else if (twisted === 4){
            floors.push(14);
            floors.push(17);
        }
        else if (twisted === 5){
            floors.push(18);
            floors.push(21);
        }
        else if (twisted === 6){
            floors.push(22);
            floors.push("above");
        } 
    }
    /*
    #5 Players
    elif players == 5:
        if ptwisted == 2:
            floors.append(1)
            floors.append(9)
        if ptwisted == 3:
            floors.append(10)
            floors.append(12)
        if ptwisted == 4:
            floors.append(13)
            floors.append(15)
        if ptwisted == 5:
            floors.append(16)
            floors.append(18)
        if ptwisted == 6:
            floors.append(19)
            floors.append("and above")
    */
    else if (player === 5){
        if (twisted === 2){
            floors.push(1);
            floors.push(9);
        }
        else if (twisted === 3){
            floors.push(10);
            floors.push(12);
        }
        else if (twisted === 4){
            floors.push(13);
            floors.push(15);
        }
        else if (twisted === 5){
            floors.push(16);
            floors.push(18);
        }
        else if (twisted === 6){
            floors.push(29);
            floors.push("above");
        } 
    }
    /*
    #6 Players
    elif players == 6:
        if ptwisted == 2:
            floors.append(1)
            floors.append(8)
        if ptwisted == 3:
            floors.append(9)
            floors.append(11)
        if ptwisted == 4:
            floors.append(12)
            floors.append(14)
        if ptwisted == 5:
            floors.append(15)
            floors.append(17)
        if ptwisted == 6:
            floors.append(18)
            floors.append("and above")
    */
    else if (player === 6){
        if (twisted === 2){
            floors.push(1);
            floors.push(8);
        }
        else if (twisted === 3){
            floors.push(9);
            floors.push(11);
        }
        else if (twisted === 4){
            floors.push(12);
            floors.push(14);
        }
        else if (twisted === 5){
            floors.push(15);
            floors.push(17);
        }
        else if (twisted === 6){
            floors.push(18);
            floors.push("above");
        } 
    }
    /*
        #7 Players
    elif players == 7:
        if ptwisted == 2:
            floors.append(1)
            floors.append(8)
        if ptwisted == 3:
            floors.append(9)
            floors.append(11)
        if ptwisted == 4:
            floors.append(12)
            floors.append(14)
        if ptwisted == 5:
            floors.append(15)
            floors.append(17)
        if ptwisted == 6:
            floors.append(18)
            floors.append("and above")
    */
    else if (player === 7){
        if (twisted === 2){
            floors.push(1);
            floors.push(8);
        }
        else if (twisted === 3){
            floors.push(9);
            floors.push(11);
        }
        else if (twisted === 4){
            floors.push(12);
            floors.push(14);
        }
        else if (twisted === 5){
            floors.push(15);
            floors.push(17);
        }
        else if (twisted === 6){
            floors.push(18);
            floors.push("above");
        } 
    }
    /*
    #8 Players
    elif players == 8:
        if ptwisted == 2:
            floors.append(1)
            floors.append(7)
        if ptwisted == 3:
            floors.append(8)
            floors.append(10)
        if ptwisted == 4:
            floors.append(11)
            floors.append(13)
        if ptwisted == 5:
            floors.append(14)
            floors.append(16)
        if ptwisted == 6:
            floors.append(17)
            floors.append("and above") 
    */
    else if (player === 8){
        if (twisted === 2){
            floors.push(1);
            floors.push(7);
        }
        else if (twisted === 3){
            floors.push(8);
            floors.push(10);
        }
        else if (twisted === 4){
            floors.push(11);
            floors.push(13);
        }
        else if (twisted === 5){
            floors.push(14);
            floors.push(16);
        }
        else if (twisted === 6){
            floors.push(17);
            floors.push("above");
        } 
    }
    alert("There will be " + twisted + " twisteds between floor " + floors[0] + " and " + floors[1] + " if there are " + [player] + " players")
}

