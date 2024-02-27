class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[], cT: string) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
    this._connectedTo = cT;
  }

  turnOn(): void {
    console.log(
      `TV ${this._brand}, ${this._size}", resolution: ${this._resolution}, available connections: ${this._connections}`
    );

  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    // permite setar undefined ou uma conexão que esteja no `connections`
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv1 = new TV('Samsung', 50, '1080p', ['HDMI', 'USB', 'Ethernet', 'AVI',], 'HDMI')

tv1.turnOn()
tv1.connectedTo = 'AVI';
console.log('Connected to: ', tv1.connectedTo);