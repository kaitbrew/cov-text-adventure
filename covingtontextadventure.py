#SLOW TEXT EFFECT
import time
import os
def prints(text, delay=0.01):
    for char in text:
        if char == '\n':
            print()
        else:
            print(char, end='', flush=True)
            time.sleep(delay)

#DEFINE NUMBERED LIST BEHAVIOR
def print_numbered_list(options):
    for i, option in enumerate(options, 1):
        prints(f"{i}. {option}")
def remove_selected_option(options, selected_option):
    return [option for option in options if option != selected_option]

#SET DIRECTORY
os.chdir(os.path.dirname(os.path.abspath(__file__)))

#NAME ENTRY
prints('What was your name, again?')
name = input("\n>").title()

#NAME CONFIRM
prints(f"Are you sure you want to be called {name}?\n1. Yes\n2. No")
confname = input("\n>")
while confname != "1": 
    if confname == "2":
     prints("Okay, please tell me your name: ")
     name = input("\n>").title()
     prints(f"Are you sure you want to be called {name}?\n1. Yes\n2. No")
     confname = input("\n>")
    else:
     prints(f"Invalid input. Please enter '1' or '2': \nAre you sure you want to be called {name}?\n1. Yes\n2. No")
     confname = input("\n>")
if confname == "1":
    prints(f"Good morning, {name}.\n")

#STATS EXPLANATION
statx=open('statexp.txt','r')
stattxt = statx.read()
prints(f"\n{stattxt}\n")
statx.close

#SETTING UP STATS
def assign_stats():
    values = {}
    prints("\nPlease assign values 1-3 to the following attributes: \n")
    for attribute in ["Strength", "Speed", "Smarts"]:
        while True:
            prints(f"\n{attribute.capitalize()}:")
            value = input("\n>")
            if value.isdigit() and 1 <= int(value) <= 3 and int(value) not in values.values():
                values[attribute] = int(value)
                break
            elif value.isdigit() and 1 <= int(value) <= 3 and int(value) in values.values():
                prints("Invalid input. Please enter a number that hasn't been used before.\n")
            elif value.isalpha():
                prints('Invalid input. Please use only whole numbers between 1-3.\n')
            else:
                prints('Invalid input. Please use only whole numbers between 1-3.\n')
    return values

#ASSIGN VARIABLES TO EACH STAT
stats=assign_stats()
print(stats)

#CONFIRM STATS
confstat = input("Is this who you want to be?\n1. Yes\n2. No\n>")
while confstat != "1": 
    if confstat == "2":
     prints("Let's try again!\n")
     stats=assign_stats()
     print(stats)
     confstat=input("Is this who you want to be?\n1. Yes\n2. No\n>")
    else:
     prints("Invalid input.\n")
     print(stats)
     confstat=input("Please enter '1' or '2': \nIs this who you want to be?\n1. Yes\n2. No\n>")
str=stats["Strength"]
spe=stats["Speed"]
sma=stats["Smarts"]
if confstat == "1":
    prints("As it is written, so it shall be done.\n")
    if str==3:
       prints("You treat your body, and in return, you expect it to treat you. Long hours in the gym mean that you can lift more, run faster, jump higher.\n")
    if spe==3:
       prints("You are practiced in sleight of hand. Your fingers (and the rest of your body) move deftly and precisely.\n")
    if sma==3:
       prints("Your mind is sharp, and you intend to keep it that way. You devour books and love solving puzzles.\n")

#PRINT PERIODS FOR LOADING EFFECT
for i in range(5):
    print(".", end="", flush=True)
    time.sleep(1.0)

#CLEAR CONSOLE
os.system('cls')

#INTRO PAGE
intro=open('intro.txt','r')
introtxt = intro.read()
prints(f"\n{introtxt}\n")
intro.close
#INTRO OPTIONS
prints("1. Reminisce \n2. What time is it? Check your phone.\n")
if sma==3:
   prints(f"{stats[3]}:")