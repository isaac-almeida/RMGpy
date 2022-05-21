class Criatura:
    def __init__(self):
        pass

    def salvar_infos(self, infos):
        with open('data.json', 'w') as arwuivo:
            json.dump(infos, arwuivo, indent=4)

        
    def calcular_vida(self, infos):
        racas = infos['raças']
        racas_nomes = racas.keys()
        a = 1
        while(a == 1):
            a = 0
            print('Raças:')
            for nome in racas_nomes:
                print(nome)
            raca_escolhida = str(input('insira a raça da criatura: '))
            if raca_escolhida not in racas_nomes:
                print('essa raça nao existe. Lista de raças:')
                a = 1

        raca_escolhida = racas[raca_escolhida]
        partes = raca_escolhida['stats_medios']['vida_partes']

        altura = float(input('insira a altura da criatura (em cm): '))
        peso = float(input('insira o peso da criatura (em kg): '))

        produto_escolhido = peso*altura
        produto = raca_escolhida['stats_medios']['peso'] * \
            raca_escolhida['stats_medios']['altura']
        multiplicador = produto_escolhido/produto

        hp = '{:.2f}'.format(
            (raca_escolhida['stats_medios']['vida'])*multiplicador)
        print(f'a HP total da criatura é {hp}')
        print('a hp de cada uma das partes do corpo da criatura é:')
        for parte in partes:
            partes[parte] = '{:.2f}'.format(partes[parte]*multiplicador)
            print(f'{parte}: {partes[parte]}')


    def calcular_partes_corpo(infos, nomes_escolhidos, template):
        racas = infos['raças']
        template_dados = infos['templates'][template].copy()
        total = template_dados['total']
        template_dados.pop('total')

        racas_escolhidas = []
        for nome in nomes_escolhidos:
            raca = racas.get(nome)
            if raca and not raca.get('tipo', {}):
                multiplicador = raca['stats_medios']['vida']/total
                partes = template_dados.copy()
                for parte in partes:
                    partes[parte] *= multiplicador
                raca.update(
                    {'stats_medios': {'vida_partes': partes.copy()}, 'tipo': template})
                racas_escolhidas.append(raca)
                partes.clear()
            elif raca.get('tipo', {}):
                racas_escolhidas.append(raca)
            else:
                return 'raça incorreta. verifique ortografia'
        salvar_infos(infos)
        return racas_escolhidas

