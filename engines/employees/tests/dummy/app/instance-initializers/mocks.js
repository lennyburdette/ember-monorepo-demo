import FetchMock from 'yet-another-fetch-mock';

const DB = [
  {
    id: '1',
    name: 'Alice',
    role: 'Manager',
    readonly: true
  },
  {
    id: '2',
    name: 'Bob',
    role: ''
  }
];

export function initialize(/* appInstance */) {
  const mock = FetchMock.configure();
  mock.get('/api/employees', {
    employees: DB
  });

  mock.get('/api/employees/:id', ({ pathParams }) => {
    return {
      employee: DB.find(e => e.id === pathParams.id)
    };
  });
}

export default {
  initialize
};
