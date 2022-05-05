import { Provider } from "react-redux";
import "./App.css";
import PostContainer from "./components/PostContainer";
import PostsList from "./components/PostsList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostContainer />
        {/* <PostsList /> */}
      </div>
    </Provider>
  );
}

export default App;
