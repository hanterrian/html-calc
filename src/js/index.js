import _ from 'lodash';

import './../css/main.scss';

import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

import Vue from 'vue'
import App from './../vue/App.vue'

new Vue({
    el: '#app',
    render: h => h(App)
});
