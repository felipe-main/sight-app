import world from "../images/world.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={world} alt=""></img>
      <p>my travel journal</p>
    </nav>
  );
}
