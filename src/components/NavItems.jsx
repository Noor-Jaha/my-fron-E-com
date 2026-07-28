import { useState } from 'react'
import { Link } from 'react-router-dom';

export const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState("false");
    const [sociaToggle, setSocialToggle] = useState('false');
    const [fixedheader, setFixeddHeader] = useState('false');

    // add event listener to window
    window.addEventListener('scroll', () => {
        if(window.scrollY > 200){
            setFixeddHeader(true);
        }else{
            setFixeddHeader(false);
        }
    })
    return (
<header className={`header-section style-4 ${fixedheader ? 'header-fixed fadeInUp' : ''}`}>
    {/* header top start */}
    <div className={`header-top d-md-none ${sociaToggle ? 'open' : ''}`}>
        <div className='container'>
            <div className='header-top-area'>
               <Link to="/signup" className='lab-btn me-3'><span> Create Acount</span></Link>
               <Link to="/login"><span>Log In</span></Link>
            </div>
        </div>
    </div>
    {/* header bottom start */}
    <div className='header-bottom'>
        <div className='container'>
            <div className='header-wrapper'>
                {/* logo */}
                <div className='logo-search-acte'>
                    <div className='logo'>
                        <Link to={'/'}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgUUzbtl0YjneQOpbr_xXfs49lkaBfPjXqw&s " className='w-50'  alt="" />
                        </Link>
                    </div>
                </div>
                {/* menu area */}
                <div className='menu-area'>
                    <div className='menu'>
                        <ul className={`lab-ul ${menuToggle ? 'active' : ""}`}>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/shop">shop</Link></li>
                            <li><Link to="/blog">blog</Link></li>
                            <li><Link to="/about">about</Link></li>
                            <li><Link to="/contact">contact</Link></li>
                        </ul>
                    </div>
                    {/* sign in $ log in */}
                    <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                    <Link to="/login" className=' d-none d-md-block'>Log In</Link>

                    {/* menu toggle */}

                    <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                        {/* social toggle */}
                        <div className='ellepsis-bar d-md-none'
                        onClick={() => setSocialToggle(!sociaToggle)}>
                            <i className="icofont-info"></i>
                        </div>
              
                </div>
            </div>
        </div>
    </div>
</header>
    )
}
