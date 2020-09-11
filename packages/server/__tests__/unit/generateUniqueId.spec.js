import generateUniqueId from '../../src/utils/generateUniqueId';

describe('Generate Unique ID', () => {
  it('should be able to generate an unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
