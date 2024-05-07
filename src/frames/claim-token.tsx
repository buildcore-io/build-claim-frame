import { Button } from 'frog';
import { getUser } from '../services/neynar.service';

export const claimFrame = async (c: any) => {
  const { frameData } = c;
  const { fid } = frameData;
  let failed;
  const user = await getUser(fid);
  // console.log(user);
  if (!user) {
    failed = 'Unable to get Farcaster user. Try again.';
  } else if (!user.verified_addresses?.eth_addresses?.length) {
    failed = 'You must have at least one ETH verified address linked to your profile.';
  }

  if (!user?.viewer_context?.followed_by && !failed) {
    return c.res({
      image: 'https://i.imgur.com/SfaOUlv.png',
      intents: [
        <Button.Link
          href={
            'https://justbuild-claim-v1.buildcore.io/deep-link/' +
            user.verified_addresses?.eth_addresses
          }
        >
          Validate SMR
        </Button.Link>,
      ],
    });
  } else if (failed) {
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
          <div
            style={{
              color: 'white',
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              lineHeight: 1.4,
              marginTop: 30,
              padding: '0 120px',
              whiteSpace: 'pre-wrap',
            }}
          >
            {failed}
          </div>
        </div>
      ),
    });
  } else {
    return c.res({
      image: 'https://i.imgur.com/QfmQW2s.gif',
      intents: [
        <Button.Redirect location="https://warpcast.com/justbuild">Follow</Button.Redirect>,
      ],
    });
  }
};
