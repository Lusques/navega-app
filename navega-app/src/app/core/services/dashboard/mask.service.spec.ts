import { MaskService } from './mask.service';

describe('MaskService', () => {
  let service: MaskService;

  beforeEach(() => {
    service = new MaskService();
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('deve iniciar com maskState false', (done) => {
    service.maskState$.subscribe((state) => {
      expect(state).toBe(false);
      done();
    });
  });

  it('deve alternar o estado entre true/false', () => {
    service.togleMask();
    expect(service['maskState'].value).toBe(true);
    expect(console.log).toHaveBeenCalledWith(true);

    service.togleMask();
    expect(service['maskState'].value).toBe(false);
    expect(console.log).toHaveBeenCalledWith(false);
  });

  it('deve emitir novos estados para os subscribers', (done) => {
    const testValues: boolean[] = [];

    service.maskState$.subscribe((state) => {
      testValues.push(state);

      if (testValues.length === 2) {
        expect(testValues).toEqual([false, true]);
        done();
      }
    });

    service.togleMask();
  });
});
