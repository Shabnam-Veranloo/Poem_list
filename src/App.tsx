import MainLayout from "./layout";
import Routes from "./routes/Routes";
import { store } from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Routes/>
      </MainLayout>
    </Provider>
  );
}

export default App;
