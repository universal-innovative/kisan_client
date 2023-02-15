import { useRoutes } from "react-router-dom";

// ----------------Routes ------------------//

import { MainLayout } from "./layout";
import { Contacts, Messages } from "./pages";

// --------------------------Routing Object------------------------------- //

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "contacts", element: <Contacts /> },
        { path: "messages", element: <Messages /> },
      ],
    },
  ]);
}
