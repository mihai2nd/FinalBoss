import { Mongo } from 'meteor/mongo';
//export const Posts = new Mongo.Collection('posts');


Posts = new Mongo.Collection("posts");

Posts.allow({
	insert: function(userId,doc){
		return !!userId;
	}

});

//.............................

//.............................