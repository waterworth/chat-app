import { makeSchema, objectType } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import * as Message from './resolvers/Message';
import * as ObjectTypes from './resolvers/ObjectTypes';
import * as Room from './resolvers/Room';
import * as User from './resolvers/User';
import * as UsersInRoom from './resolvers/UsersInRoom';

// Base Queries

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.list.field('allUsers', {
      type: 'User',
      resolve(_, __, ctx) {
        return ctx.prisma.user.findMany();
      },
    });
    t.list.field('allMessages', {
      type: 'Message',
      resolve(_, __, ctx) {
        return ctx.prisma.message.findMany();
      },
    });
    t.list.field('allRooms', {
      type: 'Room',
      resolve(_, __, ctx) {
        return ctx.prisma.room.findMany();
      },
    });
  },
});

// Base Mutations

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser({ alias: 'signupUser' });
  },
});

export const schema = makeSchema({
  types: [Query, Mutation, ObjectTypes, UsersInRoom, User, Room, Message],
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
