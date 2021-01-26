import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { createContext } from './context';
import { execute, subscribe } from 'graphql';
import { schema } from './schema';

const WS_PORT = 5000;

const websocketServer = createServer((request, response) => {
  response.writeHead(404);
  response.end();
});
websocketServer.listen(WS_PORT, () =>
  console.log(`Websocket Server is now running on http://localhost:${WS_PORT}`)
);

const subscriptionServer = SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
  },
  {
    server: websocketServer,
    path: '/graphql',
  }
);

const server = new ApolloServer({ schema, context: createContext });
const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀🚀🚀 Server ready at: http://localhost:4000/graphql`)
);
