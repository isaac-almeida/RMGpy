def diminuir_casas_decimais(obj):
    if type(obj) == dict:
        for item in obj:
            obj[item] = diminuir_casas_decimais(obj[item])
    elif type(obj) == float:
        obj = '{:.3f}'.format(obj)
    
    return obj

def printar_dados_racas(racas, dados='nome'):
    if 'nome' not in dados:
        dados.insert(0, 'nome')
    for i in range(1, len(dados)+1):
        if '->' in dados[i-1]:
            dados[i-1] = dados[i-1].split('->')
        else:
            dados[i-1] = [dados[i-1]]

    for raca in racas:
        for dado in dados:
            try:
                try:
                    print(racas[raca].get(dado[0]).get(
                        dado[1]).get(dado[2]), end=' | ')
                except:
                    print(racas[raca].get(dado[0]).get(dado[1]), end=' | ')
            except:
                print(racas[raca].get(dado[0]), end=' | ')
        print('.')


def printar_raca(racas):
    pass

def func(infos, funcs=[]):
    print('Esse programa funciona através da chamada manual de funções. Uma lista das funções disponíveis está disponível abaixo.')
    funcoes = [
        {
            'nome_função': 'mostrar funções',
            'nome_chamada': 'func',
            'parâmetros': 'infos. Adicionalmente pode ter uma lista com o nome de uma ou mais funções',
            'descrição': 'se chamada sem nenhum argumento, printa o nome de todas as funções. Se chamada com uma lista com nomes como argumento, printa as informações dessas funções.'
        },
        {
            'nome_função': 'salvar',
            'nome_chamada': 'salvar_infos',
            'parâmetros': 'infos',
            'descrição': 'A função recebe infos, que tem todas as informações de data.json, e salva em data.json'
        },
        {
            'nome_função': 'printar dados de algumas raças',
            'nome_chamada': 'printar_dados_racas',
            'parâmetros': f'racas, e dados, uma lista contendo o nome de cada dado, além do nome, que você deseja ver sobre cada raça. Um exemplo de "dados": ["stats_medios"["altura"], "resistencia"]. Dados que podem ser preenchidos em "dados":{[chave for chave in infos["raças"]["humano"]]}',
            'descrição': 'Imprime os dados requisitados sobre cada uma das raças registradas.',
        },
        {
            'nome_função': 'cortar casas decimais a 2',
            'nome_chamada': 'diminuir_casas_decimais',
            'parâmetros': 'infos',
            'descrição': 'lê todas as raças e diminui qualquer casa decimal superior a 2, para 2 casas decimais apenas.'
        },
        {
            'nome_função': 'calcular vida das partes do corpo',
            'nome_chamada': 'calcular_partes_corpo',
            'parâmetros': 'infos, nomes_escolhidos, e template. Nomes escolhidos se trata de uma lista com o nome das raças que se deseja atualizar a HP das partes do corpo, e template é o nome do template o qual essas raças se encaixam. ex de template: "humanoide"',
            'descrição': 'Atualiza as raças escolhidas, colocando dados novos na HP das partes do corpo delas,  e também adicionando o novo campo, "tipo", à raça, que é preenchido com o nome do template.'
        },
        {
            'nome_função': 'inserir raça',
            'nome_chamada': 'inserir_raca',
            'parâmetros': 'infos',
            'descrição': 'pede ao usuário entradas novas para a inserção de uma nova raça em infos. No fim, salva a nova raça no arquivo'
        },
        {
            'nome_função': 'calcular vida para uma criatura',
            'nome_chamada': 'calcular_vida',
            'parâmetros': 'infos',
            'descrição': 'pede entradas para o usuário sobre uma criatura, e printa a HP total e a HP das partes do corpo dessa criatura.'
        }
    ]
    if funcs:
        pass
    else:
        for funcao in funcoes:
            print(funcao['nome_chamada'])

        print('\n\ncomo obter mais informações:')
        print('\nInfos sobre a função "mostrar funções":')
        info_funcs = funcoes[0]
        for info in info_funcs:
            print(f'{info} - {info_funcs[info]}')


