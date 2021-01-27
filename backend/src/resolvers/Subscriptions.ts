import { subscriptionType } from 'nexus';
import { Message } from './ObjectTypes';
type Event<T> = {
  data: T;
};

export const newMessageSubscription = subscriptionType({
  definition(t) {
    t.field('messages', {
      type: 'Message',
      subscribe(_root, _args, ctx) {
        return ctx.pubsub.asyncIterator('messages');
      },
      async resolve(root, args, ctx) {
        return ctx.pubsub.subscribe('messages');
      },
    });
  },
});
