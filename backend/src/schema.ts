import {
  intArg,
  makeSchema,
  nonNull,
  nullable,
  objectType,
  queryField,
  stringArg,
} from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';

// Object Types

// const User = objectType({
//   name: 'User',
//   definition(t) {
//     t.model.id();
//     t.model.name();
//     t.model.email();
//     t.list.field('profile', {
//       type: 'Profile',
//       resolve(root, args, ctx) {
//         return ctx.prisma.profile.findUnique({
//           where: {
//             userId: root.id as number,
//           },
//         });
//       },
//     });
//   },
// });

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name({
      resolve(parent) {
        return parent.name as string;
      },
    });
    t.model.email({
      resolve(parent) {
        return parent.email;
      },
    });
    t.list.field('profile', {
      type: 'Profile',
      resolve(root, _args, ctx) {
        return ctx.prisma.profile.findMany({
          include: {
            user: false,
          },
          where: {
            userId: root.id as number,
          },
        });
      },
    });
  },
});

const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.model.id();
    t.model.bio();
    t.list.field('userProfile', {
      type: 'User',
      resolve: (root, args, ctx) => {
        return ctx.prisma.user.findUnique({
          where: {
            id: root.id as number,
          },
        });
      },
    });
  },
});

const Room = objectType({
  name: 'Room',
  definition(t) {
    t.model.id();
  },
});

const Message = objectType({
  name: 'Message',
  definition(t) {
    t.model.id();
    t.model.text();
  },
});

// Queries

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

const userById = queryField('userById', {
  type: 'User',
  args: {
    id: nonNull(intArg()),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.user.findUnique({
      where: {
        id: args.id,
      },
    });
  },
});

// Mutations

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser({ alias: 'signupUser' });
  },
});

export const schema = makeSchema({
  types: [Query, Mutation, User, Message, Room, Profile],
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
