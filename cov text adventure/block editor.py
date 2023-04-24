import time

filename = "intro.txt"
with open(filename, "r") as file:
    text = file.read()

for char in text:
    print(char, end='', flush=True)
    time.sleep(0.05)
