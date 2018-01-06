import './collection.js';
//import './methods.js';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

var Schemas = {};

Schemas.Posts = new SimpleSchema({
	title: {
		type: String,
		label: "Title"
	},
	description: {
		type: String,
		label: "Description"
	},
	createdAt: {
		type: Date,
		label:"Created At ",
		autoValue: function() {
			return new Date()
		},

		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function () {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	}
});

Posts.attachSchema(Schemas.Posts);
