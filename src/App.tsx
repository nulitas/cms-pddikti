import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element="" /> */}
          <Route path="/" element="">
            <Route index element="" />
            <Route path="" element="" />
            <Route path="" element="" />
            <Route path="" element="" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
