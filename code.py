import math

def toSquare(x):
    return x*x

def somme(nombres):
    return sum(nombres)

def moyenne(nombres):
    somme=somme(nombres)
    taille=len(nombres)
    return somme/taille

def getListMax(nombres,max):
    listMax=[]
    for nombre in nombres:
        if nombre>max:
            listMax.append(nombre)
    return listMax

def p(n):
    if n<2:
        return False
    for i in range(2,int(math.sqrt(n))+1):
        if n%i==0:
            return False
    return True

def m(l):
    r=[]
    for i in l:
        r.append(f(i))
    return r

def z(a,b):
    while b!=0:
        t=b
        b=a%b
        a=t
    return a

profil={'nom':'Jean','age':25,'ville':'Paris'}
nombres=[12,5,8,130,44,7,19,23,2]

print(h(l))
print(k(l,10))
print(m([1,2,3,4,5]))
print(p(17))
print(z(48,18))
