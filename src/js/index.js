import _ from 'lodash';

import '../css/main.scss';

import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

jQuery(function() {
    jQuery('body').css('color', 'blue');
});

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
