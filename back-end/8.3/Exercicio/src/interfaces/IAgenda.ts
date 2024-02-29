export default interface IAgenda<T> {
  quadra: string,
  protocolo: string,
  data: Date,
  regras: T
}