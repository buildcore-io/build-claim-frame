import { getUser } from '../services/neynar.service';
import { getUserClaims } from '../services/buildcore.service';
import { Button } from 'frog';

export const claimDetails = async (c: any) => {
  const { frameData } = c;
  const { fid } = frameData;
  const user = await getUser(fid);
  // Check if user already claimed.
  const output = [];
  for (let adr of user.verified_addresses?.eth_addresses) {
    // If any of them was already claimed we show the pop-up
    const claim = await getUserClaims(adr);
    if (!claim || claim.length === 0) {
      continue;
    }

    for (let cl of claim) {
      let text = '$UNITS go to ' + adr + ((adr != cl.uid) ? (' ( ' + cl.uid + ' ) ') : '') + ' - ';
      if (cl?.ethAddressVerified) {
        text += (Math.round(((cl.count || 0) / 1000 / 1000) * 100) / 100).toLocaleString("en") + ' SOON held';
      } else {
        text += 'NOT claimed!';
      }
  
      output.push(text);
    }
  }
  return c.res({
    image: (
      <div
      style={{
        alignItems: 'center',
        background: 'black',
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
      }}
    >
      {output.map((txt) => {
        return <div
          style={{
            color: 'white',
            fontSize: 28,
            fontStyle: 'normal',
            display: 'flex',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {txt}
        </div>;
      })}
    </div>
    ),
    intents: [
      <Button.Link
        href={
          'https://build-claim.buildcore.io/deep-link/' +
          user.verified_addresses?.eth_addresses
        }
      >
        Claim MORE!
      </Button.Link>
    ],
  });
};
