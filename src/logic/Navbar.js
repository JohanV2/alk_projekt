import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Navbar.scss"

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <Routing to="/alk_projekt/hot">hot</Routing>
        <Routing to="/alk_projekt/regular">regular</Routing>
      </ul>
    </nav >
  )
}

export function TopBar(props) {
  return (
    <section className="top-logo">
      <Link to="/alk_projekt/" className="main-title">99gag</Link>
      <div className="right-top">
        <Routing to="/alk_projekt/addmeme">add meme</Routing>
        <button onClick={props.godSwitch} style={{ backgroundColor: props.GODMODE ? "red" : "transparent" }}>GOD MODE</button>
      </div>
    </section >
  )
}

function Routing({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  if (to === "/alk_projekt/addmeme") {
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