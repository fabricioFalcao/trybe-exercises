// Client.ts
export default class Client {
  private _name = '';

  constructor(name: string) {
    this.name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }
}

const client1 = new Client('Pitty')
client1.name = 'Pitty Veia'

console.log(client1.name)