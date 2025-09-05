import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col w-full justify-start items-center mt-40 h-fit">
        <Image src="/404.svg" width="300" height="300" alt="asf" />
      </div>
      <div>
        <Image
          className="md:moving-element mt-24"
          src="/towing.svg"
          width="500"
          height="500"
          alt="asf"
        />
      </div>
      <div></div>
    </>
  );
}
