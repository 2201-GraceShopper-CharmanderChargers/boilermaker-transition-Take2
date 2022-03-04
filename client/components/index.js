/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './ViewUserPage'
// export { Login, Signup } from './auth-form'

import {Login, Signup} from './auth-form'
import AllPizzas from './AllPizzas'
import SinglePizza from './SinglePizza'
import Cart from './Cart'
import HomePage from './HomePage'
import Checkout from './Checkout'


// import LoginForm from './LoginForm';
// import SignUpForm from './SignUpForm';

export {Login, Signup, AllPizzas, SinglePizza, Cart, HomePage, Checkout}
