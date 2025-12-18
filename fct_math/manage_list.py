def getListSupTo(nombres,sup):
    listSup=[]
    for nombre in nombres:
        if nombre>sup:
            listSup.append(nombre)
    return listSup