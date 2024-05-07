// npm i @neynar/nodejs-sdk
import { NeynarAPIClient } from '@neynar/nodejs-sdk';

import members from './members-soonaverse.json' assert { type: 'json' };

const users = Object.keys(members.data);

// make sure to set your NEYNAR_API_KEY .env
// don't have an API key yet? get one at neynar.com
const client = new NeynarAPIClient('66806C32-DF58-4DA9-9607-A343BA597C55');

async function fetch(f) {
  const addr = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';
  const dump = await client.lookupUserByCustodyAddress(f);
  // console.log(dump);
}

async function main() {
  let c = 0;
  let array = [];
  for (const f of users) {
    c++;
    array.push(f);
    if (c === 100) {
      await fetch(array);
      array = [];
      c = 0;
      break;
    }
  }
}

// Run it.
main();
