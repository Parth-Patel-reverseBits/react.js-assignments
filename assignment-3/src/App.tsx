import { SmoothCursor } from "./Components/ui/smooth-cursor";
import MultiStepFormPage from "./Components/Pages/MultiStepFormPage";

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
    </div>
  );
};

export default App;
