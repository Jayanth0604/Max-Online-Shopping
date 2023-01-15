import './App.css';
import Navbar from './Navbar';
import Item from './Item';
import Cart from './Cart';
import Items from './Items';
import Footer from './Footer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/es/integration/react'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import { Persist } from 'react-persist';



function App() {
  const persistConfig = {
    key: 'root',
    storage: storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Items />} />
              <Route exact path='/Cart' element={<Cart />} />
            </Routes>
            <Footer/>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
