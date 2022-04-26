import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import authReducer from "./reducer/auth.reducer";
import authWatcher from "../saga/auth.saga";
import storage from "redux-persist/lib/storage";
import { all, fork } from "redux-saga/effects";

function* rootSaga() {
  yield all([fork(authWatcher)]);
}
const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

let enhancer = compose(
  applyMiddleware(sagaMiddleware),
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
    ? (a) => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, enhancer);
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
