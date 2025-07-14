import { header } from "../../Menu";
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  private listaContas: Array<Conta> = new Array<Conta>();
  numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      buscaConta.visualizar();
    } else {
      console.log(`\nA conta numero ${numero} nao foi encontrada!`);
    }
  }

  // Método para listar todas as contas.
  listarTodas(): void {
    console.clear();
    header();
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }

  // Método para cadastro de conta.
  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log(`\nA conta numero: ${conta.numero}, foi criada com sucesso!`);
  }

  // Método para atualização de conta.
  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta != null) {
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
      console.log(`A conta numero: ${conta.numero} foi atualizada com sucesso!`);
    } else {
      console.log(`A conta numero ${conta.numero} nao foi encontrada!`);
    }
  }

  // Método para deletar uma conta.
  deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null){
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log(`\nA conta numero ${numero} foi apagada com sucesso!`);
    } else {
      console.log(`\nA conta numero ${numero} nao foi encontrada!`);
    }
  }
  sacar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  // --- Métodos Auxiliares ---

  // Gerar número da conta;
  public gerarNumero(): number {
    return ++this.numero;
  }

  // Checa se uma conta existe;
  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) return conta;
    }

    return null;
  }
}
