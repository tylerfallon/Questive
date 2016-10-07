// import Mongo meteor file
import { Mongo } from 'meteor/mongo';
 // export a constant variable which will allow you to add information to the DB
export const Tasks = new Mongo.Collection('tasks');