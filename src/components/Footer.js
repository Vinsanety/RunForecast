import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer-container">
        <div className="footer-copyright">
          <span>&copy;2020 Vahala Designs</span>
        </div>
        <div className="footer-link">
          <a href="https://vincevahala.com" target="_blank" rel="noopener noreferrer">Vahala Web Design</a>
        </div>
      </footer>
    )
  }
}

export default Footer;
