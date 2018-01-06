import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '/imports/api/posts/collection.js';
import '/imports/api/posts/schema.js';
import '/imports/api/posts/methods.js';
import '/imports/api/posts/posts.html';
/*Template.Posts.helpers({
  posts: ()=> {
    return Posts.find({});
  }
});*/

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

FlowRouter.route('/posts', {
  name: 'posts',
  action() {
    BlazeLayout.render('App_body', {main: 'SitePosts',aside:'newPost' });
  },

});

