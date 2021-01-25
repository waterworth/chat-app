import { queryField, nonNull, intArg, mutationField, stringArg } from 'nexus';

/**
 * Queries
 */

/**
 * Search a room by ID and returns the requested data.
 *
 * @param id
 *
 * <Int!> — The number of the room which you wish to target
 *
 * @example
 * query{
 *    roomById(id: 1){
 *      name
 *      messages{
 *          createdAt
 *          text
 *          sentBy{
 *              name
 *          }
 *      }
 *      userList{
 *          user{
 *              name
 *          }
 *      }
 *    }
 *}
 */

export const roomById = queryField('roomById', {
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
        Message: true,
      },
    });
  },
});

/**
 * Mutations
 */

/**
 * Create a room for messages to be sent within.
 *
 * @param name
 * <String!> — The name of the room which you wish to create
 *
 * @example
 * mutation{
 *  createRoom(name: 'Room #1'){
 *      id
 *      name
 *      userList{
 *          name
 *      }
 *      messages{
 *          text
 *      }
 *  }
 * }
 */

export const createRoom = mutationField('createRoom', {
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
