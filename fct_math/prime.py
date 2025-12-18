import math

def isPrime(nombre):
    if nombre<2:
        return True
    for diviseur in range(2,int(math.sqrt(nombre))+1):
        if nombre%diviseur==0:
            return False
    return True