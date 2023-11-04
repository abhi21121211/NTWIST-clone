import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../Pages/Home';
import "../Style/NavBar.css";
import { IoMdArrowDropdown } from 'react-icons/io';

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
            isIndustriesActive: false,
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

    toggleIndustriesActive = () => {
        this.setState((prevState) => ({
            isIndustriesActive: !prevState.isIndustriesActive,
        }));
    }

    render() {
        const { scrolled, isIndustriesActive } = this.state;

        return (
            <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className='con-1'>
                    <div className='con-1-l'>
                        <a href="/"><img src={`${scrolled ? 'https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png' : 'https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png'}`} alt="NTWIST Logo" /></a>
                    </div>
                    <div className='con-1-r'>
                        <NavLink to="/">Home</NavLink>
                        <div className={`dropdown ${isIndustriesActive ? 'active' : ''}`}>
                            <NavLink className="industries"
                                to="industries"
                                onClick={this.toggleIndustriesActive}
                                onMouseEnter={this.toggleIndustriesActive}
                            >
                                INDUSTRIES {<IoMdArrowDropdown />}
                            </NavLink>
                            <div className={`dropdown-content ${isIndustriesActive ? 'show' : ''}`}>
                                <NavLink to="/industry1">Sustainability</NavLink>
                                <NavLink to="/industry2">Mineral Processing</NavLink>
                                <NavLink to="/industry3">Mine-to-mill-to-mine optimization</NavLink>
                                <NavLink to="/industry4">Oil & Gas</NavLink> {/* Update link here */}
                                {/* Add more industry links as needed */}
                            </div>
                        </div>
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
