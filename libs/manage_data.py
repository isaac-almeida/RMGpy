def salvar_infos(infos):
    with open('data.json', 'w') as arwuivo:
        json.dump(infos, arwuivo, indent=4)


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
            'raça': raca,
            'altura': altura,
            'peso': peso,
            'vida': vida,
            'res': res,
            'mag_res': mag_res,
            'tipo': tipo
        }
        return dados
    racas = infos['raças']
    templates = infos['templates']
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
