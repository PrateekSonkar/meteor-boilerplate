import React from 'react';
import {Link} from 'react-router-dom';

import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor (props){
    super(props);
    this.state = {  
      error : ''
    }
  }
  onSubmit(e){
    e.preventDefault();
    
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    if(password.length < 9){
      return this.setState({error:'Password must be more than 8 charecter long'});
    }

    Accounts.createUser({email,password},(err)=>{      
      if(err){
        this.setState({error:err.reason});
      } else{
        this.setState({error:''});
      }
    });


    // this.setState({
    //   error : 'Something went wrong.'
    // })
  }
  render(){    
      return (
        <div className="boxed-view">
          <div className="boxed-view__box">
            <h1>Join</h1>
            <span>{this.state.error}</span>          
            <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
              <input type="email" ref="email" name="email" placeholder="Email" />
              <input type="password" ref="password" name="password" placeholder="Password" />
              <button>Create Account</button>
            </form>
            <Link to="/">Already Have Account ?</Link>
          </div>
        </div>
      );
    }
  }