def toSquare(x):
    return x*x

def listToSquare(nombres):
    nombresSquare=[]
    for nombre in nombres:
        nombresSquare.append(toSquare(nombre))
    return nombresSquare