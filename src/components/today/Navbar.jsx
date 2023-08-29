import React from 'react' ; 
import { Link } from 'react-router-dom';
import styles from '../../styles/topnav.module.css' ; 

const TopNav = () => {
  const date = new Date();
  const date1 = date.toDateString() ; 


  return (
    <div className={styles.topnav}>   
        <div className={styles.navLeft}>
          <div className={styles.navLeftElem}>
            <Link className={styles.decorationLogo} to='/'> Habit Tracker </Link>
          </div>

          <div className={styles.navLeftElem}>
            <Link className={styles.decoration} to='/'> Today  </Link>
          </div>

          <div className={styles.navLeftElem}>
            <Link className={styles.decoration} to='/weekly'> Weekly Status </Link>
          </div>
        </div>

        <div className={styles.navRightElem}>
          {`${date1}`}
        </div>
    </div>
  )
}

export default TopNav ; 