import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeOne from "./Components/Home/HomeOne";
import ErrorPage from "./Components/Pages/404Page";
import AboutTwo from "./Components/Pages/AboutTwo";
import BLogStandard from "./Components/Pages/BLogStandard";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";
import Event from "./Components/Pages/Event";
import EventSingle from "./Components/Pages/EventSingle";
import InstructorDetails from "./Components/Pages/InstructorDetails";
import InstructorTwo from "./Components/Pages/InstructorTwo";
import SingleBlog from "./Components/Pages/SingleBlog";
import SingleCourse from "./Components/Pages/SingleCourse";
import Thanks from "./Components/Pages/Thanks";

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route
            path="/"
            element={<HomeOne />}
          />
      
          <Route
            path="/react-templates/edumim/about-two"
            element={<AboutTwo />}
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
            path="/event-single"
            element={<EventSingle />}
          />
          <Route path="/react-templates/edumim/error" element={<ErrorPage />} />
          <Route path="/react-templates/edumim/courses" element={<Courses />} />
          <Route
            path="/single-course"
            element={<SingleCourse />}
          />
          <Route
            path="/blog-standard"
            element={<BLogStandard />}
          />
          <Route
            path="/single-blog"
            element={<SingleBlog />}
          />
          <Route
            path="/contacts"
            element={<ContactUs />}
          />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;