import Controller from '@ember/controller';

const data = [
  {
    id: '31',
    capturedAt: '2018-10-04T00:55:07.455Z',
    amount: 1780,
    paymentCard: '•••• •••• •••• 3606'
  },
  {
    id: '44',
    capturedAt: '2018-10-02T20:43:34.798Z',
    amount: 2727,
    paymentCard: '•••• •••• •••• 3795'
  },
  {
    id: '47',
    capturedAt: '2018-10-01T21:26:45.084Z',
    amount: 805,
    paymentCard: '•••• •••• •••• 0016'
  },
  {
    id: '16',
    capturedAt: '2018-10-01T18:57:14.967Z',
    amount: 2753,
    paymentCard: '•••• •••• •••• 2706'
  },
  {
    id: '14',
    capturedAt: '2018-09-30T21:40:51.065Z',
    amount: 405,
    paymentCard: '•••• •••• •••• 2154'
  },
  {
    id: '32',
    capturedAt: '2018-09-30T18:37:51.373Z',
    amount: 1664,
    paymentCard: '•••• •••• •••• 5475'
  },
  {
    id: '18',
    capturedAt: '2018-09-30T00:29:29.750Z',
    amount: 4362,
    paymentCard: '•••• •••• •••• 0977'
  },
  {
    id: '1',
    capturedAt: '2018-09-29T23:45:48.386Z',
    amount: 2353,
    paymentCard: '•••• •••• •••• 4316'
  },
  {
    id: '35',
    capturedAt: '2018-09-27T22:22:42.632Z',
    amount: 2357,
    paymentCard: '•••• •••• •••• 2949'
  },
  {
    id: '37',
    capturedAt: '2018-09-27T03:16:08.576Z',
    amount: 1277,
    paymentCard: '•••• •••• •••• 5781'
  },
  {
    id: '8',
    capturedAt: '2018-09-27T01:52:28.435Z',
    amount: 4386,
    paymentCard: '•••• •••• •••• 9301'
  },
  {
    id: '29',
    capturedAt: '2018-09-26T22:21:03.463Z',
    amount: 4012,
    paymentCard: '•••• •••• •••• 1789'
  },
  {
    id: '40',
    capturedAt: '2018-09-26T03:21:04.238Z',
    amount: 4174,
    paymentCard: '•••• •••• •••• 0209'
  },
  {
    id: '19',
    capturedAt: '2018-09-25T19:34:18.117Z',
    amount: 927,
    paymentCard: '•••• •••• •••• 5360'
  },
  {
    id: '36',
    capturedAt: '2018-09-25T17:20:38.958Z',
    amount: 1861,
    paymentCard: '•••• •••• •••• 2070'
  },
  {
    id: '11',
    capturedAt: '2018-09-25T03:46:46.929Z',
    amount: 4802,
    paymentCard: '•••• •••• •••• 6613'
  },
  {
    id: '34',
    capturedAt: '2018-09-24T02:20:29.551Z',
    amount: 1154,
    paymentCard: '•••• •••• •••• 6437'
  },
  {
    id: '42',
    capturedAt: '2018-09-24T00:40:52.802Z',
    amount: 2476,
    paymentCard: '•••• •••• •••• 3262'
  },
  {
    id: '15',
    capturedAt: '2018-09-23T23:40:09.460Z',
    amount: 3111,
    paymentCard: '•••• •••• •••• 7703'
  },
  {
    id: '2',
    capturedAt: '2018-09-23T17:11:43.130Z',
    amount: 4261,
    paymentCard: '•••• •••• •••• 8533'
  },
  {
    id: '22',
    capturedAt: '2018-09-23T01:05:38.060Z',
    amount: 3571,
    paymentCard: '•••• •••• •••• 4010'
  },
  {
    id: '45',
    capturedAt: '2018-09-22T19:57:11.970Z',
    amount: 4488,
    paymentCard: '•••• •••• •••• 1937'
  },
  {
    id: '24',
    capturedAt: '2018-09-22T02:15:36.270Z',
    amount: 3485,
    paymentCard: '•••• •••• •••• 8569'
  },
  {
    id: '38',
    capturedAt: '2018-09-21T22:19:21.613Z',
    amount: 627,
    paymentCard: '•••• •••• •••• 8342'
  },
  {
    id: '4',
    capturedAt: '2018-09-21T19:18:44.084Z',
    amount: 4340,
    paymentCard: '•••• •••• •••• 7819'
  },
  {
    id: '46',
    capturedAt: '2018-09-21T17:07:09.800Z',
    amount: 4609,
    paymentCard: '•••• •••• •••• 0812'
  },
  {
    id: '10',
    capturedAt: '2018-09-21T03:18:09.151Z',
    amount: 4836,
    paymentCard: '•••• •••• •••• 6092'
  },
  {
    id: '21',
    capturedAt: '2018-09-20T23:06:57.474Z',
    amount: 419,
    paymentCard: '•••• •••• •••• 7129'
  },
  {
    id: '25',
    capturedAt: '2018-09-20T03:34:06.265Z',
    amount: 2985,
    paymentCard: '•••• •••• •••• 2281'
  },
  {
    id: '0',
    capturedAt: '2018-09-18T23:14:52.453Z',
    amount: 2442,
    paymentCard: '•••• •••• •••• 3914'
  },
  {
    id: '20',
    capturedAt: '2018-09-18T01:57:53.968Z',
    amount: 4621,
    paymentCard: '•••• •••• •••• 2679'
  },
  {
    id: '39',
    capturedAt: '2018-09-18T00:33:49.714Z',
    amount: 4817,
    paymentCard: '•••• •••• •••• 5915'
  },
  {
    id: '27',
    capturedAt: '2018-09-17T21:07:52.587Z',
    amount: 4156,
    paymentCard: '•••• •••• •••• 4528'
  },
  {
    id: '49',
    capturedAt: '2018-09-17T18:35:38.705Z',
    amount: 1372,
    paymentCard: '•••• •••• •••• 6896'
  },
  {
    id: '48',
    capturedAt: '2018-09-16T17:12:27.770Z',
    amount: 3833,
    paymentCard: '•••• •••• •••• 2858'
  },
  {
    id: '3',
    capturedAt: '2018-09-16T01:37:57.665Z',
    amount: 792,
    paymentCard: '•••• •••• •••• 7681'
  },
  {
    id: '28',
    capturedAt: '2018-09-13T19:30:58.241Z',
    amount: 3723,
    paymentCard: '•••• •••• •••• 7332'
  },
  {
    id: '5',
    capturedAt: '2018-09-12T00:47:34.480Z',
    amount: 545,
    paymentCard: '•••• •••• •••• 0399'
  },
  {
    id: '13',
    capturedAt: '2018-09-11T01:30:31.661Z',
    amount: 2238,
    paymentCard: '•••• •••• •••• 7086'
  },
  {
    id: '12',
    capturedAt: '2018-09-11T01:28:49.941Z',
    amount: 244,
    paymentCard: '•••• •••• •••• 5541'
  },
  {
    id: '23',
    capturedAt: '2018-09-11T00:35:34.971Z',
    amount: 3148,
    paymentCard: '•••• •••• •••• 8983'
  },
  {
    id: '6',
    capturedAt: '2018-09-11T00:01:18.372Z',
    amount: 4554,
    paymentCard: '•••• •••• •••• 8633'
  },
  {
    id: '26',
    capturedAt: '2018-09-08T02:06:00.000Z',
    amount: 3116,
    paymentCard: '•••• •••• •••• 5184'
  },
  {
    id: '30',
    capturedAt: '2018-09-07T02:21:51.401Z',
    amount: 3968,
    paymentCard: '•••• •••• •••• 9540'
  },
  {
    id: '33',
    capturedAt: '2018-09-05T00:14:32.269Z',
    amount: 4819,
    paymentCard: '•••• •••• •••• 6453'
  },
  {
    id: '9',
    capturedAt: '2018-09-05T00:12:45.510Z',
    amount: 4305,
    paymentCard: '•••• •••• •••• 2726'
  },
  {
    id: '43',
    capturedAt: '2018-09-04T18:34:49.130Z',
    amount: 3143,
    paymentCard: '•••• •••• •••• 7453'
  },
  {
    id: '7',
    capturedAt: '2018-09-04T17:27:58.361Z',
    amount: 1129,
    paymentCard: '•••• •••• •••• 3680'
  },
  {
    id: '17',
    capturedAt: '2018-09-03T18:44:39.126Z',
    amount: 2268,
    paymentCard: '•••• •••• •••• 8468'
  },
  {
    id: '41',
    capturedAt: '2018-09-02T22:24:15.601Z',
    amount: 1852,
    paymentCard: '•••• •••• •••• 1871'
  }
];

export default Controller.extend({
  model: data,

  actions: {
    one() {
      this.set('model', data);
    },

    two() {
      this.set('model', data.map(p => Object.assign({}, p, { amount: 5000 })));
    },

    three() {
      this.set(
        'model',
        data.map(p => {
          const capturedAt = new Date(p.capturedAt);
          capturedAt.setUTCHours(12);
          capturedAt.setUTCMinutes(0);
          capturedAt.setUTCSeconds(0);
          return Object.assign({}, p, { capturedAt: capturedAt.toString() });
        })
      );
    }
  }
});
