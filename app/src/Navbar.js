import { Link, useMatch, useResolvedPath } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import CottageIcon from "@mui/icons-material/Cottage";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <CottageIcon />
      </Link>
      <ul>
        <CustomLink to="/articles">
          <MenuBookIcon />
        </CustomLink>
        <CustomLink to="/translator">
          <GTranslateIcon />
        </CustomLink>
        <CustomLink to="/converter">
          <SwapHorizIcon />
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
