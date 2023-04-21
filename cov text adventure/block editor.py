""" 
def assign_attributes():
    attributes = {'Strength': None, 'Speed': None, 'Smarts': None}
    values = set(['1', '2', '3'])
    print("Please assign values 1-3 to the following attributes:")
    for attribute in attributes:
        value = input(f"{attribute}: ").title()
        while value not in values:
            if value not in values:
                value = input(f"Invalid input. Please enter a value between 1 and 3 for {attribute}: ")
            else:
                value = input(f"Error: {value} has already been used. Please enter a different value for {attribute}: ")
        values.remove(value)
        attributes[attribute] = int(value)
    return attributes

stats=assign_attributes()
print(stats) 



def assign_attributes():
    attributes = {'Strength': None, 'Speed': None, 'Smarts': None}
    values = {}
    print("Please assign values 1-3 to the following attributes:")
    for attribute in attributes:
        value = input(f"{attribute}: ").title()
        while value not in values:
            if value not in values:
                value = input(f"Invalid input. Please enter a value between 1 and 3 for {attribute}: ")
            else:
                value = input(f"Error: {value} has already been used. Please enter a different value for {attribute}: ")
        values.remove(value)
        attributes[attribute] = int(value)
    return attributes

stats=assign_attributes()
print(stats) 
"""

def assign_values():
    values = {}
    print("Please assign values 1-3 to the following attributes:")
    for attribute in ["Strength", "Speed", "Smarts"]:
        while True:
            value = input(f"{attribute.capitalize()}: ")
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
stats=assign_values()
print(stats)
print("Is this who you want to be?")