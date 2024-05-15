import random

numeric_key = input('Numeric key: ')

binary_message = ''
message = input("Enter Text: ")

if len(message)<256:
  for i in range(256-len(message)):
    message += ' '

for char in message:
    binary_char = format(ord(char), "08b")
    binary_message = binary_message + binary_char
#print(binary_message)

random_string = ''
for i in range(10):
    random_string += str(random.randint(0, 9))
#print(random_string)

key_union = ''
cadena_union = numeric_key + random_string

while len(key_union) != 256:
  for char in cadena_union:
      key_union += char
      if len(key_union) == 256:
          break

#print('longitud: ', len(key_union))
#print(key_union)

numeric_list = []

for i in range(255+1):
  numeric_list.append(i)

#print('Lista de numeros')
#print(numeric_list)


# lista_numeros_final = []

aux=0
for i in range(256):
  j = i + int(key_union[i])
  if j>= 255:
    j = j - 255
  #print(f'j = {i} + {key_union[i]}')
  #print(j)
  aux = numeric_list[i]
  numeric_list[i] = numeric_list[j]
  numeric_list[j] = aux

#print('Lista de numeros con el cambio de orden')
#print(numeric_list)

binary_numeric_list = ''

for i in range(len(numeric_list)):
    binary_numeric_list += format(numeric_list[i], "08b")

#print('Lista numerica a binary_char')
#print(binary_numeric_list)

encoded_message = ''

for i in range(len(binary_message)):
  if binary_message[i] == binary_numeric_list[i]:
    encoded_message += '1'
  else:
    encoded_message += '0'

print(encoded_message)
