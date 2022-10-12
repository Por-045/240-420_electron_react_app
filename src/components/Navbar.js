export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Site Name</a>
            <ul>
                <li className="active">
                    <a href="/profile">About Us</a>
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
            </ul>

        </nav>
    )   
}