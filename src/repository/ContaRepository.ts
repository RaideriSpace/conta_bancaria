import { Conta } from "../model/Conta";

export interface ContaRepository {
  
  // CRUD (Create, Read, Update, Delete) da Conta
  procurarPorNumero(numero: number): void;
  listarTodas(): void;
  cadastrar(conta: Conta): void;
  atualizar(conta: Conta): void;
  deletar(numero: number): void;

  // Metodos Bancários
  sacar(numero: number, valor: number): void;
  depositar(numero: number, valor: number): void;
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}
