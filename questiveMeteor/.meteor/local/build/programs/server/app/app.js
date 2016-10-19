var require = meteorInstall({"imports":{"api":{"scavenger_hunts.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/api/scavenger_hunts.js                                                            //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
// import { Meteor } from 'meteor/meteor';                                                   //
// import { Mongo } from 'meteor/mongo';                                                     //
// import { check } from 'meteor/check';                                                     //
                                                                                             //
// export const Scavenger_Hunts = new Mongo.Collection('scavenger_hunts');                   //
                                                                                             //
// if(Meteor.isServer){                                                                      //
// 	Meteor.publish('scavenger_hunts',function scavenger_huntsPublication(){                  //
// 		return Scavenger_Hunts.find({})                                                         //
// 	})                                                                                       //
// }                                                                                         //
// Meteor.methods({                                                                          //
//   // add information to our task db                                                       //
//   'scavenger_hunts.insert'(object) {                                                      //
//     let title = object.title;                                                             //
//     let user                                                                              //
//     check(title, String)                                                                  //
                                                                                             //
//     // Make sure the user is logged in before inserting a task                            //
//     if (! this.userId) {                                                                  //
//       throw new Meteor.Error('not-authorized');                                           //
//     }                                                                                     //
                                                                                             //
//   Scavenger_Hunts.insert({                                                                //
//     title,                                                                                //
//     createdAt: new Date(),                                                                //
//     owner: this.userId,                                                                   //
//     username: Meteor.users.findOne(this.userId).username,                                 //
//   });                                                                                     //
                                                                                             //
// },                                                                                        //
                                                                                             //
//   'scavenger_hunts.remove'(scavengerId) {                                                 //
//     check(taskId, String);                                                                //
                                                                                             //
//   const task = scavenger_hunts.findOne(taskId);                                           //
//   if (task.private && task.owner !== this.userId) {                                       //
//     // If the task is private, make sure only the owner can delete it                     //
//     throw new Meteor.Error('not-authorized');                                             //
//   }                                                                                       //
//   Scavenger_Hunts.remove(scavengerId);                                                    //
// },                                                                                        //
// // this function searches our db to get the most recent value entered                     //
// "scavenger_hunts.findOne"(){                                                              //
                                                                                             //
//   return Scavenger_Hunts.find({},{sort:{ createdAt:-1 }, limit:1 }).fetch();              //
// },                                                                                        //
//                                                                                           //
                                                                                             //
// } ) ;                                                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////

},"tasks.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/api/tasks.js                                                                      //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
// import { Meteor } from 'meteor/meteor';                                                   //
// import { Mongo } from 'meteor/mongo';                                                     //
// import { check } from 'meteor/check';                                                     //
                                                                                             //
// export const Tasks = new Mongo.Collection('tasks');                                       //
                                                                                             //
// if (Meteor.isServer) {                                                                    //
//   // This code only runs on the server                                                    //
//   // Only publish tasks that are public or belong to the current user                     //
//   Meteor.publish('tasks', function tasksPublication() {                                   //
//     return Tasks.find({                                                                   //
//       $or: [                                                                              //
//         { private: { $ne: true } },                                                       //
//         { owner: this.userId },                                                           //
//       ],                                                                                  //
//     });                                                                                   //
//   });                                                                                     //
// }                                                                                         //
                                                                                             //
// Meteor.methods({                                                                          //
//   // add information to our task db                                                       //
//   'tasks.insert'(object) {                                                                //
//     let user = object.user;                                                               //
//     let title = object.title;                                                             //
//     let task = object.text;                                                               //
//     let location = object.location;                                                       //
//     check(title, String)                                                                  //
//     check(task, String);                                                                  //
//     check(location, String);                                                              //
                                                                                             //
//     // Make sure the user is logged in before inserting a task                            //
//     if (! this.userId) {                                                                  //
//       throw new Meteor.Error('not-authorized');                                           //
//     }                                                                                     //
                                                                                             //
//     Tasks.insert({                                                                        //
//       user,                                                                               //
//       title,                                                                              //
//       task,                                                                               //
//       location,                                                                           //
//       createdAt: new Date(),                                                              //
//       owner: this.userId,                                                                 //
//       username: Meteor.users.findOne(this.userId).username,                               //
//     });                                                                                   //
//   },                                                                                      //
//   'tasks.remove'(taskId) {                                                                //
//     check(taskId, String);                                                                //
                                                                                             //
//     const task = Tasks.findOne(taskId);                                                   //
//     if (task.private && task.owner !== this.userId) {                                     //
//       // If the task is private, make sure only the owner can delete it                   //
//       throw new Meteor.Error('not-authorized');                                           //
//     }                                                                                     //
                                                                                             //
//     Tasks.remove(taskId);                                                                 //
//   },                                                                                      //
//   'tasks.setChecked'(taskId, setChecked) {                                                //
//     check(taskId, String);                                                                //
//     check(setChecked, Boolean);                                                           //
                                                                                             //
//     const task = Tasks.findOne(taskId);                                                   //
//     if (task.private && task.owner !== this.userId) {                                     //
//       // If the task is private, make sure only the owner can check it off                //
//       throw new Meteor.Error('not-authorized');                                           //
//     }                                                                                     //
                                                                                             //
//     Tasks.update(taskId, { $set: { checked: setChecked } });                              //
//   },                                                                                      //
//   'tasks.setPrivate'(taskId, setToPrivate) {                                              //
//     check(taskId, String);                                                                //
//     check(setToPrivate, Boolean);                                                         //
                                                                                             //
//     const task = Tasks.findOne(taskId);                                                   //
                                                                                             //
//     // Make sure only the task owner can make a task private                              //
//     if (task.owner !== this.userId) {                                                     //
//       throw new Meteor.Error('not-authorized');                                           //
//     }                                                                                     //
                                                                                             //
//     Tasks.update(taskId, { $set: { private: setToPrivate } });                            //
//   },                                                                                      //
                                                                                             //
// } ) ;                                                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":["../imports/api/tasks.js","../imports/api/scavenger_hunts.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// server/main.js                                                                            //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
module.import('../imports/api/tasks.js');module.import('../imports/api/scavenger_hunts.js');
                                                                                             // 2
///////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".jsx"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
