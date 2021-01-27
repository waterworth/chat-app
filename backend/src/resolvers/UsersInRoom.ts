import { mutationField, nonNull, intArg } from 'nexus';

/**
 * Mutations
 */

/**
 * Add a User to a Room.
 *
 * @param userId
 * <Int!> — The id of the User which you wish to add to the room
 * @param roomId
 * <Int!> — The id of the Room which you wish to add the User to
 *
 *
 *
 * @example
 *
 *  mutation{
 *    addUserToRoom(userId:6, roomId:7){
 *      room{
 *          name
 *      }
 *      user{
 *          name
 *      }
 *    }
 * }
 *
 */

// TODO look into optimizing to handle passing in an array of ids to add
export const addUserToRoom = mutationField('addUserToRoom', {
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
