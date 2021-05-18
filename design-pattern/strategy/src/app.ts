import Correios from './correios'
import Entrega from './entrega'
import MercadoLivre from './mercadoLivre'

const entrega: Entrega = new Entrega(new MercadoLivre(), 300)
const entrega2: Entrega = new Entrega(new Correios(), 300)

console.log(entrega.calcularFrete())
console.log(entrega2.calcularFrete())