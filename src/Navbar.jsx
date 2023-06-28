import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartVisible: false,
            cartItems: [] // Replace with your actual cart items data
        };
    }

    toggleCartVisibility = () => {
        this.setState(prevState => ({
            isCartVisible: !prevState.isCartVisible
        }));
    };

    render() {
        const { isCartVisible, cartItems } = this.state;

        return (
            <div className="navbar-bg">
                <nav>
                    <ul>
                        <li><a href="#" className="nav-links">Home</a></li>
                        <li><a href="#" className="nav-links">About</a></li>
                        <li><a href="#" className="nav-links">Services</a></li>
                        <li><a href="#" className="nav-links">Contact</a></li>
                    </ul>
                    <div className="cart-icon" onClick={this.toggleCartVisibility}>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </nav>
                {isCartVisible && (
                    <div id="cart-items" className="cart-items">
                        {cartItems.length > 0 ? (
                            <ul>
                                {cartItems.map(item => (
                                    <li key={item.id}>{item.name}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default Navbar;
