import { queryField, nonNull, intArg } from 'nexus';

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
