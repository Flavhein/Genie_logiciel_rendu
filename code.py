import math

def toSquare(x):
    return x*x

def somme(nombres):
    return sum(nombres)

def moyenne(nombres):
    sommeVar=somme(nombres)
    taille=len(nombres)
    return sommeVar/taille

def getListMax(nombres,max):
    listMax=[]
    for nombre in nombres:
        if nombre>max:
            listMax.append(nombre)
    return listMax

def isPrime(nombre):
    if nombre<2:
        return True
    for diviseur in range(2,int(math.sqrt(nombre))+1):
        if nombre%diviseur==0:
            return False
    return True

def listToSquare(nombres):
    nombresSquare=[]
    for nombre in nombres:
        nombresSquare.append(toSquare(nombre))
    return nombresSquare

def pgdc(nomnbreA,nombreB):
    while nombreB!=0:
        temp=nombreB
        b=nomnbreA%nombreB
        nomnbreA=temp
    return nomnbreA

profil={'nom':'Jean','age':25,'ville':'Paris'}
nombres=[12,5,8,130,44,7,19,23,2]

print(moyenne(nombres))
print(getListMax(nombres,10))
print(listToSquare([1,2,3,4,5]))
print(isPrime(17))
print(pgdc(48,18))
