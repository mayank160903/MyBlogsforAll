import "./App.css";
import RootLayout from "./RootLayout";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import Postpage from "./pages/Postpage";
import EditPost from "./pages/EditPost";

function App() {

  async function fetchInfo(){
    const url = `${process.env.REACT_APP_API_URL}`
    const response = await fetch(url);
    const json = await response.json();
  }
  
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<Postpage />} />
        <Route path="/edit/:id" element={<EditPost />} />

      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
