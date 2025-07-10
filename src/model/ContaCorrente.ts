// Importação da classe "pai" Conta.
import { header, keyPress } from "../../Menu";
import { colors } from "../util/Colors";
import { Conta } from "./Conta";

// Exportação da classe "ContaCorrente", herdando as características da classe "Conta".
export class ContaCorrente extends Conta {
  // Declaração da característica privada específica da classe "ContaCorrente".
  private _limite: number;

  // Construção das características herdadas da classe "Conta" + a característica específica.
  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    limite: number
  ) {
    // Importação das características a serem herdadas.
    super(numero, agencia, tipo, titular, saldo);
    // Declaração da classe específica.
    this._limite = limite;
  }

  // Encapsulamento com Get e Set da característica "limite".
  public get limite(): number {
    return this._limite;
  }
  public set limite(value: number) {
    this._limite = value;
  }

  // Criação do método "Sacar" para a opção de conta corrente.
  public sacar(valor: number): boolean {
    // Se a soma do saldo e do limite foram menores que o valor, não permite o saque.
    if (this.saldo + this._limite < valor) {
      console.clear();
      header();
      console.log(
        `${colors.fg.bluestrong}
        \n Opa! Voce nao tem saldo pra isso!\n\n Tentativa de saque de: ${
          colors.fg.whitestrong
        }R$ ${valor.toFixed(2)}$${colors.fg.bluestrong}\n Saldo + Limite de: ${
          colors.fg.whitestrong
        }R$ ${this.saldo.toFixed(2)} 
        ${colors.reset}`
      );
      keyPress();
      return false;
    }

    // Se não cair no "if", faz o saque normalmente.
    this.saldo = this.saldo - valor;
    console.clear();
    header();
    console.log(
      `${colors.fg.bluestrong}
      \n Saque de ${colors.fg.whitestrong}R$ ${valor.toFixed(2)}${
        colors.fg.bluestrong
      } realizado com sucesso!\n\n Seu novo saldo é de:${
        colors.fg.whitestrong
      } R$ ${this.saldo.toFixed(2)}${
        colors.fg.bluestrong
      }\n\n Não esqueça de retirar seu dinheiro!
      ${colors.reset}`
    );
    keyPress();
    return true;
  }

  // Puxa a visualização da Conta e soma a visualização de limite.
  public visualizar(): void {
    super.visualizar();
    console.log(
      colors.fg.bluestrong,
      "Limite:",
      colors.fg.whitestrong,
      "R$",
      this._limite.toFixed(2),
      colors.reset
    );
  }
}
