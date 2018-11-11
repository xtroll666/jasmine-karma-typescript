import { HelloWorld } from "../../src/hello-world";

describe('HelloWorld', () => {
  let hello;

  beforeEach(() => {
    hello = new HelloWorld(true);
  });

  afterEach(() => {
    hello = null;
  })

  describe('constructor', () => {
    it('shall create new instance by calling constructor', () => {
      expect(hello).not.toBeUndefined();
      expect(hello).not.toBeNull();
      expect(hello instanceof HelloWorld).toBeTruthy();
    });
    it('shall throw an error by calling construstor without parameter', () => {
      expect(() => new HelloWorld()).toThrow(new Error('Console is mandatory.'));
    });
    it('shall throw an error by calling construstor parameter set to false', () => {
      expect(() => new HelloWorld(false)).toThrow(new Error('Console is mandatory.'));
    });
  });

  describe('print', () => {
    it('shall call console.log', () => {
      const spy = spyOn(console, 'log');
      hello.print();
      expect(spy).toHaveBeenCalled();
      spy.calls.reset();
    });
  });
});