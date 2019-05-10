'use strict';

var path = require('path');

const Home = './template/Home';

module.exports = {
  lazyLoad: true,
  pick: {
    posts: function posts(markdownData) {
      return {
        meta: markdownData.meta,
        description: markdownData.description
      };
    }
  },
  plugins: [path.join(__dirname, '..', 'node_modules', 'bisheng-plugin-description')],
  routes: {
    path: '/',
    component: './template/Layout/index',
    indexRoutes: { component: Home },
    childRoutes: [
      {
        path: 'index',
        component: Home,
      },
    ]
  }
};