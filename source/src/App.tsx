import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import Providers from "./Providers";
import { TopBarProgressIndicator } from "./Providers/TopBarProgressProvider";
import routes from "./routes";

if ("serviceWorker" in navigator) {
  registerSW();
}
function App() {
  return (
    <Providers>
      <Suspense fallback={<TopBarProgressIndicator />}>
        <RouterProvider router={routes} />
      </Suspense>
    </Providers>
  );
}

export default App;
