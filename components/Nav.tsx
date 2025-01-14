const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="img-responsive" src="/upward-logo.svg" width="150" alt="upward-logo"></img>
        </a>
        {/* 
        **** button for when we add more documents DO NOT delete!
        <button
          className="navbar-toggler primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarColor01"> */}
        <div className="primary" id="navbarColor01">
          <ul className="nav ms-auto">
 
           <li className="nav-item">
              <a className="nav-link text-dark"  href="/about">
                About
              </a>
            </li>
           <li className="nav-item">
              <a className="nav-link text-dark"  href="/blog">
                Blog
              </a>
            </li>

            <li className="rounded btn-secondary" >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdC-AbV2SNhMS99yhY6r4Gu34UC9DhVWIM7utII6irV1pyaSw/viewform"
                className="btn btn- active text-dark "
                >
                <i className="glyphicon-floppy-disk" aria-hidden="true"></i>
                Join the waitlist
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
