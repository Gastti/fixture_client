import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">Index</NavLink>
                </li>
                <li>
                    <NavLink to="/auth">Auth</NavLink>
                </li>
            </ul>
        </div>
    )
}
