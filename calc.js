//var run = true;
let twistedcheck = "boxtencosmoyattapoppylooeyshrimpotishabrightneyconniefinnrazzle&dazzlerazzleanddazzlerodgerteagantoodlesflutterfluttersgigiglistengoobscrapsastropebbleveeshellysproutdandyrudiegingercoalbobette"
let pinfo = [//Normal toons
    ["Boxten","Health: 3 stars\nSkill Check: 3 stars\nMovement Speed: 3 stars\nStamina: 3 stars\nStealth: 3 stars\nExtraction Speed: 3 stars\nWindup(Passive): This Toon gains 6% more Extraction Speed for every alive Toon in the round. Maxes at 48%.\n"],
    ["Brightney","Health: 3 stars\nSkill Check: 3 stars\nMovement Speed: 3 stars\nStamina: 4 stars\nStealth: 1 stars\nExtraction Speed: 4 stars\nNight Light(Active): This Toon can shine lights on Twisteds to make them visible during Blackouts for 8 seconds. Has a Cooldown of 45.\n"],
    ["Connie","Health: 3 stars\nSkill Check: 2 stars\nMovement Speed: 1 stars\nStamina: 3 stars\nStealth: 5 stars\nExtraction Speed: 4 stars\nHaunting Escape(Active): This Toon uses her ability to become invisible for 5 seconds. Twisteds will not be able to notice her during this time, unless she is up against a Lethal Twisted, which will still see her. Has a cooldown of 50.\n"],
    ["Cosmo","Health: 3 stars\nSkill Check: 1 stars\nMovement Speed: 3 stars\nStamina: 4 stars\nStealth: 4 stars\nExtraction Speed: 3 stars\nSharing is Caring(Active): This Toon can give one of his own Hearts to heal a targeted Toon. Cannot be used when at 1 Heart. Has a Cooldown of 60.\n"],
    ["Finn","Health: 3 stars\nSkill Check: 4 stars\nMovement Speed: 3 stars\nStamina: 2 stars\nStealth: 3 stars\nExtraction Speed: 3 stars\nReel In(Passive):This Toon gains a 33% Movement Speed boost when any Machine is completed for 10 seconds.\n"],
    ["Flutter","Health: 3 stars\nSkill Check: 2 stars\nMovement Speed: 4 stars\nStamina: 4 stars\nStealth: 3 stars\nExtraction Speed: 2 stars\nFloaty Dash(Active): This Toon can dash forward, drastically increasing her Movement Speed for 0.75 seconds. Has a cooldown of 45 seconds.\n"],
    ["Gigi","Health: 3 stars\nSkill Check: 5 stars\nMovement Speed: 3 stars\nStamina: 1 stars\nStealth: 3 stars\nExtraction Speed: 3 stars\nSurprise!(Active): This Toon can grant herself a random item from any Tier (Dandy's Shop items included). Has a Cooldown of 80.\n"],
    ["Glisten","Health: 3 stars\nSkill Check: 2 stars\nMovement Speed: 3 stars\nStamina: 3 stars\nStealth: 2 stars\nExtraction Speed: 5 stars\nReflection(Active): This Toon can travel through a mirror, instantly teleporting to a targeted Toon regardless of line of sight and can inflict Confused III on himself. Has a cooldown of 100.\n"],
    ["Goob","Health: 3 stars\nSkill Check: 3 stars\nMovement Speed: 4 stars\nStamina: 4 stars\nStealth: 2 stars\nExtraction Speed: 2 stars\nHug!(Active): This Toon can pull other Toons towards his position. Needs direct line of sight. 30 second cooldown.\n"],
    ["Looey","Health: 3 stars\nSkill Check: 4 stars\nMovement Speed: 3 stars\nStamina: 3 stars\nStealth: 2 stars\nExtraction Speed: 3 stars\nHeart of Helium(Passive): For each missing heart this Toon has, they gain 20% more walk and run speed mulitplier. At one heart this Toon gains 20% more speed multiplier. His speed is reduced back when healed.\n"],
    ["Poppy","Health: 3 stars\nSkill Check: 3 stars\nMovement Speed: 3 stars\nStamina: 3 stars\nStealth: 3 stars\nExtraction Speed: 3 stars\nPanic Pop(Passive): This Toon receives a 50% Speed boost for 3 seconds when attacked.\n"],
    ["Razzle & Dazzle","Health: 3 stars\nSkill Check: 3 stars\nMovement Speed: 3 stars\nStamina: 3 stars\nStealth: 3 stars\nExtraction Speed: 3 stars\nComedy/Tragedy(Passive): This Toon swaps between Movement Speed on odd numbered Floors, and Extraction Speed on even numbered Floors.\n"],
    ["Rodger","Health: 3 stars\nSkill Check: 3 stars\nMovement Speed: 2 stars\nStamina: 3 stars\nStealth: 3 stars\nExtraction Speed: 4 stars\nDetective(Passive) This Toon gains twice the amount of Research from Capsules and encountering Twisteds.\n"],
    ["Scraps","Health: 3 stars\nSkill Check: 2 stars\nMovement Speed: 2 stars\nStamina: 5 stars\nStealth: 3 stars\nExtraction Speed: 3 stars\nCrafty Grapple(Active): This Toon can pull herself towards another Toon's targeted position. Needs direct line of sight (LoS); Has invincibility frames during the animation. 25 Second Cooldown.\n"],
    ["Shrimpo","Health: 3 stars\nSkill Check: 1 stars\nMovement Speed: 1 stars\nStamina: 1 stars\nStealth: 1 stars\nExtraction Speed: 1 stars\nBully(Passive): Stealth is drastically lower than any other Toon. Only play this Toon if you are looking for a challenge.\n"],
    ["Teagan","Health: 3 stars\nSkill Check: 3 stars\nMovement Speed: 3 stars\nStamina: 4 stars\nStealth: 2 stars\nExtraction Speed: 3 stars\nTea Time(Active): This Toon can spend 100 Tapes to heal themselves by 1 Heart. Has a Cooldown of 100.\n"],
    ["Tisha","Health: 3 stars\nSkill Check: 4 stars\nMovement Speed: 4 stars\nStamina: 2 stars\nStealth: 3 stars\nExtraction Speed: 2 stars\nTidy Up!(Active): This Toon can create a pulse that increases the movement speed of Toons around her by 25% for 5 seconds. Has a cooldown of 50.\n"],
    ["Toodles","Health: 3 stars\nSkill Check: 3 stars\nMovement Speed: 3 stars\nStamina: 3 stars\nStealth: 4 stars\nExtraction Speed: 2 stars\nBeginner's Luck(Active): This Toon can roll for a 15% boost to a random Stat that lasts for 10 seconds. Has a cooldown of 25.\n"],
    ["Yatta","Health: 3 stars\nSkill Check: 3 stars\nMovement Speed: 4 stars\nStamina: 1 stars\nStealth: 2 stars\nExtraction Speed: 5 stars\nPiñata Party(Passive): This Toon drops 2 random candy items after completing a machine, and 4 random candy items when injured.\n"],
    //Mains + event Mains
    ["Astro","Health: 2 stars\nSkill Check: 2 stars\nMovement Speed: 3 stars\nStamina: 3 stars\nStealth: 5 stars\nExtraction Speed: 3 stars\nNap Time(Active): This Toon can create a pulse that fully restores the Stamina of the Toons around him. Has a cooldown of 75.\nWell Rested(Passive): This Toon regenerates Stamina 50% faster, and can see Toons below 50% Stamina around the map.\n"],
    ["Pebble","Health: 2 stars\nSkill Check:3 stars\nMovement Speed: 5 stars\nStamina: 4 stars\nStealth: 3 stars\nExtraction Speed: 1 stars\nSpeak!(Active): This Toon can bark loudly, drastically decreasing Stealth to a value of -40 and alerting any Twisteds nearby to his location. Has a cooldown of 60.\nFetch!(Passive): This Toon can sniff out items, causing them to be highlighted when in the Toon's vicinity.\n"],
    ["Shelly","Health: 2 stars\nSkill Check: 5 stars\nMovement Speed: 3 stars\nStamina: 2 stars\nStealth: 3 stars\nExtraction Speed: 3 stars\nInspiration(Active): This Toon can boost the Extraction Speed of a selected Toon by 75% for 15 seconds. Has a cooldown of 60.\nProblem solver(Passive): This Toon gains a 25% Movement Speed boost when any Machine is completed for 10 seconds.\n"],
    ["Sprout","Health: 2 stars\nSkill Check: 2 stars\nMovement Speed: 4 stars\nStamina: 5 stars\nStealth: 3 stars\nExtraction Speed: 2 stars\nBaked Sweets(Active): This Toon can heal a targeted Toon by 1 Heart at the cost of 100 Tapes. For each extra Sprout, the cost increases by 50 Tapes and the Cooldown increases by 30. Has a cooldown of 100.\nOverprotective(Passive): This Toon can see where all the other alive Toons are, along with their current Health status.\n"],
    ["Vee","Health: 2 stars\nSkill Check: 4 stars\nMovement Speed: 2 stars\nStamina: 3 stars\nStealth: 2 stars\nExtraction Speed: 5 stars\nMic Check(Active): This Toon can highlight all Twisteds on the Floor for 5 seconds. Has a Cooldown of 60.\nCamera Hijack(Passive): This Toon will have the nearest uncompleted Machine highlighted for them.\n"],
    ["Bobette","Health: 2 stars\nSkill Check: 4 stars\nMovement Speed: 3 stars\nStamina: 5 stars\nStealth: 2 stars\nExtraction Speed: 2 stars\nPrecious Packaging(Active): This Toon can duck and cover herself into a gift box for 8 seconds, in which she is invincible yet unable to move. Has a Cooldown of 90.\nFestive Aura(Passive): The festive aura of this Toon passively gives those around her 50% faster stamina regeneration.\n"],
   //Event toons without main (Bobette)
    ["Coal","Health: 3 stars\nSkill Check: 2 stars\nMovement Speed: 4 stars\nStamina: 4 stars\nStealth: 3 stars\nExtraction Speed: 2 stars\nScout!(Active): This Toon can sniff out items across the map, causing items to be highlighted for all Toons for 10 seconds. Has a cooldown of 100\n"],
    ["Ginger","Health: 3 stars\nSkill Check: 3 stars\nMovement Speed: 2 stars\nStamina: 3 stars\nStealth: 4 stars\nExtraction Speed: 3 stars\nBaked with Care!(Active): This Toon can give one of her own Hearts to heal a targeted Toon. Cannot be used when at 1 Heart. Has a Cooldown of 100\n"],
    ["Rudie","Health: 3 stars\nSkill Check: 3 stars\nMovement Speed: 3 stars\nStamina: 3 stars\nStealth: 3 stars\nExtraction Speed: 3 stars\nAntler Charge(Active): This Toon uses his antlers to quickly charge forward in a short burst, increasing his movement speed for 0.4 seconds. Has a Cooldown of 23\n"],
];
const toonsinfo = new Map(pinfo);

