Meteor.publish('posts',function() {
	return Posts.find({author: this.userId});
});
