import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#203a43] to-[#0f2027] text-[#E6E8D2] border-t border-[#2c5364]">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 px-6 text-lg sm:text-xl font-semibold">
        <div />
        <div className="text-center md:text-left text-[#48C9B0] tracking-wide">
          GET IN TOUCH
        </div>
        <div className="text-center md:text-left text-[#48C9B0] tracking-wide">
          CONTACT US
        </div>
        <div />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 px-6 text-sm">
        <div />

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div>
            Mob:{" "}
            <Link
              href="tel:+919811033533"
              className="underline hover:text-[#48C9B0] transition-colors"
            >
              +91 9811033533
            </Link>
            <span>, </span>
            <Link
              href="tel:+918296868510"
              className="underline hover:text-[#48C9B0] transition-colors"
            >
              +91 8296868510
            </Link>
          </div>
          <div>
            Email:{" "}
            <Link
              href="mailto:mohithingorani2003@gmail.com"
              className="underline hover:text-[#48C9B0] transition-colors"
            >
              mohithingorani2003@gmail.com
            </Link>
            <span>, </span>
            <Link
              href="mailto:rushilmisra@gmail.com"
              className="underline hover:text-[#48C9B0] transition-colors"
            >
              rushilmisra@gmail.com
            </Link>
          </div>
          <div>
            Manipal University Jaipur,
            <br /> GHS, B7 - 227
          </div>
          <div className="pt-6 text-[#E6E8D2]/60 text-xs">
            © 2025 Mohit Hingorani & Rushil Misra
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side Inputs */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block pb-1 text-xs font-medium text-[#E6E8D2]/80">
                Enter Your Name *
              </label>
              <input
                type="text"
                placeholder="Name"
                className="border border-[#48C9B0]/50 bg-[#203a43]/40 text-[#E6E8D2] rounded-md w-full px-3 py-2 focus:border-[#48C9B0] focus:ring-1 focus:ring-[#48C9B0] outline-none placeholder-gray-400 transition-all"
              />
            </div>
            <div>
              <label className="block pb-1 text-xs font-medium text-[#E6E8D2]/80">
                Enter Your Email *
              </label>
              <input
                type="email"
                placeholder="Email"
                className="border border-[#48C9B0]/50 bg-[#203a43]/40 text-[#E6E8D2] rounded-md w-full px-3 py-2 focus:border-[#48C9B0] focus:ring-1 focus:ring-[#48C9B0] outline-none placeholder-gray-400 transition-all"
              />
            </div>
          </div>

          {/* Right Side Inputs */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block pb-1 text-xs font-medium text-[#E6E8D2]/80">
                Enter Your Message *
              </label>
              <textarea
                placeholder="Message"
                className="border border-[#48C9B0]/50 bg-[#203a43]/40 text-[#E6E8D2] rounded-md w-full px-3 py-2 h-[7rem] resize-none focus:border-[#48C9B0] focus:ring-1 focus:ring-[#48C9B0] outline-none placeholder-gray-400 transition-all"
              ></textarea>
            </div>
            <div>
              <button className="bg-[#48C9B0] border-2 border-[#48C9B0] text-[#0f2027] rounded-md hover:bg-transparent hover:text-[#48C9B0] transition-colors w-full px-3 py-2 font-medium">
                Send
              </button>
            </div>
          </div>
        </div>

        <div />
      </div>
    </footer>
  );
}
