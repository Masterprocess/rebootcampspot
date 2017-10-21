import React from 'react';
import { Component } from 'react';


class loginForm extends Component {
state = {

  };


  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
      	<div class="g-signin2" data-onsuccess="onSignIn"></div>
			</div>
    );
  }
}
export default loginForm;
