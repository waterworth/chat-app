import { mutationField, nonNull, stringArg, intArg } from 'nexus';

/**
 * Mutations
 */

/**
 * Create a Message in a Room and assign it to a User
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

export const createMessage = mutationField('createMessage', {
  type: 'Message',
  args: {
    text: nonNull(stringArg()),
    userId: nonNull(intArg()),
    roomId: nonNull(intArg()),
  },
  resolve(_root, args, ctx) {
    const date = new Date().toISOString();
    return ctx.prisma.message.create({
      data: {
        text: args.text,
        userId: args.userId,
        roomId: args.roomId,
        createdAt: date,
      },
      include: {
        user: true,
        room: true,
      },
    });
  },
});

/**
 * Create a Message in a Room and assign it to a User
 *
 * @param id
 * <Int!> — The id of the Message to delete 

 * @example
 *
 *  mutation{
 *    deleteMessage(id:1){
 *      id
 *    }
 *
 */
export const deleteMessage = mutationField('deleteMessage', {
  type: 'Message',
  args: {
    id: nonNull(intArg()),
  },
  resolve(_root, args, ctx) {
    return ctx.prisma.message.delete({
      where: {
        id: args.id,
      },
    });
  },
});
