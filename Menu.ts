import rl = require("readline-sync");
import { colors } from "./src/util/Colors";

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

export function main() {
  let opcao: number;
  while (true) {
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

    console.log("\nEntre com a opção desejada: ");
    opcao = rl.questionInt("");

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

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("Pressione enter para continuar...");
  rl.prompt();
}

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

main();
