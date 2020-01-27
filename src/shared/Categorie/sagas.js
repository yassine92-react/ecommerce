import { takeEvery, put, all, call } from 'redux-saga/effects'

import * as api  from '../service/service'
import * as CONSTANTS from './constants'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

export function* fetchCategories() {
  try {
    // const data = yield call(api.fetchCategories)
    yield put({
      type: CONSTANTS.FETCH_CATEGORIE_SUCCESS,
    //   Categorie: data,

    })
    
  } catch (e) {
    yield put({ type: CONSTANTS.FETCH_CATEGORIE_FAILURE, e })

  }
}
export function* fetchCategorieWatcher() {

  yield takeEvery(CONSTANTS.FETCH_CATEGORIE_REQUEST, fetchCategories)

}


export function* addCategorie(action) {
    try {
      const result = yield call(api.addCategorie, action.data)
  console.log('ggg',result)
      yield put({
        type: CONSTANTS.ADD_CATEGORIE_SUCCESS,
        Categorie: result,
      })
    } catch (e) {
      yield put({ type: CONSTANTS.ADD_CATEGORIE_FAILURE, e })
    }
  }
  export function* addCategorieWatcher() {
    yield takeEvery(CONSTANTS.ADD_CATEGORIE_REQUEST, addCategorie)
  }



  export function* fetchProduit() {
    try {
      // const data = yield call(api.fetchCategories)
      yield put({
        type: CONSTANTS.FETCH_PRODUIT_SUCCESS,
      //   Categorie: data,
  
      })
      
    } catch (e) {
      yield put({ type: CONSTANTS.FETCH_PRODUIT_FAILURE, e })
  
    }
  }
  export function* fetchProduitWatcher() {
  
    yield takeEvery(CONSTANTS.FETCH_PRODUIT_REQUEST, fetchProduit)
  
  }
  
  
  export function* addProduit(action) {
      try {
        const result = yield call(api.addProduit, action.data)
        yield put({
          type: CONSTANTS.ADD_PRODUIT_SUCCESS,
          produit: result,
        })
      } catch (e) {
        yield put({ type: CONSTANTS.ADD_PRODUIT_FAILURE, e })
      }
    }

 export function* addProduitWatcher() {
      yield takeEvery(CONSTANTS.ADD_PRODUIT_REQUEST, addProduit)
    }

 export function* deleteProduit(action) {
    console.log("rrxcxr")

        try {
            console.log("dsds")
        const Deletedata = yield call(api.deleteProduit, action.data)
          yield put({
            type: CONSTANTS.DELETE_PRODUIT_SUCCESS,
            produit: action,


          })
          console.log("rrr")
        } catch (e) {

          yield put({ type: CONSTANTS.DELETE_PRODUIT_FAILURE, e })
      
        }
      }
      // 
 export function* deleteProduitWatcher() {
      
        yield takeEvery(CONSTANTS.DELETE_PRODUIT_REQUEST, deleteProduit)
      }



export function* updateProduit(action) {
        console.log('action ; ' , action )
        try {
          const result = yield call(api.UpdateProduit, action.data)
      
          yield put({
            type: CONSTANTS.Update_PRODUIT_SUCCESS,
            // data: action.data,
            data:action
      
          })
        } catch (e) {
          yield put({ type: CONSTANTS.Update_PRODUIT_FAILURE, e })
          // console.log("idsaga",action.value)
      
          console.log("teeeeeeeeeee",e)
        }
      }

      export function* updateProduitWatcher() {
        yield takeEvery(CONSTANTS.Update_PRODUIT_REQUEST, updateProduit)
      }




      export function* onSershProduit(action) {
        console.log('action ; ' , action )
        try {
          const result = yield call(api.onSershProduit, action.value)
          console.log("ddd")

          yield put({
            type: CONSTANTS.SHERSH_PRODUIT_SUCCESS,
            // data: action.data,
            data:action

          })
        } catch (e) {
            console.log("recherche1",e)
          yield put({ type: CONSTANTS.SHERSH_PRODUIT_FAILURE, e })
      
          console.log("recherche",e)
        }
      }

      export function* onSershProduitWatcher() {
        yield takeEvery(CONSTANTS.SHERSH_PRODUIT_REQUEST, onSershProduit)
      }
      

      export function* onAddpannier(action) {
    try {
      console.log("action data",action)
      const result = yield call(api.addpannier, action.value)
      yield put({
        type: CONSTANTS.ADD_PANNIER_SUCCESS,
        pannier: result,
      })
    } catch (e) {
      yield put({ type: CONSTANTS.ADD_PANNIER_FAILURE, e })
    }
  }
  export function* onAddpannierWatcher() {
    yield takeEvery(CONSTANTS.ADD_PANNIER_REQUEST, onAddpannier)
  }
export default function* Categoriesaga() {
    yield all([
        fetchCategorieWatcher(),
        addCategorieWatcher(),
        addProduitWatcher(),
        deleteProduitWatcher(),
        updateProduitWatcher(),
        onSershProduitWatcher(),
        onAddpannierWatcher(),
    ])
  }