let tinfo = [

    //Common Twisteds
    ["Twisted Boxten", "Type: Common\nSpeed: 10 walking, 18 chasing\nPanic Mode Speed: 12.5 walking, 22.5 chasing\nAttention Span: 1.5 seconds\nDetection Range: Average(60 direct vision, 26 peripheral)\nMechanic: None :D\n"],
    ["Twisted Cosmo", "Type: Common\nSpeed: 10 walking, 18 chasing\nPanic Mode Speed: 12.5 walking, 22.5 chasing\nAttention Span: 1.5 seconds\nDetection Range: Average(60 direct vision, 26 peripheral)\nMechanic: None :D\n"],
    ["Twisted Poppy", "Type: Common\nSpeed: 10 walking, 18 chasing\nPanic Mode Speed: 12.5 walking, 22.5 chasing\nAttention Span: 1.5 seconds\nDetection Range: Average(60 direct vision, 26 peripheral)\nMechanic: None :D\n"],
    ["Twisted Looey", "Type: Common\nSpeed: 10 walking, 18 chasing\nPanic Mode Speed: 12.5 walking, 22.5 chasing\nAttention Span: 1.5 seconds(Description implies it should be higher, however the info I found does not show this)\nDetection Range: Average(60 direct vision, 26 peripheral)(Description implies it should be higher, however the info I found does not show this)\nMechanic: None :D\n"],
    ["Twisted Shrimpo", "Type: Common\nSpeed: 9.5 walking, 16.5 chasing\nPanic Mode Speed: 11.87 walking, 20.62 chasing\nAttention Span: 2 seconds\nDetection Range: Above-Average(70 direct vision, 28 peripheral)\nMechanic: None :D\n"],
    ["Twisted Tisha", "Type: Common\nSpeed: 10 walking, 18 chasing\nPanic Mode Speed: 12.5 walking, 22.5 chasing\nAttention Span: 1.5 seconds\nDetection Range: Average(60 direct vision, 26 peripheral)\nMechanic: Sweeps the floors, idling in an area for 10 seconds at a time\n"],
    ["Twisted Yatta", "Type: Common\nSpeed: 10 walking, 19 chasing\nPanic Mode Speed: 12.5 walking, 23.75 chasing\nAttention Span: 1.5 seconds\nDetection Range: Average(60 direct vision, 30 peripheral)\nMechanic: None :D\n"],
    //Uncommon Twisteds
    ["Twisted Brightney", "Type: Uncommon\nSpeed: 12 walking, 18 chasing\nPanic Mode Speed: 15 walking, 22.5 chasing\nAttention Span: 2 seconds\nDetection Range: Above-Average(65 direct vision, 26 peripheral)\nMechanic: Increases the chance of a blackout on any floor she appears by re-rolling the Blackout chance if one does not occur\n"],
    ["Twisted Connie", "Type: Uncommon\nSpeed: 8 walking\nMechanic: Wanders around while passive and temporarily possessing any machine she finds and walks to. Gives warnings during possession by causing the machine's red light to turn blue and make noises. Sends an unavoidable attack if a Toon tries to extract it"],
    ["Twisted Finn", "Type: Uncommon\nSpeed: 8.5 walking, 16 chasing\nPanic Mode Speed: 10.62 walking, 20 chasing\nAttention Span: 1.5 seconds\nDetection Range: Below Average(55 direct vision, 26 peripheral)\nMechanic: Applies Slow III to a player who completes a machine for 5 seconds\n"],
    ["Twisted Razzle & Dazzle", "Type: Uncommon\nSpeed: 0(Static)\nDetection Range: Below-Average(40 peripheral)\nMechanic: If a Toon runs within the circle, their hostile state will activate. Upon spotting a Toon, they will cause vines to shoot up from the ground underneath the Toon, stabbing at their feet and causing one Heart's worth of damage. If 15 seconds pass without a Toon entering their circle during their hostile state, they will return to their idle position\n"],
    ["Twisted Rodger", "Type: Uncommon\nSpeed: 0(Static)\nDetection Range: Below-Average(30 peripheral)\nMechanic: Spawns from a fake capsule being pick up, applies Slow III and Confused III when his fake capsule is picked up. Goes idle if not spotting anyone for 15 seconds\n"],
    ["Twisted Teagan", "Type: Uncommon\nSpeed: 10 walking, 18.5 chasing\nPanic Mode Speed: 12.5 walking, 23.12 chasing\nAttention Span: 1.75 seconds\nDetection Range: Average(60 direct vision, 26 peripheral)\nMechanic: This twisted steals a certain amount of Tapes from you if she hits you\n"],
    ["Twisted Toodles", "Type: Uncommon\nSpeed: 12 walking, 20 chasing\nPanic Mode Speed: 15 walking, 25 chasing\nAttention Span: 1 second\nDetection Range: Below Average(60 direct vision, 25 peripheral)\nMechanic: None :D\n"],
    //Rare Twisteds
    ["Twisted Flutter", "Type: Rare\nSpeed: 18 walking, 18.5 chasing\nPanic Mode Speed: 22.5 walking, 23.12 chasing\nAttention Span: 2 seconds\nDetection Range: Above-Average(65 direct vision, 30 peripheral)\nMechanic: Very fast Walking Speed, and doesn't pause while moving\n"],
    ["Twisted Gigi", "Type: Rare\nSpeed: 10 walking, 19 chasing\nPanic Mode Speed: 12.5 walking, 23.75 chasing\nAttention Span: 2.25 seconds\nDetection Range: Above-Average(65 direct vision, 30 peripheral)\nMechanic: Attempts to steal the item in your inventory with her hand, in order left to right. Has a cooldown of 12 seconds\n"],
    ["Twisted Glisten", "Type: Rare\nSpeed: 6 walking\nEnraged Speed: 15 walking, 24 chasing\nPanic Mode Speed: 18.75 walking, 30 chasing\nAttention Span: 3 seconds\nDetection Range: Average(60 direct vision, 25 peripheral)\nMechanic: He has a meter above his head that increases when a Toon is not near him for some time, and decreases when one is close. When the meter is full, Glisten becomes faster and aggressive. After you finish all the Machines, he becomes aggressive immediately. Once he is enraged, there is no way to get him back to passive\n"],
    ["Twisted Goob", "Type: Rare\nSpeed: 8 walking, 16 chasing\nPanic Mode Speed: 10 walking, 20 chasing\nAttention Span: 3 seconds\nDetection Range: Average(65 direct vision, 26 peripheral)\nMechanic: Twisted Goob will pull any Toon in his line of sight, This can however be prevented by staying out of this Twisted's sight, or hiding behind an object as he tries to pull you. Has a cooldown of 12\n"],
    ["Twisted Scraps", "Type: Rare\nSpeed: 8 walking, 16 chasing\nPanic Mode Speed: 10 walking, 20 chasing\nAttention Span: 2 seconds\nDetection Range: Above-Average(75 direct vision, 30 peripheral)\nMechanic: Her special ability allows her to attack a toon at range using her tail, dealing one heart's worth of damage. Has a cooldown of 15\n"],
    //Main Twisteds
    ["Twisted Astro", "Type: Main\nSpeed: 10 walking, 19 chasing\nPanic Mode Speed: 12.5 walking, 23.75 chasing\nAttention Span: 3 seconds\nDetection Range: Above-Average(70 direct vision, 30 peripheral)\nMechanic: Will charge to and steal progress from Machines if a Skill Check is failed and no Toons are spotted, as well as applying the Tired III debuff to a specific Toon when spotted\n"],
    ["Twisted Pebble", "Type: Main\nSpeed: 10 walking, 25 chasing\nPanic Mode Speed: 12.5 walking, 31.25 chasing\nAttention Span: 3 seconds\nDetection Range: Very High(125 direct vision, 35 peripheral)\nMechanic: None :D\n"],
    ["Twisted Vee", "Type: Main\nSpeed: 10 walking, 18 chasing\nPanic Mode Speed: 12.5 walking, 22.5 chasing\nAttention Span: 3 seconds\nDetection Range: Above-Average(60 direct vision, 30 peripheral)\nMechanic: Applies Slow II to players being chased by Twisted Vee (10 second cooldown), as well as spawning pop-up ads on players screens (45 second cooldown). Can detect sounds from anywhere\n"],
    ["Twisted Shelly", "Type: Main\nSpeed: 10 walking, 20 chasing\nPanic Mode Speed: 12.5 walking, 25 chasing\nAttention Span: 2 seconds\nDetection Range: Average(60 direct vision, 30 peripheral)\nMechanic: Applies the Confused I Debuff to every Toon on the Floor, causing them to extract much slower than usual (-25% Extraction Speed)\n"],
    ["Twisted Sprout", "Type: Main\nSpeed: 8.5 walking, 17 chasing\nPanic Mode Speed: 10.62 walking, 21.25 chasing\nAttention Span: 3 seconds\nDetection Range: Above-Average(60 direct vision, 28 peripheral)\nMechanic: When detecting a Toon, will leave a deadly tendril under the detected Toon, attacking anyone that steps on it for too long. Has a cooldown of 10\n"],
    //Lethal Twisteds
    ["Twisted Dandy", "Type: Lethal\nSpeed: 9 walking, 16 chasing\nPanic Mode Speed: 11.25 walking, 20 chasing\nAttention Span: 5 seconds\nDetection Range: High(80 direct vision, 35 peripheral)\nMechanic: Twisted Dandy goes after Machines when finished, along with instantly killing anyone they attack\n"],
    //Event Twisteds
    ["Twisted Rudie", "Type: Common\nSpeed: 10 walking, 18 chasing\nPanic Mode Speed: 12.5 walking, 22.5 chasing\nAttention Span: 1.5 seconds\nDetection Range: Average(60 direct vision, 26 peripheral)\nMechanic: Has a glow showing where he is\n"],
    ["Twisted Ginger", "Type: Uncommon\nSpeed: 6 walking, 14 chasing\nPanic Mode Speed: 7.5 walking, 17.5 chasing\nAttention Span: 10 seconds\nDetection Range: Above-Average(65 direct vision, 28 peripheral)\nMechanic: None :D\n"],
    ["Twisted Coal", "Type: Rare\nSpeed: 8 walking, 16 chasing\nBlackout Speed: 10 walking, 25 chasing\nAttention Span: 5 seconds on normal floors, 3 seconds during Blackouts\nDetection Range: High(Blackouts floors)(125 direct vision, 35 peripheral), Medium(Normal floors)(70 direct vision, 35 peripheral vision)\nMechanic: Higher speed, detection range, hitbox, but lower attention span during Blackouts\n"],
    ["Twisted Bobette", "Type: Main\nSpeed: 8 walking, 23 chasing\nPanic Mode Speed: 10 walking, 28.75 chasing\nAttention Span: 2.5 seconds\nDetection Range: High(80 direct vision, 40 peripheral)\nMechanic: Charges towards the location of any picked-up item, tape or ornament within a 180 radius. Does not including Research Capsules\n"]
];
const twistedsinfo = new Map(tinfo)

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
function toons(){
    
    toonpick = prompt("What Toon do you want info on? (Make sure to capatalize their names!)").toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    if (toonpick === "Razzle And Dazzle" || toonpick === "Razzle & Dazzle" || toonpick === "Razdaz" || toonpick === "Raz Daz"){
        alert("Razzle & Dazzle" + "\n" + toonsinfo.get("Razzle & Dazzle"));
    }

    else if (toonpick === "Flutter" || toonpick === "Flutters"){
        alert("Flutter" + "\n" + toonsinfo.get("Flutter"));
    }

    else if (toonsinfo.has(toonpick)){
        alert(toonpick + "\n" + toonsinfo.get(toonpick));
    }
    else{
        alert("Shrimpo, my favourite Shrimp. Was your hand a little shaky, do you need professional help? Maybe you forgot your capatalization? Whatever it may be, one thing is for certain, you're getting bullied (Ironic, isn't it?)")
    }
}
function twistedinfo(){
    let twistedcapcheck = prompt("What Toon do you want info on? (Make sure to capatalize their names!)");
    let twistedpick = twistedcapcheck.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    if (twistedpick === "Razzle And Dazzle" || twistedpick === "Twisted Razzle And Dazzle" || twistedpick === "Razzle & Dazzle" || twistedpick === "Twisted Razzle & Dazzle" || twistedpick === "Razdaz" || twistedpick === "Twisted Razdaz" || twistedpick === "Raz Daz" || twistedpick === "Twisted Raz Daz"){
        alert("Twisted Razzle & Dazzle" + "\n" + twistedsinfo.get("Twisted Razzle & Dazzle"));
    }

    else if (twistedpick === "Flutter" || twistedpick === "Twisted Flutter" ||twistedpick === "Flutters" || twistedpick === "Twisted Flutters"){
        alert("Twisted Flutter" + "\n" + twistedsinfo.get("Flutter"));
    }

    else if (toonsinfo.has(twistedpick) || twistedsinfo.has(twistedpick)){
        if (twistedpick.startsWith("Twisted")){
            alert(twistedpick + "\n" + twistedsinfo.get(twistedpick));
        }
        else{
            alert("Twisted " + twistedpick + "\n" + twistedsinfo.get("Twisted " + twistedpick));
        }
    }
    else{
        if (twistedcapcheck === twistedcapcheck.toUpperCase()){
            alert("Shrimpo... I thought I understood you. Did you not realize you have -99 stealth? Get off Assassin's Creed and maybe do your job\n")
        }
        else{
            let count = 0;
               
            for (let checkword of toonsinfo.keys()){
                if (twistedpick.toLowerCase().includes(checkword.toLowerCase())){
                    count ++;
                }
            }
            if (count >= 2){
                alert("Shrimpo, twisted info does not mean interrogating twisteds in ways that should be war crimes. That's Dandy's job not yours\n")
            }
            else{
                alert("Yo Shrimpo, my lil krill, when I said twisted info, I didn't mean torture people with seafood allergies\n")
            }
        }
        }
    }

