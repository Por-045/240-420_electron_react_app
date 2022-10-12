export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Time</a>
            <ul>
                <li className="active">
                    <a href="/timerpage">Time Counter</a>
                </li>
                <li>
                    <a href="/profile">About Us</a>
                </li>
            </ul>

        </nav>
    )   
}