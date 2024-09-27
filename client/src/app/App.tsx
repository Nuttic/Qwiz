
import { RouterProvider } from 'react-router-dom';
import {router} from './router/router';
import { Provider } from 'react-redux';
import store from './store';
import { ScoreProvider } from './scoreContext';
function App() {
  

  return (
    <>
      <Provider store={store}>
        <ScoreProvider>
        <RouterProvider router={router} />
        </ScoreProvider>
      </Provider>
    </>
  );
}

export default App
