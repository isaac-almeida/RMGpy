import json


def salvar_infos(infos):
    with open("data.json", "w") as arwuivo:
        json.dump(infos, arwuivo, indent=4)


def printar_dados_racas(racas, dados):
    for raca in racas:
        for dado in dados:
            print(racas[raca][dado], end=" | ")
        print(".")


def diminuir_casas_decimais(infos):
    racas = infos["racas"]
    for raca in racas:
        for item in racas[raca]:
            if type(racas[raca][item]) == float:
                racas[raca][item] = "{:.2f}".format(racas[raca][item])
            elif type(racas[raca][item]) == dict:
                dicio = racas[raca][item]
                for iiitem in dicio:
                    if type(dicio[iiitem]) == float:
                        dicio[iiitem] = "{:.2f}".format(dicio[iiitem])

    salvar_infos(infos)


def calcular_partes_corpo(infos, nomes_escolhidas, template):
    racas = infos["raças"]
    template_dados = infos["templates"][template].copy()
    total = template_dados['total']
    template_dados.pop('total')

    racas_escolhidas = []
    for nome in nomes_escolhidas:
        raca = racas.get(nome)
        if raca and not raca.get("tipo", {}):
            multiplicador = raca['stats_medios']['vida']/total
            partes = template_dados.copy()
            for parte in partes:
                partes[parte] *= multiplicador
            raca.update(
                {'stats_medios': {'vida_partes': partes.copy()}, 'tipo': template})
            racas_escolhidas.append(raca)
            partes.clear()
        elif raca.get("tipo", {}):
            racas_escolhidas.append(raca)
        else:
            return "raça incorreta. verifique ortografia"
    salvar_infos(infos)
    return racas_escolhidas


def inserir_raca(infos):
    def pedir_valores():
        print('inserindo nova raça')
        raca = str(input('insira o nome da raça: '))
        altura = int(input('insira a altura media da raça (em cm): '))
        peso = int(
            input('insira o peso médio de uma criatura dessa raça (em kg): '))
        vida = int(input('insira a HP media dessa raça: '))
        res = int(input('insira a resistencia natural da raça: '))
        mag_res = int(
            input('insira o bonus de aptidao da raça para formar escudos mágicos: '))
        tipo = str(input(
            'insira o tipo da criatura (humanoide, passaroide, humanoide_baixo, etc): '))
        # resistencia é a resistência da raça aos danos
        # físicos, ácido, fogo, frio, força, e choque
        # resistência mágica é o bônus flat que a raça adiciona ao seus escudos mágicos, os quais defendem contra todos os danos da resistência normal, além de:
        # raio, necrótico, e radiante
        dados = {
            "raça": raca,
            "altura": altura,
            "peso": peso,
            "vida": vida,
            "res": res,
            "mag_res": mag_res,
            "tipo": tipo
        }
        return dados
    racas = infos["raças"]
    templates = infos["templates"]
    # racas é uma lista contendo dicionários. um para cada raça
    dados = pedir_valores()
    #partes = calcular_partes_corpo(racas, [dados['raça']], templates[dados['tipo']])[0]

    info = {
        'nome': dados['raça'],
        'stats_medios': {
            'altura': dados['altura'],
            'peso': dados['peso'],
            'vida': dados['vida'],
        },
        'resistencia': dados['res'],
        'bonus_escudo_magico': dados['mag_res']
    }
    racas.update({info['nome']: info})
    #racas[dados['raça']] = calcular_partes_corpo(racas, [dados['raça']], templates[dados['tipo']])[0]
    calcular_partes_corpo(infos, [dados['raça']], dados['tipo'])
    # salvar_infos(infos)
    return racas.get(info['nome'])


def calcular_vida(infos):
    racas = infos['raças']
    racas_nomes = racas.keys()
    a = 1
    while(a == 1):
        a = 0
        print("Raças:")
        for nome in racas_nomes:
            print(nome)
        raca_escolhida = str(input('insira a raça da criatura: '))
        if raca_escolhida not in racas_nomes:
            print('essa raça nao existe. Lista de raças:')
            a = 1

    raca_escolhida = racas[raca_escolhida]
    altura = float(input('insira a altura da criatura (em cm): '))
    peso = float(input('insira o peso da criatura (em kg): '))
    produto_escolhido = peso*altura
    produto = raca_escolhida['stats_medios']['peso'] * \
        raca_escolhida['stats_medios']['altura']
    multiplicador = produto_escolhido/produto
    hp = "{:.2f}".format(
        (raca_escolhida['stats_medios']['vida'])*multiplicador)
    partes = raca_escolhida['stats_medios']['vida_partes']
    for parte in partes:
        partes[parte] *= multiplicador
    print(f'a HP total da criatura é {hp}')
    print('a hp de cada uma das partes do corpo da criatura é:')
    for parte in partes:
        partes[parte] *= multiplicador
        print(f'{parte}: {partes[parte]}')


def main():
    arwuivo = open('data.json')
    infos = json.load(arwuivo)
    arwuivo.close()


    # calcular_vida(infos)
main()
