// import {useState} from 'react'
// import {Languages} from "lucide-react"
import {Earth} from "lucide-react"
import { countries } from '../countryList'
// import { languages } from '../languages'
const Navbar = ({setCategory, setCountry}) => {

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="badge bg-light text-dark fs-4">NewsMag</span>
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="btn" onClick={() => setCategory('general')}>General</div>
              </li>
              <li className="nav-item">
                <div className="btn" onClick={() => setCategory('business')}>Business</div>
              </li>
              <li className="nav-item">
                <div className="btn" onClick={() => setCategory('entertainment')}>Entertainment</div>
              </li>
              <li className="nav-item">
                <div className="btn" onClick={() => setCategory('general')}>General</div>
              </li>
              <li className="nav-item">
                <div className="btn" onClick={() => setCategory('health')}>Health</div>
              </li>
              <li className="nav-item">
                <div className="btn" onClick={() => setCategory('science')}>Science</div>
              </li>
              <li className="nav-item">
                <div className="btn" onClick={() => setCategory('sports')}>Sports</div>
              </li>
              <li className="nav-item">
                <div className="btn" onClick={() => setCategory('technology')}>Technology</div>
              </li>
            </ul>
            <div className="d-flex gap-2">

            <div className="dropdown">
                <a 
                className="btn btn-secondary dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                <Earth size={18} /> Country
                </a>
                <ul className="dropdown-menu">
        {Object.entries(countries).map(([code, name]) => (
          <li key={code}>
            <a className="dropdown-item" href="#" onClick={(e) => {
                e.preventDefault()
                setCountry(code)
            }}>
              {name}
            </a>
          </li>
        ))}
      </ul>
            </div>
            {/* <div className="dropdown">
                <a 
                className="btn btn-secondary dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                <Languages size={18} /> Language
                </a>
                <ul className="dropdown-menu">
                  {Object.entries(languages).map(([code, { name }]) => (
                    <li key={code}>
                      <a className="dropdown-item" href="#" onClick={(e) => {
                            e.preventDefault();
                            setLanguage(code);
                          }}
                        >{name}</a>

                    </li>
                ))}
            </ul>
            </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
