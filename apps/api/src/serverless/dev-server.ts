import { serve } from '@hono/node-server';
import { app } from './app.js';

const server = serve({ fetch: app.fetch, port: 4100 }, (info) => {
  console.log('listening on http://localhost:' + info.port);
});

for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, () => {
    server.close();
    process.exit(0);
  });
}