import { createStore, applyMiddleware,compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '././shared/Categorie/reducer'
import mySaga from './shared/Categorie/sagas'
let composeEnhancers = compose

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
;
// then run the saga
sagaMiddleware.run(mySaga);