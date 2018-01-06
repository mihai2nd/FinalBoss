// file: /imports/routing/index.js
import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import '/imports/ui/pages/Login.jsx';
import '/imports/ui/pages/Register.jsx';

route('/', Home);

//route('/posts/:_id', PostView);

// for the route '/posts/XXX'
// in App.jsx routeProps will look like {_id: 'XXX'}
// PostView will have access to _id by using this.props

//---route('/posts/:_id', PostView);

// accessing /posts/XXX?commentsPage=2
// routeProps will look like:
///////{ _id: 'XXX', query: {commentsPage: 2} }
/*-------
route('/admin/panel/categories', AdminPanel, {
    panel: 'categories'
});
route('/admin/panel/something', AdminPanel, {
    panel: 'something'
});*/

// accessing /admin/panel/categories
// routeProps will look like:
///////{ panel: 'Something' }

/*---
route('/admin/panel/view/:_id', AdminPanel, {
    panel: 'view'
});*/

// accessing /admin/panel/view/XXX
// routeProps will look like: (they will be embedded)
////////{ panel: 'Something', _id: XXX }
/*---
route('/admin/panel/view/:_id', AdminPanel, (params, queryParams) => {
    return {something: true};
});

*/
// accessing /admin/panel/view/XXX
// routeProps will look like:
/////////////{ something: true }

// if you want to use the params and queryParams passed to routeProps you have to do it manually
// something like:
/*route('/admin/panel/view/:_id', AdminPanel, (params, queryParams) => {
    return _.extend({}, params, {query: queryParams}, {something: true});
});


router.path('/posts/:_id', {_id: 'XXX'}) // returns /posts/XXX

// if you want query parameters:
router.path('/posts/:_id', {_id: 'XXX'}, {page: 2}) // returns /posts/XXX?page=2

route('/posts/:_id', PostView, {}, {
    name: 'post_view'
})
*/
// generating the route with the name:
route.path('post_view', {_id: 'XXX'}) // returns /posts/XXX


//route.go('/posts/:_id', {_id: 'XXX'}, {page: 2}) // pathDef, params, queryParams

// or for a named route:
//route.go('post_view', {_id: 'XXX'}, {page: 2}) // pathDef, params, queryParams

