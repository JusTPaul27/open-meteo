import { UnitPipe } from './unit.pipe';

describe('UnitPipe', () => {

  it('create an instance', () => {
    const pipe = new UnitPipe();
    expect(pipe).toBeTruthy();
  });

  it('mi aspetto la funzione trasform invocata con due argomenti il numero 23 e la stringa m/s dia come risultato la stringa 23.00 m/s', () => {
    const pipe = new UnitPipe();
    expect(pipe.transform(23, 'm/s')).toBe('23.00 m/s')
  });

  it('mi aspetto la funzione trasform invocata con due argomenti il numero 21.45679 e la stringa cm dia come risultato la stringa 21.46 cms', () => {
    const pipe = new UnitPipe();
    expect(pipe.transform(21.45679, 'cm')).toBe('21.46 cm')
  });

  it('mi aspetto la funzione trasform invocata con due argomenti il numero 0 e la stringa l dia un risultato diverso da 0.000l', () => {
    const pipe = new UnitPipe();
    expect(pipe.transform(0, 'l')).not.toBe('0.000l')
  });



});
