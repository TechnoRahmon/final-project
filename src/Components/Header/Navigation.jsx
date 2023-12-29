import { Link } from "react-router-dom";
import { AdminLinks, guestLinks } from "./NavLinks";

export function Navigation({ isAuthendticated }) {

  const navLinks = isAuthendticated? AdminLinks : guestLinks;

  return (
    <nav>
      <ul className="flex flex-row p-3 gap-4">
      {
        navLinks.length?
        navLinks.map( (link, index)=> <NavItem key={index} {...link} />)
        :''
      }
      </ul>
    </nav>
  );
}

const NavItem = ({
  link,
  display
}) => (
  <>
    <li>
      <Link to={link} className="text-sky-600 hover:text-sky-900">{display}</Link>
    </li>
  </>
);
