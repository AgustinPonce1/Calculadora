dolar_oficial = 370

#Aluminio 75x25 - 1mt vale 12.36 dolar
aluminioAnodizado_75x25 =  12.36
pedido_75x25 = input("Metros de Aluminio Anodizado 75x25 deseados: ")

metros_75x25 = float(pedido_75x25)
precio_75x25 = aluminioAnodizado_75x25 * metros_75x25
print("Precio Total para " + str(pedido_75x25) + " metros de aluminio 75x25 = " + str(precio_75x25), "\n")

#Aluminio 75x25 - 1mt vale 8.66 dolar
aluminioAnodizado_50x25 =  8.66
pedido_50x25 = input("Metros de Aluminio Anodizado 50x25 deseados: ")

metros_50x25 = float(pedido_50x25)
precio_50x25 = aluminioAnodizado_50x25 * metros_50x25
print("Precio Total para" + str(pedido_50x25) + " metros de aluminio 50x25 = " + str(precio_50x25), "\n")

#Almohadones Grande y Chico - combo almohadones por sillon de un cuerpo vale 80 dolar
almohadon_grandeYchico = 80
pedido_almohadones = input("Combos de almohadones deseados: ")

metros_almohadones = float(pedido_almohadones)
precio_almohadones = almohadon_grandeYchico * metros_almohadones
print("Precio Total para " + str(pedido_almohadones) + " combos de almohadones = " + str(precio_almohadones), "\n")

# WPC - 1mt 20 dolar
wpc_mt = 20
pedido_wpc = input("Metros de WPC deseados: ")

metros_wpc = float(pedido_wpc)
precio_wpc = wpc_mt * metros_wpc
print("Precio Total para " + str(pedido_wpc) + " metros de WPC = " + str(precio_wpc), "\n")

# TOTAL
precio_total = (precio_50x25 + precio_75x25 + precio_almohadones + precio_wpc)
total_dolares = precio_total
total_pesos = total_dolares * dolar_oficial

precio_total_dolares = "{:.2f}".format(total_dolares)
precio_total_pesos = "{:.2f}".format(total_pesos)
precio_total_multiplicado = "{:.2f}".format(total_pesos * 2.14 + 5000)

print("Precio total en pesos = " + precio_total_pesos)
print("Precio final multiplicado por 2.14 + 5000 de extras = " + precio_total_multiplicado)