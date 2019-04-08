import _ from 'lodash';

import './css/normalize.css';
import './css/app.css';

import Logo from './img/spring-tree.svg';

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    return element;
}
  
document.body.appendChild(component());
document.querySelector(".logo img").src = Logo;