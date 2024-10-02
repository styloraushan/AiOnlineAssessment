import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div id="top">
     <Helmet>
    <link rel="stylesheet" href="../css/style.css" />
    
    <link 
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700&family=Open+Sans:wght@400;500;700&family=Poppins:wght@400;600&display=swap" 
        rel="stylesheet" 
    />
    
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</Helmet>
        <main>
          <Routes>
            <Route path="/" element={<Hero id="home" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;