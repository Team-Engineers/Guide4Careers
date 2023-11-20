import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeOne from "./Components/Home/HomeOne";
import ErrorPage from "./Components/Pages/404Page";
import AboutOne from "./Components/Pages/AboutOne";
import AboutTwo from "./Components/Pages/AboutTwo";
import ContactUs from "./Components/Pages/ContactUs";
import Event from "./Components/Pages/Event";
import EventSingle from "./Components/Pages/EventSingle";
import InstructorDetails from "./Components/Pages/InstructorDetails";
import InstructorOne from "./Components/Pages/InstructorOne";
import InstructorTwo from "./Components/Pages/InstructorTwo";
import Thanks from "./Components/Pages/Thanks";

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          {/* <Route
            path="/"
            element={<Navigate to={"/react-templates/edumim"} />}
          />
          <Route path="/react-templates/edumim" element={<HomeOne />} />
          <Route path="/react-templates/edumim/about" element={<AboutOne />} />
          <Route
            path="/react-templates/edumim/about-two"
            element={<AboutTwo />}
          />
          <Route
            path="/react-templates/edumim/instructor"
            element={<InstructorOne />}
          />
          <Route
            path="/react-templates/edumim/instructor-two"
            element={<InstructorTwo />}
          />
          <Route
            path="/react-templates/edumim/instructor-details"
            element={<InstructorDetails />}
          />
          <Route path="/react-templates/edumim/event" element={<Event />} />
          <Route
            path="/react-templates/edumim/event-single"
            element={<EventSingle />}
          />
          <Route path="/react-templates/edumim/error" element={<ErrorPage />} />
          <Route
            path="/react-templates/edumim/contacts"
            element={<ContactUs />}
          />
          <Route path="/react-templates/edumim/thanks" element={<Thanks />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
