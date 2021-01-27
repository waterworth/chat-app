import { objectType } from 'nexus';

// Object Types
export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.password();
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

export const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.model.id();
    t.model.bio();
  },
});

export const Room = objectType({
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
          include: {
            user: true,
          },
        });
      },
    });
  },
});

export const Message = objectType({
  name: 'Message',
  definition(t) {
    t.model.id();
    t.model.text();
    t.model.userId();
    t.model.user();
    t.model.roomId();
    t.model.room();
    t.model.createdAt();
  },
});

export const UsersInRoom = objectType({
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
