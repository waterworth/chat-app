import {
  arg,
  intArg,
  list,
  makeSchema,
  mutationField,
  nonNull,
  objectType,
  queryField,
  stringArg,
} from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';

// Object Types

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
          where: {
            userId: root.id as number,
          },
        });
      },
    });
    t.list.field('messages', {
      type: 'Message',
      resolve(root, _args, ctx) {
        return ctx.prisma.message.findMany({
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
  },
});

const Room = objectType({
  name: 'Room',
  definition(t) {
    t.model.id();
    t.model.name();
    t.list.field('userList', {
      type: 'UsersInRoom',
      resolve(root, _args, ctx) {
        return ctx.prisma.usersInRoom.findMany({
          where: {
            room: {
              id: root.id as number,
            },
          },
        });
      },
    });
    t.list.field('messages', {
      type: 'Message',
      resolve(root, _args, ctx) {
        return ctx.prisma.message.findMany({
          where: {
            userId: root.id as number,
          },
        });
      },
    });
  },
});

const Message = objectType({
  name: 'Message',
  definition(t) {
    t.model.id();
    t.model.text();
    t.model.userId();
    t.model.roomId();
  },
});

const UsersInRoom = objectType({
  name: 'UsersInRoom',
  definition(t) {
    t.model.userId();
    t.model.roomId();
    t.field('user', {
      type: 'User',
      resolve(root, _args, ctx) {
        return ctx.prisma.user.findUnique({
          where: {
            id: root.userId as number,
          },
        });
      },
    });
    t.field('room', {
      type: 'Room',
      resolve(root, _args, ctx) {
        return ctx.prisma.room.findUnique({
          where: {
            id: root.roomId as number,
          },
        });
      },
    });
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

const roomById = queryField('roomById', {
  type: 'Room',
  args: {
    id: nonNull(intArg()),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.room.findUnique({
      where: {
        id: args.id,
      },
      include: {
        UsersInRoom: true,
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

const createRoom = mutationField('createRoom', {
  type: 'Room',
  args: {
    name: nonNull(stringArg()),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.room.create({
      data: {
        name: args.name,
      },
    });
  },
});

// TODO look into optimizing to handle passing in an array of ids to add
const addUserToRoom = mutationField('addUserToRoom', {
  type: 'UsersInRoom',
  args: {
    userId: nonNull(intArg()),
    roomId: nonNull(intArg()),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.usersInRoom.create({
      data: {
        user: {
          connect: {
            id: args.userId,
          },
        },
        room: {
          connect: {
            id: args.roomId,
          },
        },
      },
      include: {
        user: true,
        room: true,
      },
    });
  },
});

export const schema = makeSchema({
  types: [
    Query,
    Mutation,
    User,
    Message,
    Room,
    Profile,
    UsersInRoom,
    addUserToRoom,
    roomById,
    userById,
    createRoom,
  ],
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
