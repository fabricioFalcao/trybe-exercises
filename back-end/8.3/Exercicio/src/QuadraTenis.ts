import Quadra from "./Quadra";
import IAgenda from "./interfaces/IAgenda";
import ITenis from "./interfaces/ITenis";
import normas from "./normas/normasDeUso";

class QuadraTenis extends Quadra {
  constructor(protected nome: string) { super() }
  normaTenis: ITenis = normas.tenis

  reservar<ITenis>(data: Date): IAgenda<ITenis> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      quadra: this.nome,
      protocolo,
      data: data,
      regras: this.normaTenis as ITenis
    };
  }
}

export default QuadraTenis