import { header } from "../../Menu";
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {
  private listaContas: Conta[] = [];
  numero: number = 0;

  procurarPorNumero = (numero: number): void => {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      console.clear();
      header();
      buscaConta.visualizar();
    } else {
      console.clear();
      header();
      console.log(
        `${colors.fg.bluestrong}\nA conta numero ${colors.fg.whitestrong} ${numero} ${colors.fg.bluestrong} nao foi encontrada!`
      );
    }
  };

  // Método para listar todas as contas.
  listarTodas = (): void => {
    console.clear();
    header();
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  };

  // Método para cadastro de conta.
  cadastrar = (conta: Conta): void => {
    this.listaContas.push(conta);
    console.log(
      `${colors.fg.bluestrong}\nA conta numero ${colors.fg.whitestrong}${conta.numero}${colors.fg.bluestrong} foi criada com sucesso!\n${colors.reset}`
    );
  };

  // Método para atualização de conta.
  atualizar = (conta: Conta): void => {
    let buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta != null) {
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
      console.log(
        `${colors.fg.bluestrong}\nA conta numero ${colors.fg.whitestrong}${conta.numero}${colors.fg.bluestrong} foi atualizada com sucesso!`
      );
    } else {
      console.log(`A conta numero ${conta.numero} nao foi encontrada!`);
    }
  };

  // Método para deletar uma conta.
  deletar = (numero: number): void => {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log(
        `${colors.fg.bluestrong}\nA conta numero ${colors.fg.whitestrong} ${numero} ${colors.fg.bluestrong} foi apagada com sucesso!`
      );
    } else {
      console.log(
        `${colors.fg.bluestrong}\nA conta numero ${colors.fg.whitestrong} ${numero} ${colors.fg.bluestrong} nao foi encontrada!`
      );
    }
  };

  // Método para sacar dinheiro da conta.
  sacar = (numero: number, valor: number): void => {
    let conta = this.buscarNoArray(numero);

    if (conta != null) {
      if (conta.tipo == 2) {
        if (conta.sacar(valor) == true) {
          console.clear();
          header();
          console.log(
            `${colors.fg.bluestrong}\nSaque de ${
              colors.fg.whitestrong
            }R$ ${valor.toFixed(2)} ${
              colors.fg.bluestrong
            }realizado com sucesso!\n\nNão esqueça de retirar seu dinheiro!`
          );
        } else {
          console.clear();
          header();
          console.log(
            `${
              colors.fg.bluestrong
            }\nOpa! Voce nao tem saldo pra isso!\n\nTentativa de saque de: ${
              colors.fg.whitestrong
            } R$ ${valor.toFixed(2)} ${colors.fg.bluestrong}\n\nSaldo: ${
              colors.fg.whitestrong
            }R$ ${conta.saldo.toFixed(2)}\n`
          );
        }
      } else {
        if (conta.sacar(valor) == true) {
          console.clear();
          header();
          console.log(
            `${colors.fg.bluestrong}\nSaque de ${
              colors.fg.whitestrong
            }R$ ${valor.toFixed(2)} ${
              colors.fg.bluestrong
            }realizado com sucesso!\n\nNão esqueça de retirar seu dinheiro!`
          );
        } else {
          console.clear();
          header();
          console.log(
            `${
              colors.fg.bluestrong
            }\nOpa! Voce nao tem saldo pra isso!\n\nTentativa de saque de: ${
              colors.fg.whitestrong
            } R$ ${valor.toFixed(2)} ${
              colors.fg.bluestrong
            }\n\nSaldo + Limite: ${
              colors.fg.whitestrong
            }R$ ${conta.saldo.toFixed(2)}\n`
          );
        }
      }
    } else {
      console.log(
        `${colors.fg.bluestrong}\nA conta numero ${colors.fg.whitestrong} ${numero} ${colors.fg.bluestrong} nao foi encontrada!\n`
      );
    }
  };

  // Metodo para depositar dinheiro na conta.
  depositar = (numero: number, valor: number): void => {
    let conta = this.buscarNoArray(numero);

    if (conta != null) {
      conta.depositar(valor);
      console.clear();
      header();
      console.log(
        `${colors.fg.bluestrong}
        \nDeposito de ${colors.fg.whitestrong}R$ ${valor.toFixed(2)}${
          colors.fg.bluestrong
        } realizado com sucesso!\n\nSeu novo saldo é de: ${
          colors.fg.whitestrong
        }R$ ${conta.saldo.toFixed(2)}`
      );
    } else {
      console.log(
        `${colors.fg.bluestrong}\nA conta numero ${colors.fg.whitestrong} ${numero} ${colors.fg.bluestrong} nao foi encontrada!\n`
      );
    }
  };

  // Metodo para transferir dinheiro entre contas.
  transferir = (
    numeroOrigem: number,
    numeroDestino: number,
    valor: number
  ): void => {
    let contaOrigem = this.buscarNoArray(numeroOrigem);
    let contaDestino = this.buscarNoArray(numeroDestino);

    if (contaOrigem != null && contaDestino != null) {
      if (contaOrigem.sacar(valor) == true) {
        contaDestino.depositar(valor);
        console.log(
          `${colors.fg.bluestrong}\nFoi realizado a transferencia de ${colors.fg.whitestrong}R$ ${valor} ${colors.fg.bluestrong}da conta numero ${colors.fg.whitestrong} ${numeroOrigem} ${colors.fg.bluestrong} para a conta numero ${colors.fg.whitestrong} ${numeroDestino} ${colors.fg.bluestrong}!\n`
        );
      } else {
        if(contaOrigem.tipo == 2){
          console.clear();
          header();
          console.log(
            `${
              colors.fg.bluestrong
            }\nOpa! Voce nao tem saldo pra isso!\n\nTentativa de transferência de: ${
              colors.fg.whitestrong
            } R$ ${valor.toFixed(2)} ${colors.fg.bluestrong}\n\nSaldo: ${
              colors.fg.whitestrong
            }R$ ${contaOrigem.saldo.toFixed(2)}\n`
          );
        } else {
          console.clear();
          header();
          console.log(
            `${
              colors.fg.bluestrong
            }\nOpa! Voce nao tem saldo pra isso!\n\nTentativa de transferência de: ${
              colors.fg.whitestrong
            } R$ ${valor.toFixed(2)} ${colors.fg.bluestrong}\n\nSaldo + Limite: ${
              colors.fg.whitestrong
            }R$ ${contaOrigem.saldo.toFixed(2)}\n`
          );
        }
      }
    } else {
      console.log(
        `${colors.fg.bluestrong}A conta numero ${colors.fg.whitestrong} ${numeroOrigem} ${colors.fg.bluestrong} e/ou a conta numero ${colors.fg.whitestrong} ${numeroDestino} ${colors.fg.bluestrong} nao foram encontradas!\n`
      );
    }
  };

  // --- Métodos Auxiliares ---

  // Gerar número da conta;
  gerarNumero = (): number => ++this.numero;

  // Checa se uma conta existe;
  buscarNoArray = (numero: number): Conta | null => {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) return conta;
    }

    return null;
  };
}
