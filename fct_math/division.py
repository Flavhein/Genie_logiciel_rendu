def pgdc(nombreA,nombreB):
    while nombreB!=0:
        temp=nombreB
        nombreB=nombreA%nombreB
        nombreA=temp
    return nombreA