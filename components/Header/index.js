export default function Header(props) {
  let active;
  return (
    <header>
      <div className="navbar bg-neutral text-neutral-content">
        <ul className="mx-auto ">
          <a className="normal-case mr-5 hover:text-white border-b-2 border-primary">
            Home
          </a>
          <a className="normal-case mr-5 hover:text-white">Projects</a>
          <a className="normal-case hover:text-white">Contact</a>
        </ul>
      </div>
    </header>
  );
}
