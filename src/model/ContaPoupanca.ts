// Importação da classe "pai" Conta.
import { colors } from "../util/Colors";
import { Conta } from "./Conta";

// Exportação da classe "ContaCorrente", herdando as características da classe "Conta".
export class ContaPoupanca extends Conta {
  // Declaração da característica privada específica da classe "ContaPoupanca".
  private _aniversario: number;

  // Construção das características herdadas da classe "Conta" + a característica específica.
  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    aniversario: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._aniversario = aniversario;
  }

  // Encapsulamento com Get e Set da característica "aniversario".
  public get aniversario(): number {
    return this._aniversario;
  }
  public set aniversario(value: number) {
    this._aniversario = value;
  }

  // Puxa a visualização da Conta e soma a visualização de aniversário.
  public visualizar(): void {
    super.visualizar();
    console.log(
      colors.fg.bluestrong,
      "Dia do aniversario: ",
      colors.fg.whitestrong,
      this._aniversario,
      colors.reset
    );
  }
}
