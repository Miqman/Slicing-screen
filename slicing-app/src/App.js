import { Route, Routes } from "react-router-dom";
import DetailPage from "./views/DetailPage";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

function App() {
  return (
    <div className="flex justify-center">
      <div className="h-full w-[576px] bg-white">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="*"
            element={
              <p className="cursor-default py-20 text-center text-2xl">
                There's nothing here: <span className="underline">404!</span>
              </p>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
