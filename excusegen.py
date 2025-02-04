import random

nickName = ""
i = 0

def random_excuse():
    j = random.randint(1, 10)
    excuses = [
        "Can't tonight, I'm out with work",
        "Can't tonight, I've got a headache",
        "Can't tonight, I'm having my hair cut",
        "Can't tonight, I'm having a nap",
        "Can't tonight, I'm watching a movie",
        "Can't tonight, I'm watching paint dry",
        "Can't tonight, I'm cuddling Milo",
        "Can't tonight, I'm cuddling Merlin",
        "Can't tonight, I'm cuddling Toby",
        "Can't tonight, I'm being anti-social"
    ]
    if 1 <= j <= 10:
        print(f'{nickName} "{excuses[j-1]}"')

def going_out():
    print(f'{playerName}: "{nickName} do you want to go out tonight?"')
    if i >= 8:
        go_pub = input(f'{nickName}: "Sure, pub?" [Yes/No]').strip().lower()
        if go_pub == 'yes':
            print("Ok cool, I'll drive")
        elif go_pub == 'no':
            print("On second thought I'll stay in")
            print("You guys have fun")
        else:
            print("Invalid selection, please enter Yes or No")
            going_out()
    else:
        random_excuse()

def do_you_want_to_go_out():
    answer = input(f'Do you want to ask {nickName} if he wants to go out tonight? [Yes/No]').strip().lower()
    if answer == 'yes':
        going_out()
    elif answer == 'no':
        print(f'Ok, have a nice night without {nickName}')
    else:
        print("Invalid selection, please enter Yes or No")
        do_you_want_to_go_out()

def name_check():
    global playerName, nickName
    enter_name = input("Please enter your surname: [Hopwood/Robinson]").strip().capitalize()
    playerName = enter_name[0].upper() + enter_name[1:].lower()
    
    if len(playerName) <= 2:
        print("Name too short")
        name_check()
    elif playerName == 'Robinson':
        nickName = 'Chamberlain'
    elif playerName == 'Hopwood':
        nickName = 'Chambers'
    else:
        print("Who are you?")
        print("Why would I want to do anything with you?")
        print("Goodbye")

def start_process():
    global i
    i = random.randint(0, 9)
    name_check()
    do_you_want_to_go_out()

start_process()