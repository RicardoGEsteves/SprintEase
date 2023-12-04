import Slider from "./slider";

const DemoContent = (): React.ReactNode => {
  return (
    <div className="flex items-center justify-center flex-col bg-white border-t border-gray-200 mt-10 w-full ">
      <h3 className=" py-14 px-4 text-center text-white font-semibold text-4xl bg-gradient-to-r from-sky-900 to-sky-700 w-full">
        Discover the features that make SprintEase different and easy to use
      </h3>
      <Slider />
    </div>
  );
};

export default DemoContent;
