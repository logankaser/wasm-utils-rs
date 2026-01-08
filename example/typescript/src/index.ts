import { foo } from '@workspace/example-bindings';

const result = foo({
  account: '0xAlice',
  amount: 100n,
  token: {
    symbol: 'FOO',
    totalSupply: 100n,
    decimals: 18,
  },
});

console.log(result);
