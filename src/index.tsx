import { Frog } from 'frog';
import { devtools } from 'frog/dev';
import { neynar } from 'frog/hubs';
import { serveStatic } from 'frog/serve-static';
import { config } from './environments/prod';
import { claimFrame } from './frames/claim-token';
import { landingFrame } from './frames/landing-page';
import { deepLinkPage } from './pages/deep-link';

export const app = new Frog({
  // Supply a Hub to enable frame verification.
  hub: neynar({ apiKey: config.neynar }),
});

app.frame('/', landingFrame);
app.frame('/claim', claimFrame);
app.hono.get('/deep-link/:eth', deepLinkPage);

const isCloudflareWorker = typeof caches !== 'undefined';
if (isCloudflareWorker) {
  const manifest = await import('__STATIC_CONTENT_MANIFEST');
  const serveStaticOptions = { manifest, root: './' };
  app.use('/*', serveStatic(serveStaticOptions));
  devtools(app, { assetsPath: '/frog', serveStatic, serveStaticOptions });
} else {
  devtools(app, { serveStatic });
}

export default app;
