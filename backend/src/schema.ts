import { makeSchema, objectType } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import * as Message from './resolvers/Message';
import * as ObjectTypes from './resolvers/ObjectTypes';
import * as Room from './resolvers/Room';
import * as User from './resolvers/User';
import * as UsersInRoom from './resolvers/UsersInRoom';
import * as Subscriptions from './resolvers/Subscriptions';

// Create the schema

export const schema = makeSchema({
  types: [ObjectTypes, UsersInRoom, User, Room, Message, Subscriptions],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
});
