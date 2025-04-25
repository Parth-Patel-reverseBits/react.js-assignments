import { SmoothCursor } from "./Components/ui/smooth-cursor";
// import Heading from "./Components/Atoms/Heading";
// import SubHeading from "./Components/Atoms/SubHeading";
// import FormField from "./Components/Molecules/FormField";
import MultiStepFormPage from "./Components/Pages/MultiStepFormPage";
import DatePicker from "./Components/Atoms/DatePicker";

const App = () => {
  return (
    <div className="bg-[#F9FAFB]  h-screen w-full">
      <SmoothCursor />
      <h1 className="text-center text-3xl font-bold mt-5">
        Multi-Step Form Demo
      </h1>
      <p className="text-center mt-3 text-[#64748B] text-[16px]">
        A comprehensive form with validation, conditional fields, and
        persistence
      </p>
      <MultiStepFormPage />
      {/* <div className="mx-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[5px] px-10">
        <div>
          <Heading children="Personal Information" />
          <SubHeading children="Tell us a bit about yourself. All fields are required." />
        </div>
      </div> */}
    </div>
  );
};

export default App;
