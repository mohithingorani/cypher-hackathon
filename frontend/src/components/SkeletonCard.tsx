export default function TherapistCardSkeleton() {
    return (
        
      <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl rounded-lg shadow-sm bg-white border border-gray-200 animate-pulse">
        <div className="flex flex-col items-center text-start w-full md:flex-row p-4">
          <div className="w-full md:w-48 h-72 md:h-auto bg-gray-300 rounded-lg"></div>
          <div className="flex flex-col justify-between px-4 py-4 md:py-8 leading-normal w-full">
            <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
            <div className="flex flex-wrap justify-start items-center gap-2 mt-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="h-6 w-16 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-slate-300 py-4 rounded-b-lg">
          <div className="mx-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <div className="flex flex-col justify-start mb-2 sm:mb-0">
              <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
              <div className="h-5 w-32 bg-gray-300 rounded"></div>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <div className="h-8 w-20 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }