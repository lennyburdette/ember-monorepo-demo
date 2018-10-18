import FetchMock from 'yet-another-fetch-mock';

function randomAmount() {
  return Math.round(Math.random()*5000);
}

function randomInt() {
  return Math.floor(Math.random() * 10);
}

function randomSuffix() {
  return new Array(4).fill(true).map(_ => randomInt()).join('');
}

function randomDate() {
  let date = new Date() - (Math.random() *  1000*60*60*24*32);
  date = new Date(date);
  date.setUTCHours(Math.random() * 12 - 8);
  return date;
}

function makePayment(i) {
  return {
    id: String(i),
    capturedAt: randomDate(),
    amount: randomAmount(),
    paymentCard: `•••• •••• •••• ${randomSuffix()}`
  };
}

const DB = new Array(50).fill(true)
  .map((_, i) => makePayment(i))
  .sort((a, b) => b.capturedAt - a.capturedAt);

export function initialize(/* appInstance */) {
  const mock = FetchMock.configure();
  console.log(JSON.stringify(DB, null, 2));
  mock.get('/api/payments', {
    payments: DB
  });
}

export default {
  initialize
};
