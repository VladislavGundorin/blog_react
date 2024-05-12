import React from "react"
import './Css/Main.css'

class Header extends React.Component {
  render() {
    return(
      <header className="header">
          <h1 className="header-title">{this.props.title}</h1>
        </header>)
  }
}
export default Header