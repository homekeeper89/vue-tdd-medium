import userFixture from '../../../tests/fixtures/user'

export default {
  SEARCH_USER : jest.fn().mockResolvedValue(userFixture)
}