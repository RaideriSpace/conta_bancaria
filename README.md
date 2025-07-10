# 🏛️ Conta Bancaria RaiTerminal 💰

Projeto de criação de um sistema bancario via terminal com TypeScript.

## 🗺️ Mapa de Dados
<details>
  <summary>
    A estrutura do projeto segue uma organização modular para facilitar o desenvolvimento e a manutenção. 
    Ver o Mapa
  </summary>

    .
    ├── node_modules/               # Pasta de dependencias criada ao executar "npm install". Contém todos os pacotes listados no package.json.
    ├── src/
    │   ├── model/
    │   │   └── Conta.ts            # Classe com atributos private e método construtor, get e set para orientação ao objeto e métodos específicos de "sacar", "depositar" e "visualizar"           
    │   └── util/                 
    │       └── Colors.ts           # Classe implementada para alteração de cores do terminal. Contém os atributos: "reset", "fg" e "bg".
    ├── .gitignore                  # Arquivos e pastas a serem ignorados pelo Git
    ├── Menu.ts                     # Arquivo com a classe principal. Contém os métodos "main", "header", "keyPress" e "sobre"
    ├── package.json                # Arquivo principal de configuração do projeto Node.js. Define nome, versão, scripts e as dependências
    ├── package-lock.json           # Arquivo gerado automaticamente para travar as versões exatas das dependências instaladas.
    ├── tsconfig.json               # # Arquivo de configuração do TypeScript.
    └── README.md                   # Este arquivo!

</details>

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