import rl = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

// Criação do método "header" para reaproveitamento do "cabeçalho" do banco.
export function header(): void {
  console.log(
    colors.bg.white,
    colors.fg.bluestrong,
    "                                                "
  );
  console.log("##################################################");
  console.log("                                                  ");
  console.log("              $ $ RaiTerminal Bank $ $            ");
  console.log("                                                  ");
  console.log("##################################################");
  console.log(
    "                                                 ",
    colors.reset
  );
}

// Criação do método "main", parte principal que utilizará as classes e métodos criados.
export function main() {
  // Instãncia da Classe ContaController.
  let contas: ContaController = new ContaController();

  // Variáveis Auxiliares para cadastro e manipulação.
  let opcao,
    numero,
    agencia,
    tipo,
    saldo,
    limite,
    aniversario,
    valor,
    numeroDestino: number;
  let titular: string;
  const tiposContas = ["Conta Corrente", "Conta Poupanca"];

  // Criação de contas para testes.
  console.log("\nCriar Contas\n");

  let cc1: ContaCorrente = new ContaCorrente(
    contas.gerarNumero(),
    123,
    1,
    "João da Silva",
    1000,
    100.0
  );
  contas.cadastrar(cc1);

  let cc2: ContaCorrente = new ContaCorrente(
    contas.gerarNumero(),
    124,
    1,
    "Maria da Silva",
    2000,
    100.0
  );
  contas.cadastrar(cc2);

  let cp1: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumero(),
    125,
    2,
    "Mariana dos Santos",
    4000,
    12
  );
  contas.cadastrar(cp1);

  let cp2: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumero(),
    125,
    2,
    "Juliana Ramos",
    8000,
    15
  );
  contas.cadastrar(cp2);

  contas.listarTodas();

  // // Teste de criação de objeto "ContaCorrente" com atributos herdados de "Conta" + limite.
  // const contaCorrente: ContaCorrente = new ContaCorrente(
  //   7,
  //   63,
  //   1,
  //   "Sarah",
  //   20000,
  //   500
  // );
  // contaCorrente.visualizar();
  // keyPress();
  // contaCorrente.sacar(10000);
  // contaCorrente.visualizar();
  // keyPress();
  // contaCorrente.depositar(500);
  // contaCorrente.visualizar();
  // keyPress();

  // // Teste de criação de objeto "ContaPoupanca" com atributos herdados de "Conta" + aniversario.
  // const contaPoupanca: ContaPoupanca = new ContaPoupanca(
  //   50,
  //   4,
  //   2,
  //   "Ayla",
  //   5000,
  //   29
  // );
  // contaPoupanca.visualizar();
  // keyPress();
  // contaPoupanca.sacar(10000);
  // contaPoupanca.visualizar();
  // keyPress();
  // contaPoupanca.depositar(500);
  // contaPoupanca.visualizar();
  // keyPress();

  // Enquanto verdadeiro:
  while (true) {
    // Exibe o Menu de Opções
    console.clear();
    header();
    console.log(
      colors.bg.white,
      colors.fg.bluestrong,
      "       1 - Nova Conta                           "
    );
    console.log("         2 - Lista de Contas                      ");
    console.log("         3 - Buscar Conta por Numero              ");
    console.log("         4 - Atualizar Dados da Conta             ");
    console.log("         5 - Deletar Conta                        ");
    console.log("         6 - Sacar                                ");
    console.log("         7 - Depositar                            ");
    console.log("         8 - Transferencia Entre Contas           ");
    console.log("         9 - Sair                                 ");
    console.log("                                                  ");
    console.log("##################################################");
    console.log(
      "                                                 ",
      colors.reset
    );

    // Solicita uma opção.
    console.log("Entre com a opção desejada: ");
    opcao = rl.questionInt("");

    // Se a opção for o 9, finaliza o programa e exibe a mensagem de saída.
    if (opcao == 9) {
      console.clear();
      console.log(
        colors.bg.blue,
        colors.fg.whitestrong,
        "                                                "
      );
      console.log("##################################################");
      console.log("                                                  ");
      console.log("              $ $ RaiTerminal Bank $ $            ");
      console.log("  Tranzendo o melhor dos bancos pro seu terminal! ");
      console.log("                                                  ");
      console.log("##################################################");
      sobre();
      process.exit(0);
    }

    // Se a opção for diferente de 9, entra no switch.
    switch (opcao) {
      case 1:
        console.clear();
        header();
        console.log(colors.fg.whitestrong, "\nNova Conta\n", colors.reset);

        agencia = rl.questionInt(
          `${colors.fg.bluestrong}Digite o numero da agencia: ${colors.reset}`
        );
        titular = rl.question(
          `${colors.fg.bluestrong}Digite o nome do titular da conta: ${colors.reset}`
        );
        console.log(
          `${colors.fg.bluestrong}Digite o tipo da conta: ${colors.reset}`
        );
        tipo = rl.keyInSelect(tiposContas, "", { cancel: false }) + 1;
        saldo = rl.questionFloat(
          `${colors.fg.bluestrong}Digite o saldo da conta: ${colors.fg.whitestrong}R$ ${colors.reset}`
        );

        switch (tipo) {
          case 1:
            limite = rl.questionFloat(
              `${colors.fg.bluestrong}Digite o limite da conta: ${colors.fg.whitestrong}R$ ${colors.reset}`
            );
            console.clear();
            header();
            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );
            break;

          case 2:
            aniversario = rl.questionInt(
              `${colors.fg.bluestrong}Digite o dia do aniversario da conta poupanca: ${colors.fg.whitestrong} ${colors.reset}`
            );

            console.clear();
            header();
            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );
            break;
        }

        keyPress();
        break;

      case 2:
        console.clear();
        header();
        console.log(colors.fg.whitestrong, "\nLista de Contas\n", colors.reset);

        contas.listarTodas();
        console.log("");
        keyPress();
        break;

      case 3:
        console.clear();
        header();
        console.log(
          colors.fg.whitestrong,
          "\nBuscar Conta por Numero\n",
          colors.reset
        );

        numero = rl.questionInt(
          `${colors.fg.bluestrong}Digite o numero da conta: ${colors.reset}`
        );
        contas.procurarPorNumero(numero);

        console.log("");
        keyPress();
        break;

      case 4:
        console.clear();
        header();
        console.log(
          colors.fg.whitestrong,
          "\nAtualizar Dados da Conta\n",
          colors.reset
        );

        numero = rl.questionInt(
          `${colors.fg.bluestrong}Digite o numero da conta: ${colors.reset}`
        );

        let conta = contas.buscarNoArray(numero);

        if (conta != null) {
          agencia = rl.questionInt(
            `${colors.fg.bluestrong}Digite o numero da agencia: ${colors.reset}`
          );

          titular = rl.question(
            `${colors.fg.bluestrong}Digite o nome do titular da conta: ${colors.reset}`
          );

          tipo = conta.tipo;

          saldo = rl.questionFloat(
            `${colors.fg.bluestrong}Digite o saldo da conta: ${colors.fg.whitestrong}R$ ${colors.reset}`
          );

          switch (tipo) {
            case 1:
              limite = rl.questionFloat(
                `${colors.fg.bluestrong}Digite o limite da conta: ${colors.fg.whitestrong}R$ ${colors.reset}`
              );
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );
              break;

            case 2:
              aniversario = rl.questionInt(
                `${colors.fg.bluestrong}Digite o dia do aniversario da conta poupanca: ${colors.fg.whitestrong} ${colors.reset}`
              );
              contas.atualizar(
                new ContaPoupanca(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );
              break;
          }
        } else {
          console.log(
            `${colors.fg.bluestrong}\nA conta numero ${colors.fg.whitestrong} ${numero} ${colors.fg.bluestrong} nao foi encontrada!${colors.reset}`
          );
        }

        console.log("");
        keyPress();
        break;

      case 5:
        console.clear();
        header();
        console.log(colors.fg.whitestrong, "\nDeletar Conta\n", colors.reset);

        numero = rl.questionInt(
          `${colors.fg.bluestrong}Digite o numero da conta: ${colors.reset}`
        );
        contas.deletar(numero);

        console.log("");
        keyPress();
        break;

      case 6:
        console.clear();
        header();
        console.log(colors.fg.whitestrong, "\nSaque\n", colors.reset);

        numero = rl.questionInt(
          `${colors.fg.bluestrong}Digite o numero da conta: ${colors.reset}`
        );

        valor = rl.questionFloat(
          `${colors.fg.bluestrong}Digite o valor do saque: ${colors.fg.whitestrong}R$ ${colors.reset}`
        );

        contas.sacar(numero, valor);

        console.log("");
        keyPress();
        break;

      case 7:
        console.clear();
        header();
        console.log(colors.fg.whitestrong, "\nDeposito\n", colors.reset);

        numero = rl.questionInt(
          `${colors.fg.bluestrong}Digite o numero da conta: ${colors.reset}`
        );

        valor = rl.questionFloat(
          `${colors.fg.bluestrong}Digite o valor do deposito: ${colors.fg.whitestrong}R$ ${colors.reset}`
        );

        contas.depositar(numero, valor);

        console.log("");
        keyPress();
        break;

      case 8:
        console.clear();
        header();
        console.log(
          colors.fg.whitestrong,
          "\nTransferencia Entre Contas\n",
          colors.reset
        );

        numero = rl.questionInt(
          `${colors.fg.bluestrong}Digite o numero da conta de origem: ${colors.reset}`
        );

        numeroDestino = rl.questionInt(
          `${colors.fg.bluestrong}Digite o numero da conta de destino: ${colors.reset}`
        );

        valor = rl.questionFloat(
          `${colors.fg.bluestrong}Digite o valor da transferencia: ${colors.fg.whitestrong}R$ ${colors.reset}`
        );

        contas.transferir(numero, numeroDestino, valor);

        keyPress();
        break;

      default:
        console.clear();
        header();
        console.log("\nOpcao Invalida!\n");

        keyPress();
        break;
    }
  }
}

// Método de KeyPress para solicitar que uma tecla seja pressionada para continuar.
export function keyPress(): void {
  console.log(`${colors.reset}Pressione enter para continuar...`);
  rl.prompt();
}

// Método de "sobre" para exibição dos créditos ao finalizar o programa.
export function sobre(): void {
  console.log("                                                  ");
  console.log("  Projeto Desenvolvido por:                       ");
  console.log("  Lucas Alves Pinheiro                            ");
  console.log("  E-mail: l.pinheiro.w@gmail.com.br               ");
  console.log("  GitHub: github.com/RaideriSpace                 ");
  console.log("                                                  ");
  console.log("##################################################");
  console.log(
    "                                                 ",
    colors.reset
  );
}

// Chama o main para rodar.
main();
