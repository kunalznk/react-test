import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/login";

function App() {
  return (
    <div className="h-dvh w-full">
      <Header />
      <div className="h-[88vh]">
      <Login />
      </div>
      <Footer />
    </div>
    );
}

export default App;
