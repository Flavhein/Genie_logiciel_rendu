import math

def toSquare(x):
    return x*x

def g(list):
    t=0
    for i in list:
        t=t+i
    return t

def h(l):
    s=g(l)
    n=len(l)
    return s/n

def k(l,m):
    r=[]
    for i in l:
        if i>m:
            r.append(i)
    return r

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

d={'nom':'Jean','age':25,'ville':'Paris'}
l=[12,5,8,130,44,7,19,23,2]

print(h(l))
print(k(l,10))
print(m([1,2,3,4,5]))
print(p(17))
print(z(48,18))
