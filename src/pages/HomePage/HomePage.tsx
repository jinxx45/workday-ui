import ActionContainer from "@/components/ActionContainer";
import HeaderImage from "@/components/HeaderImage";
import QuickTasks from "@/components/QuickTasks";

const HomePage = () => {
  return (
    <>
      <HeaderImage />
      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full h-full container mx-auto px-6 py-6 bg-gray-50">
        {/* Left Column */}
        <div className="md:w-3/5 w-full mb-6 md:mb-0">
          <h1 className="text-2xl">Here's What's Happening</h1>
          <div className="actionContainer w-full h-25 md:pr-10 py-5">
            <ActionContainer />
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-2/5 w-full text-center md:text-left">
          <h1 className="hidden md:block">It's Friday, 14 February, 2025</h1>
          <QuickTasks />
        </div>
      </div>
    </>
  );
};

export default HomePage;
