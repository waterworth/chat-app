import { queryField, nonNull, intArg, mutationField, stringArg } from 'nexus';

/**
 * Queries
 */

/**
 * Find a User by Id.
 *
 * @param id
 * <Int!> — The id of the User which you wish to find
 *
 *
 * @example
 *
 *  query{
 *    userById(id:1){
 *      id
 *      name
 *    }
 * }
 *
 */

export const userById = queryField('userById', {
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

/**
 * Mutations
 */

/**
 * Register a new user
 *
 * @param userId
 * <Int!> — The id of the User who composed the Message
 * @param roomId
 * <Int!> — The id of the Room which you wish to add the Message to
 * @param text
 * <String!> — The content of the message to be sent
 *
 *
 *
 * @example
 *
 *  mutation{
 *    createMessage(userId:6, roomId:7, text:"This is a sample message"){
 *      id
 *      text
 *      sentBy{
 *         name
 *      }
 *      sentIn{
 *         id
 *         name
 *      }
 *      createdAt
 * }
 *
 */

export const createNewUser = mutationField('createNewUser', {
  type: 'User',
  args: {
    email: nonNull(stringArg()),
    name: nonNull(stringArg()),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.user.create({
      data: {
        email: args.email,
        name: args.name,
      },
    });
  },
});
