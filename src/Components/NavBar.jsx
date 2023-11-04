import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../Pages/Home';
import "../Style/NavBar.css";

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({ scrolled: true });
        } else {
            this.setState({ scrolled: false });
        }
    }

    render() {
        const { scrolled } = this.state;
        return (
            <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className='con-1'>
                    <div className='con-1-l'>
                        <img src={`${scrolled ? 'https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png' : 'https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png'}`} alt="NTWIST Logo" />
                        
                    </div>
                    <div className='con-1-r'>
                        <NavLink  to="/">Home</NavLink>
                        <NavLink to="/industries">INDUSTRIES</NavLink>
                        <NavLink to="/aisoftware">AI SOFTWARE</NavLink>
                        <NavLink to="/blog">BLOG</NavLink>
                        <NavLink to="/contactus">CONTACT US</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
