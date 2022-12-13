import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <Routing to="/addmeme">add meme</Routing>
        <Routing to="/hot">hot</Routing>
        <Routing to="/regular">regular</Routing>
      </ul>
    </nav >
  )
}

export function TopBar() {
  return (
    <section className="top-logo">
      <Link to="/" className="main-title">99gag</Link>
    </section>
  )
}

function Routing({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}