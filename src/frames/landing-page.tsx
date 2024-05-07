import { Button } from 'frog';

export const landingFrame = (c: any) => {
  // Let's validate whenever they have follow us already.
  // console.log(c);

  return c.res({
    image: "https://i.imgur.com/vOHX7up.png",
    intents: [<Button action="/claim">Claim Token!</Button>],
  });
};
