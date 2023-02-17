import GameSavingLoader from '../gameSavingLoader';
import GameSaving from '../gamesaving';

const save = '{"id": 9,"created": 1546300800, "userInfo": {"id": 1, "name": "Hitman", "level": 10, "points":2000}}';
const belk = new GameSaving(JSON.parse(save));
test('Test', (done) => {
  GameSavingLoader.load().then((result) => {
    expect(result).toEqual(belk);
  }).catch((err) => err);
  done();
});
