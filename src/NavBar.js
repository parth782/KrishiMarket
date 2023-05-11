import React, { Component } from 'react'
import TokenService from "./services/token-service.js"
import { Link } from 'react-router-dom'
import background from './v915-wit-011-l.jpg';

class NavBar extends Component {

    logOutClick = () => {
        //console.log('Logging out')
        TokenService.clearAuthToken()
        TokenService.getUserId = (id) => {
            //console.log(id)
        }

        window.location = '/'
    }

    render() {

        return (
            <header className='clearfix' style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <h2 >
                    <Link to="/" style={{fontSize:'35px'}}>
                        Krishi Market
                    </Link>
                </h2>
                {TokenService.hasAuthToken() ?
                    <nav className="nav">
                        <ul className='link'>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-home"></i>
                                    <span className='navlink-text'>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-item">
                                    <i className="fa fa-list"></i>
                                    <span className='navlink-text'>Add item</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/inventory">
                                    <i className="fa fa-list"></i>
                                    <span className='navlink-text'>Inventory</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Myorders">
                                    <i className="fa fa-list"></i>
                                    <span className='navlink-text'>My Orders</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.logOutClick}>
                                    <i className="fa fa-sign-out"></i>
                                    <span className='navlink-text'>Log Out</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    :
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link to='/csignup' >Consumer's Sign Up</Link>
                            </li>
                            <li>
                                <Link to='/user/clogin' >Consumer's Login</Link>
                            </li>
                            <li>
                                <Link to='/signup' >Farmer's Sign Up</Link>
                            </li>
                            <li>
                                <Link to='/user/login' >Farmer's Login</Link>
                            </li>
                        </ul>
                    </nav>
                }
            </header>
        )
    }
}

export default NavBar 