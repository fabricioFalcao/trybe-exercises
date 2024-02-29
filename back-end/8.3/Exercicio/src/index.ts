import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const PittyClub = new Clube()

const quadraFutsal = new QuadraFutebol('Campo')
const quadraTenis = new QuadraTenis('Ginásio')

PittyClub.adicionarQuadra(quadraFutsal)
PittyClub.adicionarQuadra(quadraTenis)

const reservationDate = new Date('2024-02-29')
const reservationDate2 = new Date('2024-03-05')

const reservation = PittyClub.buscarQuadra<QuadraFutebol>(0).reservar(reservationDate)
const reservation2 = PittyClub.buscarQuadra<QuadraTenis>(1).reservar(reservationDate2)

console.log(reservation);
console.log(reservation2);
