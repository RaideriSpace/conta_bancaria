import { header, keyPress } from "../../Menu";
import { colors } from "../util/Colors";

export class Conta {
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  public getNumero(): number {
    return this._numero;
  }
  public setNumero(value: number) {
    this._numero = value;
  }

  public getAgencia(): number {
    return this._agencia;
  }
  public setAgencia(value: number) {
    this._agencia = value;
  }

  public getTipo(): number {
    return this._tipo;
  }
  public setTipo(value: number) {
    this._tipo = value;
  }

  public getTitular(): string {
    return this._titular;
  }
  public setTitular(value: string) {
    this._titular = value;
  }

  public getSaldo(): number {
    return this._saldo;
  }
  public setSaldo(value: number) {
    this._saldo = value;
  }

  public sacar(valor: number): boolean {
    if (this._saldo < valor) {
      console.clear();
      header();
      console.log(colors.fg.bluestrong, "\n Opa! Voce nao tem saldo pra isso!", colors.reset);
      keyPress();
      return false;
    }

    this._saldo = this._saldo - valor;
    return true;
  }

  public depositar(valor: number): void {
    this._saldo = this._saldo + valor;
  }

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

    console.clear();
    header();
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
    keyPress();
  }
}
