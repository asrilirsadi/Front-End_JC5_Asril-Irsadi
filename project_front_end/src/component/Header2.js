import React from 'react';
import {
            Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
            NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem 
        } from 'reactstrap';

import {Link} from 'react-router-dom';

class Header2 extends Component 
{
    constructor(props) 
    {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
                        isOpen: false
                    };
    }
    toggle() 
    {
        this.setState({
                        isOpen: !this.state.isOpen
                    });
    }

    render() 
    {
        return (
                    <div>
                    </div>
                );
    }
}

export default Header2;