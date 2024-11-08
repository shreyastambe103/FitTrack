import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>FitTrack</h1>
                </Link>
                <div className="nav-right">
                    <div className="theme-toggle"> {/* Theme toggle button here */} </div>
                    <nav>
                        {user ? (
                            <div className="user-info">
                                <span>{user.email}</span>
                                <button onClick={handleClick}>Log out</button>
                            </div>
                        ) : (
                            <div className="auth-links">
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;