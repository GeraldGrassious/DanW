var run = true;

function twisteds(){
    let player = prompt("How many Alive players on the floor?");
    let floor = prompt("What floor number do you want to calculate for");
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
    if (player == 2){
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
    if (player == 3){
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
    if (player == 4){
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
    if (player == 5){
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
    if (player == 6 || player == 7){
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
    if (player == 8){
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
