// Importação dos métodos utilizados para melhoria visual.
import { header, keyPress } from "../../Menu";
import { colors } from "../util/Colors";

// Exportação da classe "Conta".
export abstract class Conta {
  // Declaração das características privadas da classe "Conta".
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  // Construção das características/atributos da classe "Conta".
  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number
  ) {
    //
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  // Encapsulamento com Get e Set do atributo "numero".

  public get numero(): number {
    return this._numero;
  }
  public set numero(value: number) {
    this._numero = value;
  }

  // Encapsulamento com Get e Set do atributo "agencia".

  public get agencia(): number {
    return this._agencia;
  }
  public set agencia(value: number) {
    this._agencia = value;
  }

  // Encapsulamento com Get e Set do atributo "tipo".

  public get tipo(): number {
    return this._tipo;
  }
  public set tipo(value: number) {
    this._tipo = value;
  }

  // Encapsulamento com Get e Set do atributo "titular".

  public get titular(): string {
    return this._titular;
  }
  public set titular(value: string) {
    this._titular = value;
  }

  // Encapsulamento com Get e Set do atributo "saldo".

  public get saldo(): number {
    return this._saldo;
  }
  public set saldo(value: number) {
    this._saldo = value;
  }

  // Criação do método "Sacar" para sacar dinheiro da conta.

  public sacar(valor: number): boolean {
    // Se o saldo for menor que o valor a ser sacado, retorna falso.
    if (this._saldo < valor) {
      console.clear();
      header();
      console.log(
        `${colors.fg.bluestrong}
        \n Opa! Voce nao tem saldo pra isso!\n\n Tentativa de saque de: ${
          colors.fg.whitestrong
        }R$ ${valor.toFixed(2)}${colors.fg.bluestrong}\n Saldo: ${
          colors.fg.whitestrong
        }R$ ${this.saldo.toFixed(2)} 
        ${colors.reset}`
      );
      keyPress();
      return false;
    }

    // Se não cair no if, realiza o saque e retorna verdadeiro.
    this._saldo = this._saldo - valor;
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

  // Criação do método "Depositar" para sacar dinheiro da conta.
  public depositar(valor: number): void {
    this._saldo = this._saldo + valor;
    console.clear();
    header();
    console.log(
      `${colors.fg.bluestrong}
      \n Deposito de ${colors.fg.whitestrong}R$ ${valor.toFixed(2)}${
        colors.fg.bluestrong
      } realizado com sucesso!\n\n Seu novo saldo é de: ${
        colors.fg.whitestrong
      }R$ ${this.saldo.toFixed(2)}
      ${colors.reset}`
    );
    keyPress();
  }

  // Criação do método "Visualizar" para ver os dados da conta.
  public visualizar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Conta Corrente";
        break;
      case 2:
        tipo = "Conta Poupanca";
        break;
    }
    
    console.log(colors.fg.bluestrong);
    console.log("==================================================");
    console.log(
      colors.fg.whitestrong,
      "                                                 "
    );
    console.log(
      "                 Dados da Conta:                ",
      colors.reset,
      colors.fg.bluestrong
    );
    console.log("__________________________________________________\n");
    console.log(
      colors.fg.bluestrong,
      "Numero da Conta:",
      colors.fg.whitestrong,
      this._numero
    );
    console.log(
      colors.fg.bluestrong,
      "Agencia:",
      colors.fg.whitestrong,
      this._agencia
    );
    console.log(
      colors.fg.bluestrong,
      "Tipo da Conta:",
      colors.fg.whitestrong,
      tipo
    );
    console.log(
      colors.fg.bluestrong,
      "Titular:",
      colors.fg.whitestrong,
      this._titular
    );
    console.log(
      colors.fg.bluestrong,
      "Saldo:",
      colors.fg.whitestrong,
      "R$",
      this._saldo.toFixed(2),
      colors.reset
    );
  }
}
