import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import {Provider} from "react-redux";
import { createStore } from "redux";

import rootStore from "./store";
import SingleCard from "./Components/SingleCard/SingleCard";
import SiteNotFound from "./Components/SiteNotFound/SiteNotFound";

const store = createStore(rootStore);

function App() {

  return (
      <Provider store={store}>
        <div className="flex bg-stone-900 h-full w-screen min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="card/:id" element={<SingleCard />} />
            <Route path="/*" element={<SiteNotFound />} />
          </Routes>
        </div>
      </Provider>
  );
}

export default App;
