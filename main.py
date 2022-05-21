import json
from libs.print_info import diminuir_casas_decimais





'MAIN'
arwuivo = open('data.json')
infos = json.load(arwuivo)
racas = infos['raças']
arwuivo.close()
print("use func(infos) para informações")