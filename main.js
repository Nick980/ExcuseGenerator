let nickName;
let i;

const randomExcuse = () => {
    let j = Math.floor(Math.random() * 10);
    if(j == 1) {
        alert(`${nickName} "Can't tonight, I'm out with work"`);
        location = location;
    } else {
        if(j == 2) {
            alert(`${nickName} "Can't tonight, I've got the shits"`);
            location = location;
        } else{
            if(j == 3) {
                alert(`${nickName} "Can't tonight, I'm having my hair cut"`);
                location = location;
            } else {
                if(j == 4) {
                    alert(`${nickName} "Can't tonight, I'm having a wank"`);
                    location = location;
                } else {
                    if(j == 5) {
                        alert(`${nickName} "Can't tonight, I'm watching a movie"`);
                        location = location;
                    } else {
                        if(j == 6) {
                            alert(`${nickName} "Can't tonight, I'm watching paint dry"`);
                            location = location;
                        } else {
                            if(j == 7) {
                                alert(`${nickName} "Can't tonight, I'm cuddling Milo"`);
                                location = location;
                            } else {
                                if(j == 8) {
                                    alert(`${nickName} "Can't tonight, I'm cuddling Merlin"`);
                                    location = location;
                                } else {
                                    if(j == 9) {
                                        alert(`${nickName} "Can't tonight, I'm cuddling Alfie"`);
                                        location = location;
                                    } else {
                                        if(j == 10) {
                                            alert(`${nickName} "Can't tonight, I'm being anti-social, the government told me to"`);
                                            location = location;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const goingOut = () => {
    alert(`${playerName}: "${nickName} do you want to go out tonight?`);
    if(i >= 8) {
        let goPub = prompt(`${nickName}: "Sure, pub?" [Yes/No]`);
        if(goPub.toLowerCase() == 'yes') {
            alert(`Ok cool, I'll drive`);
            exit;
        } else {
            if(goPub.toLowerCase() == 'no') {
            alert(`On second thought I'll stay in`);
            alert(`You guys have fun`);
            exit;
            } else {
                alert(`Invalid selection, please enter Yes or No`);
                goingOut();
            }
        }
    } else {
        randomExcuse();
    }
}

const doYouWantToGoOut = () => {
    let answer = prompt(`Do you want to ask ${nickName} if he wants to go out tonight? [Yes/No]`);
    if(answer.toLowerCase() == 'yes') {
        goingOut();
    } else {
        if(answer.toLowerCase() == 'no') {
        alert(`Ok, have a nice night without ${nickName}`);
        exit();
        } else {
            alert(`Invalid selection, please enter Yes or No`);
            doYouWantToGoOut();
        }
    }
}

const nameCheck = () => {
    enterName = prompt("Please enter your surname: [Hopwood/Robinson]");
    playerName = enterName.charAt(0).toUpperCase();
    endOfName = enterName.substring(1).toLowerCase();
    playerName = playerName + endOfName;
    if(playerName.length <= 2) {
    alert(`Name to Short`);
    nameCheck();
    } else {
        if(playerName == 'Robinson') {
            nickName = 'Chamberlain';
        } else {
            if(playerName == 'Hopwood') {
                nickName = 'Chambers';
            } else {
                alert(`Who are you?`)
                alert(`Why would I want to do anything with you?`)
                alert(`Goodbye`);
                exit;
            }
        }
    }
}

const startProcess = () => {
    i = Math.floor(Math.random() * 10);
    nameCheck();
    doYouWantToGoOut();
    location = location;
}
