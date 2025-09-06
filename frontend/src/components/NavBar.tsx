"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const [openServices, setOpenServices] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const Links: Record<string, string> = {
    HOME: "/",
    CONTACT: "/contact",
  };

  const services = [
    { name: "AI THERAPIST", link: "/ai-chatbot" },
    { name: "FIND THERAPISTS", link: "/find-therapist" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f2027]/90 backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-20 h-20">
        {/* Logo */}
        <button onClick={() => router.push("/")}>
          <Image
            src={"/wellnestlogo.svg"}
            width={140}
            height={140}
            alt="logo"
            className="cursor-pointer"
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {Object.keys(Links).map((link, index) => (
            <button
              key={index}
              onClick={() => router.push(Links[link])}
              className={`relative pb-1 cursor-pointer transition-colors ${
                pathname === Links[link]
                  ? "text-[#48C9B0]"
                  : "text-[#E6E8D2] hover:text-[#48C9B0]"
              }`}
            >
              {link}
              {pathname === Links[link] && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#48C9B0]"></span>
              )}
            </button>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
          >
            <button
              className={`relative pb-1 transition-colors ${
                openServices ? "text-[#48C9B0]" : "text-[#E6E8D2] hover:text-[#48C9B0]"
              }`}
            >
              SERVICES
            </button>
            {openServices && (
              <div className="absolute top-8 left-0 bg-[#203a43] border border-[#2c5364] rounded-lg shadow-lg w-48 py-2">
                {services.map((service, key) => (
                  <button
                    key={key}
                    onClick={() => router.push(service.link)}
                    className="block w-full text-left px-4 py-2 text-sm text-[#E6E8D2] hover:bg-[#2c5364] hover:text-[#48C9B0]"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login/Logout */}
          <button
            onClick={() =>
              session.status === "authenticated"
                ? signOut()
                : router.push("/login")
            }
            className="relative pb-1 text-[#E6E8D2] hover:text-[#48C9B0]"
          >
            {session.status === "unauthenticated" ||
            session.status === "loading"
              ? "LOGIN"
              : "LOGOUT"}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-[#E6E8D2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {openMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden flex flex-col items-center bg-[#203a43] shadow-lg py-4 gap-4">
          {Object.keys(Links).map((link, index) => (
            <button
              key={index}
              onClick={() => {
                router.push(Links[link]);
                setOpenMenu(false);
              }}
              className={`text-base ${
                pathname === Links[link]
                  ? "text-[#48C9B0]"
                  : "text-[#E6E8D2] hover:text-[#48C9B0]"
              }`}
            >
              {link}
            </button>
          ))}

          {/* Services dropdown in mobile */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[#E6E8D2] cursor-pointer font-medium">SERVICES</span>
            {services.map((service, key) => (
              <button
                key={key}
                onClick={() => {
                  router.push(service.link);
                  setOpenMenu(false);
                }}
                className="text-sm cursor-pointer text-[#E6E8D2] hover:text-[#48C9B0]"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Login/Logout */}
          <button
            onClick={() => {
              if (session.status === "authenticated") {
                signOut();
              } else {
                router.push("/login");
              }
              setOpenMenu(false);
            }}
            className="text-base text-[#E6E8D2] hover:text-[#48C9B0]"
          >
            {session.status === "unauthenticated" ||
            session.status === "loading"
              ? "LOGIN"
              : "LOGOUT"}
          </button>
        </div>
      )}
    </nav>
  );
}
