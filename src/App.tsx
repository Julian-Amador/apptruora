import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Process from './components/Process';
import ValueProposal from './components/ValueProposal';
import MyPast from './components/MyPast';
import MyPresent from './components/MyPresent';
import TheFuture from './components/TheFuture';
import ProposalTruora from './components/ProposalTruora';
import Roadmap from './components/Roadmap';
import Metrics from './components/Metrics';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <About />,
    },
    {
      path: "/my-process",
      element: <Process />,
    },
    {
      path: "/value",
      element: <ValueProposal />,
    },
    {
      path: "/about/mypast",
      element: <MyPast />,
    },
    {
      path: "/about/mypresent",
      element: <MyPresent />,
    },
    {
      path: "/about/thefuture",
      element: <TheFuture />,
    },
    {
      path: "/value/proposal-truora",
      element: <ProposalTruora />,
    },
    {
      path: "/value/roadmap",
      element: <Roadmap />,
    },
    {
      path: "/value/metrics",
      element: <Metrics />,
    },
  ],
  {
    future: {
       v7_startTransition: true,
       v7_relativeSplatPath: true,
    },
  }
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;