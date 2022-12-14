import { Provider } from "react-redux";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRouter from "./router/AuthRouter";
import Router from "./router/router";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<h2>Loading..</h2>}>
          <AuthRouter>
            <Router />
          </AuthRouter>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
