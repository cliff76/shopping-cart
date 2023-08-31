import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Store} from "./pages/Store.tsx";
import {About} from "./pages/About.tsx";

function App() {
  return (
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/store" element={<Store/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Container>
  )
}

export default App
