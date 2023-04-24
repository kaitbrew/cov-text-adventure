#SLOW TEXT EFFECT
import time
def prints(text, delay=0.01):
    for char in text:
        if char == '\n':
            print()
        else:
            print(char, end='', flush=True)
            time.sleep(delay)

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
prints("Now we will determine your strengths and weaknesses. There are 3 stats: Strength, Speed and Smarts. Each has its own advantages. Assign the numbers to each attribute according to how much you want your character to be focused in it.\nFor example, if you want a very strong character, you will have to sacrifice on Speed or Smarts, because each value can be used only once. To create a strong character that is lacking in speed, assign Strength to 3, Speed to 1, Smarts to 2.\n")

#SETTING UP STATS
def assign_stats():
    values = {}
    prints("Please assign values 1-3 to the following attributes: \n")
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

#SETTING UP STATS
def assign_stats():
    values = {}
    prints("Please assign values 1-3 to the following attributes:\n")
    for attribute in ["Strength", "Speed", "Smarts"]:
        while True:
            value = input(f"{attribute.capitalize()}:\n>")
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
       prints("\n")
    if sma==3:
       prints("Big brain guy eh?\n")

#PRINT 3 PERIODS FOR LOADING
print("\n")
for i in range(3):
    print(".", end="", flush=True)
    time.sleep(2)

#INTRO PAGE
intro=open('intro.txt','r')
introtxt = intro.read()
prints(f"\n"+introtxt)
intro.close