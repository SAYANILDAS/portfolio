export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white flex justify-between items-center px-8 py-4 z-50">
      <h1 className="text-xl font-bold">Sayanil</h1>

      <div className="space-x-6 hidden md:flex">
        <a href="#about" className="hover:text-blue-400 transition">
          About
        </a>
        <a href="#projects" className="hover:text-blue-400 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-400 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}