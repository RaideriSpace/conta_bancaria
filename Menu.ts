import rl = require("readline-sync");

export function header(): void {
  console.log("\n################################################\n");
  console.log("\t\tRaiTerminal Bank");
  console.log("\n################################################\n");
}

export function main() {
  let opcao: number;
  while (true) {
    header();
    console.log("\t1 - Nova Conta");
    console.log("\t2 - Lista de Contas");
    console.log("\t3 - Buscar Conta por Numero");
    console.log("\t4 - Atualizar Dados da Conta");
    console.log("\t5 - Deletar Conta");
    console.log("\t6 - Saque");
    console.log("\t7 - Deposito");
    console.log("\t8 - Transferencia Entre Contas");
    console.log("\t9 - Sair");
    console.log("\n################################################\n");

    console.log("Entre com a opção desejada: ");
    opcao = rl.questionInt("");

    if (opcao == 9) {
      console.clear();
      header();
      console.log("\nRaiTerminal Bank - Tranzendo o melhor dos bancos \npara o seu terminal!\n");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.clear();
        console.log("\n\nCriar Conta\n\n");

        break;
      case 2:
        console.clear();
        console.log("\n\nListar todas as Contas\n\n");

        break;
      case 3:
        console.clear();
        console.log("\n\nConsultar dados da Conta - por numero\n\n");

        break;
      case 4:
        console.clear();
        console.log("\n\nAtualizar dados da Conta\n\n");

        break;
      case 5:
        console.clear();
        console.log("\n\nApagar uma Conta\n\n");

        break;
      case 6:
        console.clear();
        console.log("\n\nSaque\n\n");

        break;
      case 7:
        console.clear();
        console.log("\n\nDeposito\n\n");

        break;
      case 8:
        console.clear();
        console.log("\n\nTransferencia entre Contas\n\n");

        break;
      default:
        console.clear();
        console.log("\nOpcao Invalida!\n");

        break;
    }
  }
}

export function sobre(): void {
  console.log("Projeto Desenvolvido por: ");
  console.log("Lucas Alves Pinheiro - l.pinheiro.w@gmail.com.br");
  console.log("github.com/RaideriSpace");
  console.log("\n################################################\n");
}

main();
