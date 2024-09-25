import './Navbar.css'

function Navbar(){
    return <>
        <nav className="navbar bg-body-tertiary apna-navbar">
            <div className="container-fluid ">
                <a className="navbar-brand fs-2  apna-main-logo text-info" href="https://e-traction.vercel.app/" target="_blank" style={{margin: "10px", marginLeft: "3rem", fontFamily: "Comic Sans MS,cursive"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="84.5" fill="currentColor" className="bi bi-lightning-charge-fill apna-logo" viewBox="2 2 16 16">
                        <path
                            d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                    </svg>
                    Electra-X
                </a>
                <a className="apna-login">
                    Sign in
                </a>
            </div>
        </nav>
    </>
}

export default Navbar;