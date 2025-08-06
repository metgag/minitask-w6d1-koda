import { Link } from "react-router";

function Header({ uname }) {
  const menu = [
    { to: "/shopping", content: "Shopping" },
    { to: "/to-do", content: "To-do" },
  ];
  const auth = [
    { to: "/login", content: "Login" },
  ];

  return (
    <header className="sticky top-0">
      <nav
        className="flex justify-between px-8 items-center bg-slate-100 w-screen py-2"
      >
        <div className="flex items-center">
          <Link to="/">
            <img src="/ico.png" className="w-12" alt="" />
          </Link>
          {uname.length > 0 ?
            (<p>Hello, <span>{uname}</span></p>)
            :
            (<p>Belum ada user</p>)
          }
        </div>
        <div className="flex gap-4">
          {menu.map((e, i) => <MkLink content={e.content} to={e.to} key={i} />)}
        </div>
        <div className="flex gap-2">
          {auth.map((e, i) => <MkLink content={e.content} to={e.to} key={i} border="y" />)}
        </div>
      </nav>
    </header>
  )
}

function MkLink({ to, content, i, border }) {
  return (
    <Link to={to} key={i}
      className={` ${border && "border rounded-full px-3 py-1"}
      hover:cursor-pointer hover:opacity-[.6]`}
    >
      {content}
    </Link>
  )
}

export default Header
