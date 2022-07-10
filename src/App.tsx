import { Provider } from 'react-redux';

import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <div></div>
  </Provider>
);

export default App;
