
import "./Navbar.scss"  ;


function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/logo.svg" alt="" />
                <span>lamadmin</span>
            </div>
            <div className="user">
                <div className="icons">
                    <img src="/search.svg" alt="" />
                    <img src="/app.svg" alt="" />
                    <img src="/expand.svg" alt="" />
                    <div className="bell">
                        <img src="/notifications.svg" alt="" />
                        <span>2</span>
                    </div>
                </div>
                <div className="profile">
                    <img className="image" src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                    <span>Rust</span>
                    <img className="setting" src="/setting.svg" alt="" />
                </div>
            </div>
        </nav>
    )
}


export default Navbar ; 