import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div className="App">
      <DarkModeProvider>
        <main className="main">
          <Header filter={filter} filters={filters} onFilter={setFilter} />
          <TodoList filter={filter} />
        </main>
      </DarkModeProvider>
    </div>
  );
}

export default App;
