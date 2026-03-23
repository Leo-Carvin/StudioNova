export default function Header() {
  return (
    <header className="flex fixed w-[100%] z-2 justify-around items-center p-6 bg-[#fffffff0] text-black">
        <div className="flex"> 
          <a className="Head-Link flex" href="/#accueil">
            <img src="./Logo/Logo_Studio_Nova_remove.png" alt="Studio Nova" className="h-10" />
            <h1 className="flex items-center text-l font-bold">Studio Nova</h1>
          </a>
        </div>
        <nav className="flex gap-6">
            <a className="Head-Link text-s font-bold" href="/#a-propos">à propos</a>
            <a className="Head-Link text-s font-bold" href="/#services">Services</a>
            <a className="Head-Link text-s font-bold" href="/#contact">Contact</a>
        </nav>
    </header>
  );
}