import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "./app/root/RootLayouts";
import { About, Article, ArticleID, Home } from "./app/root/pages";
import AuthLayouts from "./app/auth/AuthLayouts";
import { SignIn, SignUp } from "./app/auth/pages";
import { NotFound } from "./components/not-found";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/article/:id",
        element: <ArticleID />,
      },
      {
        path: "auth",
        element: <AuthLayouts />,
        children: [
          {
            path: "sign-in",
            element: <SignIn />,
          },
          {
            path: "sign-up",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "*",
        element: (
          <NotFound
            message="Sorry the page you are looking for is not available, please return to the main page."
            statusTextCode="Page Not Found 404"
            mode="bug"
          />
        ),
      },
    ],
  },
]);
