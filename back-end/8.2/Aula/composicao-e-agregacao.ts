interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(`O parâmetro do console 1 é: ${param}`);

  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log(`O parâmetro do console 2 é: ${param}`);
  }
}

interface DataBase {
  logger: Logger;

  save(key: string, value: string): void;
}

class ExampleDataBase implements DataBase {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`)
  }
}

// Crie um objeto de cada um dos _Loggers_.
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
const database1 = new ExampleDataBase(logger1);
const database2 = new ExampleDataBase(logger2);
const database3 = new ExampleDataBase();

// Utilize todos eles para salvar um conteúdo fictício.
database1.save('1', '1');
database2.save('2', '2');
database3.save('3', '3');