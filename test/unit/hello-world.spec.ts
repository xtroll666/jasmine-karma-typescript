import { HelloWorld } from "../../src/hello-world";

describe('HelloWorld', () => {
  it('shall create new instance by calling constructor', () => {
    const hello = new HelloWorld();
    expect(hello).not.toBeUndefined();
    expect(hello).not.toBeNull();
    expect(hello instanceof HelloWorld).toBeTruthy();
  });
  it('shall call console.log', () => {
    const spy = spyOn(console, 'log');
    const hello = new HelloWorld();
    hello.print();
    expect(spy).toHaveBeenCalled();
    spy.calls.reset();
  });
});