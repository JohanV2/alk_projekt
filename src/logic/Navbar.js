import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Navbar.scss"

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <Routing to="/hot">hot</Routing>
        <Routing to="/regular">regular</Routing>
      </ul>
    </nav >
  )
}

export function TopBar(props) {
  return (
    <section className="top-logo">
      <Link to="/" className="main-title">99gag</Link>
      <Routing to="/addmeme">add meme</Routing>
      <button onClick={props.godSwitch}>GOD MODE</button>
    </section >
  )
}

function Routing({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  if (to === "/addmeme") {
    return (
      <Link to={to} {...props} className={isActive ? "active" : ""}>
        {children}
      </Link>
    )

  }

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}