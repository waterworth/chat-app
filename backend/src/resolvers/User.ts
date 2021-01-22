import { queryField, nonNull, intArg, mutationField, stringArg } from 'nexus';
import argon2 from 'argon2';

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
 * @param email
 * <String!> — The email of the User registering
 * @param name
 * <String!> — The User's name
 * @param password
 * <String!> — The User's password. Hashed with argon2
 * @example
 *
 *  mutation{
 *    createNewUser(email:'example email', username:"Bob"){
 *      id
 *      name
 *      email
 * }
 *
 */

export const createNewUser = mutationField('createNewUser', {
  type: 'User',
  args: {
    email: nonNull(stringArg()),
    name: nonNull(stringArg()),
    password: nonNull(stringArg()),
  },
  async resolve(_root, args, ctx) {
    const hashedPassword = await argon2.hash(args.password);
    const user = await ctx.prisma.user.create({
      data: {
        email: args.email,
        name: args.name,
        password: hashedPassword,
      },
    });
    return user;
  },
});
