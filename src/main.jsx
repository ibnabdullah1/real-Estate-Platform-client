import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./app/store";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider";
import router from "./Routes/Routes";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </AuthProvider>
  </HelmetProvider>
);
