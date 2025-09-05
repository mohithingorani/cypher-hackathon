"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const session = useSession();

  const Links: Record<string, string> = {
    HOME: "/",
    CONTACT: "/contact",
  };

  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav>
      <div className="flex w-full z-120 justify-end px-8 py-8 gap-4 text-sm bg-[#E6E8D2] shadow-xl h-20 fixed top-0 items-center md:px-60">
        <div className="flex  flex-start w-full">
          <button
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              src={"/wellnestlogo.svg"}
              width={"150"}
              height={"150"}
              alt="logo"
            />
          </button>
        </div>

        {Object.keys(Links).map((link, index) => (
          <a
            key={index}
            href={Links[link]}
            className={`h-8 ${
              pathname === Links[link] ? "text-[#896790]" : " text-slate-600"
            }   hover:text-[#896790] `}
          >
            <button
              className={`hover:border-b-2 ${
                pathname === Links[link] && "border-b-2"
              } cursor-pointer   h-full`}
            >
              {link}
            </button>
          </a>
        ))}
        <div
          className={`h-8 cursor-pointer text-slate-600 hover:text-[#896790]`}
        >
          <InputForm services={services} />
        </div>
        <div
          className={`h-8 cursor-pointer text-slate-600 hover:text-[#896790]`}
        >
          <button
            onClick={() => {
              if (session.status === "authenticated") {
                signOut();
              } else {
                router.push("/login");
              }
            }}
            className={`hover:border-b-2  h-full cursor-pointer`}
          >
            {session.status === "unauthenticated" ||
            session.status === "loading"
              ? "LOGIN"
              : "LOGOUT"}
          </button>
        </div>
      </div>
    </nav>
  );
}

const services = [
  {
    name: "AI THERAPIST",
    link: "/ai-chatbot",
  },
  {
    name: "FIND THERAPISTS",
    link: "/find-therapist",
  },
];

interface service {
  name: string;
  link: string;
}
const InputForm = ({ services }: { services: service[] }) => {
  const router = useRouter();

  return (
    <select
      defaultValue="SERVICES"
      id="services"
      className="h-8 outline-none w-[100px] cursor-pointer text-slate-600 hover:border-b-2 hover:text-[#896790]"
      onChange={(e) => {
        const selectedService = services.find(
          (service) => service.link === e.target.value
        );
        if (selectedService) {
          router.push(selectedService.link);
        }
      }}
    >
      <option value="SERVICES" disabled>
        SERVICES
      </option>
      {services.map((service, key) => (
        <option key={key} value={service.link}>
          {service.name}
        </option>
      ))}
    </select>
  );
};
