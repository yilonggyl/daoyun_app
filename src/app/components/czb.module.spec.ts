import { CzbModule } from './czb.module';

describe('CzbModule', () => {
  let czbModule: CzbModule;

  beforeEach(() => {
    czbModule = new CzbModule();
  });

  it('should create an instance', () => {
    expect(czbModule).toBeTruthy();
  });
});
