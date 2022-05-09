import '../styles/style.css'

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header">
        <div className="header__links">
          <a href="#" className="header__links_item">Home</a>
          <a href="#" className="header__links_item">Documentation</a>
          <a href="#" className="header__links_item">Community</a>
          <a href="#" className="header__links_item">News</a>
          <a href="#" className="header__links_item">Feedback</a>
        </div>
        <div className="header__buttons">
          <a href="#" className="header__buttons_item">Log in</a>
          <a href="#" className="header__buttons_item">Sign up</a>
        </div>
      </div>
    </header>
  )
}

export default Header
