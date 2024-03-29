import React from 'react';
import './Sgn.css';

/* Here I found the solution to using props in class and functions such as oRC
const Sgn = ({oRC}) => {
  return (
  	<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
  	<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f3 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">   /* Note this.props below (It can be eleminated by destructuring)
      <input onClick= { () => this.props.oRC('home') } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <p onClick= { () => oRC('Rgst') } className="f6 link dim black db pointer">Register</p>
    </div>
  </div>
  */
  class Sgn extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        sIE : '',
        sIP : ''
      }
    }

    oEC = (event) =>{
      this.setState({sIE:event.target.value})
    }

    oPC = (event) =>{
      this.setState({sIP:event.target.value})
    }
    
      onSubmitSgnIn = () =>{

        fetch('https://quiet-retreat-78161.herokuapp.com/signin',{
          method: 'post',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
            email: this.state.sIE,
            password: this.state.sIP
          })
        })
          .then(response => response.json())
          .then(user =>{
            if (user.id){
              this.props.lodUser(user);
              this.props.oRC('home');
            }
          })

        
      }

    render () {
      const { oRC } = this.props;
  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f3 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
               type="email" 
               name="email-address"  
               id="email-address"
               onChange={this.oEC}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
               type="password"
               name="password" 
               id="password"
               onChange={this.oPC}/>
      </div>
    </fieldset>
    <div className="">
      <input onClick= { this.onSubmitSgnIn/* this is replaced by () => oRC('home')*/ }
             className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <p onClick= { () => oRC('Rgst') } className="f6 link dim black db pointer">Register</p>
    </div>
  </div>
</main>
</article>
  );
}
}

export default Sgn;
