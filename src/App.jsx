import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
  return (
    <div className="flex h-full border-2">
      <aside className="h-full border-2">
        <Sidebar />
      </aside>
      <main className="flex flex-col">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
