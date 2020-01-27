import * as CONSTANTS from './constants'


export const fetchCategorie = () => ({

    type: CONSTANTS.FETCH_CATEGORIE_REQUEST,
   
  }
 
  )
  export const addCategorie = data => {
    return ({
    type: CONSTANTS.ADD_CATEGORIE_REQUEST,
    data,
  })}

  export const fetchProduit = () => ({

    type: CONSTANTS.FETCH_PRODUIT_REQUEST,
   
  }
 
  )
  export const addProduit = data => {
    return (
      
      {

    type: CONSTANTS.ADD_PRODUIT_REQUEST,
    data,

  })
}
export const deleteProduit = data => {
// console.log(data)
  return ({

    type: CONSTANTS.DELETE_PRODUIT_REQUEST,
    data,
  }

  )
}

export const Updateproduit = (id,value )=> {
  console.log('id action',id)
  console.log('value action',value)


  return ({

    type: CONSTANTS.Update_PRODUIT_REQUEST,
    id,
    value  }
  )

}


export const onAddpannier = (value )=> {
  // console.log('id action',id)
  // console.log('value pannier',qte)


  return ({

    type: CONSTANTS.ADD_PANNIER_REQUEST,
    
    value,
    
  }

  )

}
export const onSershProduit = (value )=> {
  // console.log('id action',id)
  console.log('value action',{value})


  return ({

    type: CONSTANTS.SHERSH_PRODUIT_REQUEST,
    
    value  
  }

  )
}
