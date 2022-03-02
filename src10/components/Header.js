import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// done: Create a styles object called "styles"
const styles ={
  headerStyle: {
    background: 'red',
  },
  headingStyle: {
    fontSize:'100px',
  },
};
function Header() {
  // done: Add a style attribute to header and the h1 element

  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Welcome</h1>
    </header>
  );
}

export default Header;
