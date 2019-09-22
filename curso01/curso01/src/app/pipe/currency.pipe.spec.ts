import { CurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 123,00 E when 123+EUR', () => {

    const sut=new CurrencyPipe();
    const res=sut.transform(123,['EUR']);
    expect(res).toBe('123,00 E');

  });
  it('should return $ 345,30  when 345.3+USD', () => {

    const sut=new CurrencyPipe();
    const res=sut.transform(345.3,['USD']);
    expect(res).toBe('$ 345,30');

  });
  it('should assume EUR  when no currency is provided', () => {
    const sut=new CurrencyPipe();
    const res=sut.transform(56.7,['']);
    expect(res).toBe('56,70 E');
  });
  it('should return 0 EUR  when value 0 is passed', () => {
    const sut=new CurrencyPipe();
    const res=sut.transform(0,['EUR']);
    expect(res).toBe('0,00 E');
  });
  it('should return empty string  when no value is provided', () => {
    const sut=new CurrencyPipe();
    const res=sut.transform(null,['EUR']);
    expect(res).toBe('');
  });
});
