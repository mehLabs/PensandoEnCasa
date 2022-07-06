import { FeePayerPipe } from './fee-payer.pipe';

describe('FeePayerPipe', () => {
  it('create an instance', () => {
    const pipe = new FeePayerPipe();
    expect(pipe).toBeTruthy();
  });
});
