import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import ShopPage from './pages/shop-page/shop.component'
import Homepage from './pages/homepage/homepage.component'
import Header from './components/header/header.component';
import SigninandSignupPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utilis'

import './App.css';



const HatsPage = (props) => {
  console.log(props);
  return(
    <div>
    <button onClick={() => props.history.push('/shop/hats/:hatID')}> Go to Hats Page</button>
    <br/>
    <Link to={`${props.match.url}/13`}> TO HATS 13</Link>
    <Link to={`${props.match.url}/17`}> TO HATS 17</Link>
    <h1> HATS PAGE </h1>
   </div>
  )
 
};
const DetailPage = (props) =>
{
  return(
    <div>
    <h1> DETAIL OF PAGE : {props.match.params.hatID}</h1>
  </div>
  )
} 
class App extends Component {
  constructor()
  {
    super();
    this.state = {
      currentUser : null 
    }
  }

  unsubcribeFormAuth = null ;

  componentDidMount()
  {
    this.unsubcribeFormAuth= auth.onAuthStateChanged(async userAuth => {
      if(userAuth)
      {
        const userRef =  await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id : snapShot.id,
              ...snapShot.data()
            }
          },() => {
            console.log(this.state);
          })
        })
      }
      else{
        this.setState({currentUser : userAuth})
      }
    })
  }
  componentWillUnmount()
  {
    this.unsubcribeFormAuth();
  }
  render(){
    return (
      <div className="App">
      <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/shop/hats" component={HatsPage}></Route>
          <Route exact path ="/shop/hats/:hatID" component={DetailPage}></Route>
          <Route exact path ="/signin" component={SigninandSignupPage}></Route>   
        </Switch>
      </div>
    );
  }
  
}

export default App;
