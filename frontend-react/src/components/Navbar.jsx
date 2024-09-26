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
                    Electra-random
                </a>
                <a className="apna-login">
                    Sign-in
                    (<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-person" viewBox="0 2 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>)
                </a>
            </div>
        </nav>
    </>
}

export default Navbar;