import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import ShopPage from './pages/shop-page/shop.component'
import Homepage from './pages/homepage/homepage.component'
import Header from './components/header/header.component';
import SigninandSignupPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component'
import { auth,createUserProfileDocument } from './firebase/firebase.utilis'
import {connect} from 'react-redux'
import { createStructuredSelector} from 'reselect'
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selector'
import './App.css';



// const HatsPage = (props) => {
//   console.log(props);
//   return(
//     <div>
//     <button onClick={() => props.history.push('/shop/hats/:hatID')}> Go to Hats Page</button>
//     <br/>
//     <Link to={`${props.match.url}/13`}> TO HATS 13</Link>
//     <Link to={`${props.match.url}/17`}> TO HATS 17</Link>
//     <h1> HATS PAGE </h1>
//    </div>
//   )
// };
// const DetailPage = (props) =>
// {
//   return(
//     <div>
//     <h1> DETAIL OF PAGE : {props.match.params.hatID}</h1>
//   </div>
//   )
// } 
class App extends Component {

  unsubcribeFormAuth = null ;

  componentDidMount()
  {
    const {setCurrentUser} = this.props;
    this.unsubcribeFormAuth= auth.onAuthStateChanged(async userAuth => {
      if(userAuth)
      {
        const userRef =  await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({      
              id : snapShot.id,
              ...snapShot.data()
            })
        })
      }
      else{
        setCurrentUser(userAuth)
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
      <Header></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path ="/signin"
              render = {() =>
              this.props.currentUser 
              ? (<Redirect to="/"></Redirect>) 
              : <SigninandSignupPage></SigninandSignupPage>} >
          </Route>   
          <Route path='/checkout' component={CheckoutPage}></Route>
        </Switch>
      </div>
    );
  } 
}

const mapStatetoProps = createStructuredSelector({
  currentUser : selectCurrentUser
})
const mapDispatchtoPros = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStatetoProps,mapDispatchtoPros)(App);
