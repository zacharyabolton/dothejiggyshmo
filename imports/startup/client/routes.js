import { Router } from 'meteor/iron:router';

// templates
import '../../ui/components/banner/banner.js';
import '../../ui/components/footer/footer.js';

import '../../ui/layouts/body/body.js';

import '../../ui/pages/about/about.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/loading/loading.js';
import '../../ui/pages/not_found/not_found.js';



Router.configure({
  	layoutTemplate: 'App_body',
  	loadingTemplate: 'App_loading',
	notFoundTemplate: "App_notFound"
});

Router.route('/', function() {
    this.render('App_home');
});


