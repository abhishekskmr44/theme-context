import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/Form.module.css';

const Form = () => {
    const {isDark} = useContext(AuthContext);
  return (
    <div>
        <form className={isDark ? styles.dark:styles.light}>
            <input type="text" placeholder='Name...'/>
            <input type='email' placeholder='Email...'/>
            <input type="text" placeholder='Address...'/>
            <input type='password' placeholder='Password...'/>
            <input type="submit" value='Submit'/>
        </form>
    </div>
  )
}

export default Form