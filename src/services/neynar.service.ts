import { config } from '../environments/prod';

export const getUser = async (fid: number): Promise<any> => {
  const response = await fetch(
    'https://api.neynar.com/v2/farcaster/user/bulk?fids=' + fid + '&viewer_fid=' + 414955,
    {
      headers: {
        api_key: config.neynar,
      },
    },
  );
  const obj = await response.json();
  return obj.users[0];
};
