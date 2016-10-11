import { Class } from 'meteor/jagi:astronomy';

const Users = new Mongo.Collection('users');
const Post = Class.create({
  name: 'Post',
  collection: Posts,
  fields: {
    title: {
      type: String,
      validators: [{
        type: 'minLength',
        param: 3
      }]
    },
    userId: String,
    publishedAt: Date
  },
  behaviors: {
    timestamp: {}
  }
});