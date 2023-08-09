import '../styles/header.scss'

export default function Header() {
    return (
        <header id='header' className="header">
            <div className="wrapper">
                <nav className='navbar'>
                    <ul className='flex-row'>
                        <li className='list-item'>
                            <a className='nav-link'>
                                home
                            </a>
                        </li>
                        <li className='list-item'>
                            <a className='nav-link'>
                                treatment
                            </a>
                        </li>
                        <li className='list-item'>
                            <a className='nav-link'>
                                doctors
                            </a>
                        </li>
                        <li className='list-item'>
                            <a className='nav-link'>
                                about us
                            </a>
                        </li>
                        <li className='list-item'>
                            <a className='nav-link'>
                                resources
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="buttons-container flex-row">
                    <button className='button dark'>Book Now</button>
                    <button className='button light'>Sign In</button>
                </div>
            </div>
        </header>
    )
}