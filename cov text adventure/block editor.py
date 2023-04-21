#SETTING UP STATS
def assign_stats():
    values = {}
    print("Please assign values 1-3 to the following attributes:")
    for attribute in ["Strength", "Speed", "Smarts"]:
        while True:
            value = input(f"{attribute.capitalize()}:\n>")
            if value.isdigit() and 1 <= int(value) <= 3 and int(value) not in values.values():
                values[attribute] = int(value)
                break
            elif value.isdigit() and 1 <= int(value) <= 3 and int(value) in values.values():
                print("Invalid input. Please enter a number that hasn't been used before.")
            elif value.isalpha():
                print('Invalid input. Please use only whole numbers between 1-3.')
            else:
                print('Invalid input. Please use only whole numbers between 1-3.')
    return values

#ASSIGN VARIABLES TO EACH STAT
stats=assign_stats()
str=stats["Strength"]
spe=stats["Speed"]
sma=stats["Smarts"]
print(stats)

#CONFIRM STATS
confstat = input("Is this who you want to be?\n1. Yes\n2. No\n>")
while confstat != "1": 
    if confstat == "2":
     print("Let's try again!")
     assign_stats()
     print(stats)
     confstat=input("Is this who you want to be?\n1. Yes\n2. No\n>")
    else:
     print("Invalid input.")
     print(stats)
     confstat=input("Please enter '1' or '2': \nIs this who you want to be?\n1. Yes\n2. No\n>")

if confstat == "1":
    print("As it is written, so it shall be done.")
    if str==3:
       print("You treat your body, and in return, you expect it to treat you. Long hours in the gym mean that you can lift more, run faster, jump higher.")
    if spe==3:
       print("Fast type eh?\n")
    if sma==3:
       print("Big brain guy eh?\n")