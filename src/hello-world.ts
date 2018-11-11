export class HelloWorld {
  constructor(useConsole?: boolean) {
    if (useConsole === undefined || !useConsole) {
      throw new Error('Console is mandatory.');
    }
  }
  
  print() {
    console.log('Hello World!!!');
  }
}