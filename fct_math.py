import math

def toSquare(x):
    return x*x

def somme(nombres):
    return sum(nombres)

def moyenne(nombres):
    sommeVar=somme(nombres)
    taille=len(nombres)
    return sommeVar/taille

def getListSupTo(nombres,sup):
    listSup=[]
    for nombre in nombres:
        if nombre>sup:
            listSup.append(nombre)
    return listSup

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
        nombreB=nomnbreA%nombreB
        nomnbreA=temp
    return nomnbreA

