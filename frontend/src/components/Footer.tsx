// import axios from "axios";
import Link from "next/link";

export function Footer() {
  // const sendEmail = () => {
  //   const message = axios.post(`${process.env.BACKEND_URL}/admin/email`, {});
  // };

  return (
    <>
      <div className="w-full  bg-[#E6E8D2] text-black text-2xl py-8 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md">
        <div></div>
        <div className="text-center md:text-left">GET IN TOUCH:</div>
        <div className="text-center md:text-left">CONTACT US:</div>
      </div>
      <div className="px-4 w-full bg-[#E6E8D2] text-black text-sm py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div></div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div>
            Mob:{" "}
            <Link href="/afsd" className="underline">
              +91 9811033533
            </Link>
            <span>, </span>
            <Link className="underline" href={""}>
              +91 8296868510
            </Link>
          </div>
          <div>
            Email:{" "}
            <Link href="/afsd" className="underline">
              mohithingorani2003@gmail.com
            </Link>
            <span>, </span>
            <Link className="underline" href={""}>
              rushilmisra@gmail.com
            </Link>{" "}
          </div>
          <div>
            Manpal University Jaipur,
            <br /> GHS
            <br /> B7 - 227
          </div>

          <div className="pt-8">© 2025 by Mohit Hingorani and Rushil Misra</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div>
              <div className="pb-1">Enter Your Name *</div>
              <input
                className="border border-black bg-white hover:bg-slate-100 w-full px-3 py-1.5 focus:border-red-600 outline-none"
                placeholder="Name"
              />
            </div>
            <div>
              <div className="pb-1">Enter Your Email *</div>
              <input
                className="border border-black bg-white hover:bg-slate-100 w-full px-3 py-1.5 focus:border-red-600 outline-none"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="pb-1">Enter Your Message *</div>
              <textarea
                className="border border-black bg-white hover:bg-slate-100 w-full px-3 py-1.5 focus:border-red-600 outline-none h-[7rem]"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="pt-4">
              <button
                // onClick={sendEmail}
                className="bg-black border-4 border-black text-white hover:bg-white hover:text-black w-full px-3 py-1.5"
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
