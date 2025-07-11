import rl = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

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
  let opcao: number;

  // Teste de criação de objeto "ContaCorrente" com atributos herdados de "Conta" + limite.
  const contaCorrente: ContaCorrente = new ContaCorrente(7, 63, 1, "Sarah", 20000, 500);
  contaCorrente.visualizar();
  keyPress();
  contaCorrente.sacar(10000);
  contaCorrente.visualizar();
  keyPress();
  contaCorrente.depositar(500);
  contaCorrente.visualizar();
  keyPress();

  // Teste de criação de objeto "ContaPoupanca" com atributos herdados de "Conta" + aniversario.
  const contaPoupanca: ContaPoupanca = new ContaPoupanca(50, 4, 2, "Ayla", 5000, 29);
  contaPoupanca.visualizar();
  keyPress();
  contaPoupanca.sacar(10000);
  contaPoupanca.visualizar();
  keyPress();
  contaPoupanca.depositar(500);
  contaPoupanca.visualizar();
  keyPress();

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
    console.log("\nEntre com a opção desejada: ");
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
        console.log(colors.fg.whitestrong, "\n\nNova Conta\n\n", colors.reset);

        keyPress();
        break;
      case 2:
        console.clear();
        header();
        console.log(
          colors.fg.whitestrong,
          "\n\nLista de Contas\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 3:
        console.clear();
        header();
        console.log(
          colors.fg.whitestrong,
          "\n\nBuscar Conta por Numero\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 4:
        console.clear();
        header();
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar Dados da Conta\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 5:
        console.clear();
        header();
        console.log(
          colors.fg.whitestrong,
          "\n\nDeletar Conta\n\n",
          colors.reset
        );

        keyPress();
        break;
      case 6:
        console.clear();
        header();
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

        keyPress();
        break;
      case 7:
        console.clear();
        header();
        console.log(colors.fg.whitestrong, "\n\nDeposito\n\n", colors.reset);

        keyPress();
        break;
      case 8:
        console.clear();
        header();
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferencia Entre Contas\n\n",
          colors.reset
        );

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
  console.log(colors.reset, "");
  console.log("Pressione enter para continuar...");
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
