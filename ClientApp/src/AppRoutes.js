import { Education } from "./components/Education";
import { WorkExperience } from "./components/WorkExperience";
import { Home } from "./components/Home";
import { About } from "./components/About";

const AppRoutes = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/education",
        element: <Education/>,
    },
    {
        path: "/workexperience",
        element: <WorkExperience />,
    },
];

export default AppRoutes