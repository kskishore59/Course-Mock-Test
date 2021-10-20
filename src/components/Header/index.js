import {Component} from 'react'
import {Link} from 'react-router-dom'

import {NavBar, WebsiteLogo} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <NavBar>
        <Link to="/">
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </Link>
      </NavBar>
    )
  }
}

export default Header
