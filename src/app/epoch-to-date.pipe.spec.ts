import { EpochToDatePipe } from './epoch-to-date.pipe';

describe('EpochToDatePipe', () => {
  it('create an instance', () => {
    const pipe = new EpochToDatePipe();
    expect(pipe).toBeTruthy();
  });
  it('transform', () => {
    const pipe = new EpochToDatePipe();
    const data = pipe.transform(1589194800, '');
    expect(data).toBe('Mon May 11 2020');
  });
  
});
