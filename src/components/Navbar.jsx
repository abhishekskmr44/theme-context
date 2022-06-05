import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    const { dark, light, isDark} = useContext(AuthContext);
  return (
    <div className={isDark ? styles.navbarDark:styles.navbarLight}>
       
        <h2>Products</h2>
        <h2>About Us</h2>
        <h2 onClick={isDark? light:dark}>{isDark? "Light Mode":"Dark Mode"}</h2>
        <h2>Cart</h2>
        <h2>Login</h2>
    </div>
  )
}

export default Navbar