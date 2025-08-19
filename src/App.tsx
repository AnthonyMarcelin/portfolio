import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="relative min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Homepage />
      </main>
    </div>
  );
}

export default App;
