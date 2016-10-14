import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Scavenger_Hunts = new Mongo.Collection('scavenger_hunts');

if(Meteor.isServer){
	Meteor.publish('scavenger_hunts',function scavenger_huntsPublication(){
		return Scavenger_Hunts.find({})
	})
}
Meteor.methods({
  // add information to our task db
  'scavenger_hunts.insert'(object) {
    let title = object.title;
    let user
    check(title, String)
  

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Scavenger_Hunts.insert({
      title,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },

  'scavenger_hunts.remove'(scavengerId) {
    check(taskId, String);

    const task = scavenger_hunts.findOne(taskId);
    if (task.private && task.owner !== this.userId) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
    Scavenger_Hunts.remove(scavengerId);
  },

} ) ;
