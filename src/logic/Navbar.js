import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="main-title">
        99gag
      </Link>
      <ul>
        <Routing to="/addmeme">add meme</Routing>
        <Routing to="/hot">hot</Routing>
        <Routing to="/regular">regular</Routing>
      </ul>
    </nav >
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