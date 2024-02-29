import Quadra from "./Quadra";
import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import normas from "./normas/normasDeUso";

class QuadraFutebol extends Quadra {
  constructor(protected nome: string) { super() }

  normaFutebol: IFutebol = normas.futebol

  reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      quadra: this.nome,
      protocolo,
      data: data,
      regras: this.normaFutebol as IFutebol
    };
  }
}

export default QuadraFutebol