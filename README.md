# 🏛️ Conta Bancaria RaiTerminal 💰

Projeto de criação de um sistema bancario via terminal com TypeScript.

## 🗺️ Mapa de Dados
<details>
  <summary>
    A estrutura do projeto segue uma organização modular para facilitar o desenvolvimento e a manutenção. 
    Ver o Mapa
  </summary>

    .
    ├── node_modules/               # Pasta de dependencias criada ao executar "npm install". Contém todos os pacotes listados no package.json
    ├── src/
    │   ├── controller/
    │   │   └── ContaController.ts  # Classe para controle das funções do banco que se extende de ContaRepository.ts, contendo todos os métodos do CRUD e métodos próprios auxiliares de gerar um numero e buscar no array.
    │   ├── model/
    │   │   └── Conta.ts            # Classe abstrata com atributos private e método construtor, get e set para orientação ao objeto e métodos específicos de "sacar", "depositar" e "visualizar"           
    │   │   └── ContaCorrente.ts    # Classe com atributos herdados da classe Conta.ts + atributo "limite" e atualização dos métodos "sacar" e "visualizar".           
    │   │   └── ContaPoupanca.ts    # Classe com atributos herdados da classe Conta.ts + atributo "aniversario" e atualização do método "visualizar".       
    │   ├── repository/
    │   │   └── ContaRepository.ts  # Interface com assinatura dos métodos CRUD e Métodos Bancários utilizados pelas contas.     
    │   └── util/                 
    │       └── Colors.ts           # Classe implementada para alteração de cores do terminal. Contém os atributos: "reset", "fg" e "bg".
    ├── .gitignore                  # Arquivos e pastas a serem ignorados pelo Git
    ├── Menu.ts                     # Arquivo com a classe principal. Contém os métodos "main", "header", "keyPress" e "sobre"
    ├── package.json                # Arquivo principal de configuração do projeto Node.js. Define nome, versão, scripts e as dependências
    ├── package-lock.json           # Arquivo gerado automaticamente para travar as versões exatas das dependências instaladas.
    ├── tsconfig.json               # # Arquivo de configuração do TypeScript.
    └── README.md                   # Este arquivo!

</details>

## V1.5

- Criação da pasta controller e da classe ```ContaController.ts``` extendendo de ```ContaRepository.ts```.
- Criação dos métodos principais ```procurarPorNumero```, ```listarTodas```, ```cadastrar```, ```atualizar``` e ```deletar``` no ```ContaController.ts```.
- Criação dos métodos auxiliares ```gerarNumero``` e ```buscarNoArray``` no ```ContaController.ts```.
- Aplicação dos métodos no ```Menu.ts```.
- Remoção dos objetos simples de teste no ```Menu.ts```.
- Criação de 4 novos objetos de teste no ```Menu.ts``` usando as variáveis de criação de conta.

## V1.4

- Transformação da classe ```Conta.ts``` em uma classe abstrata.
- Criação da interface ```ContaRepository.ts``` com as assinaturas dos métodos CRUD e Bancários para serem utilizados.
- Remoção de um objeto de teste no ```Menu.ts```. 

## V1.3

- Criação do ```ContaCorrente.ts``` com atributos herdados de ```Conta.ts``` adicionando o atributo ```limite```.
- Criação do ```ContaPoupanca.ts``` com atributos herdados de ```Conta.ts``` adicionando o atributo ```aniversario```.
- Remoção de 1 objetos testes no ```Menu.ts```. 
- Adição de 2 objetos testes no ```Menu.ts```. Um para ```ContaCorrente.ts``` e outro para ```ContaPoupanca.ts```. 
- Adição de comentários aos códigos para melhor clareza do que está acontecendo.

## V1.2

- Criação do ```Conta.ts```.
- Criação das classes ```construtor```, ```get``` e ```set``` para orientação a objeto.
- Criação das classes específicas de ```sacar```, ```depositar``` e ```visualizar```.
- Adição de 2 objetos testes no ```Menu.ts```. 


## V1.1

- Criação do ```Colors.ts```.
- Criação da função: ```keyPress```.
- Ajuste dos espaçamentos para coloração do banco.

## V1.0

- Inicialização do projeto.
- Criação da estrutura inicial de pastas.
- Criação do arquivo: ```Menu.ts```.
- Criação das funções: ```header```,  ```main``` e  ```sobre```.