#SLOW TEXT EFFECT
import time
import os
def prints(text, delay=0.015):
    for char in text:
        if char == '\n':
            print()
        else:
            print(char, end='', flush=True)
            time.sleep(delay)

#INTRO PAGE
intro=open('intro.txt','r')
introtxt = intro.read()
prints(f"\n{introtxt}\n")
intro.close
#INTRO OPTIONS
prints("1. Reminisce \n2. What time is it? Check your phone.\n")
iselect=input(">")