import * as CONSTANTS from '../constants'
import produce from 'immer'
export const initialState = {
    loading: false, data: {
      // filtertab:[
      //     {
      //       nom: 'Firstproduit222',
      //       categorie:'firstcategorie',
      //       prix:'18',
      //       desc:'test'
            
      //     }

      // ],
        categories:[
            {
               
                nomCat: 'FirstCategorie',
                desc:'test'
            },
            {
                
              nomCat: 'sec',
                desc:'test2'
            }
        ],
        
        produit:[
          {
             img:'http://www.eti-eclairage.fr/wp-content/uploads/2019/03/dela-2-img-produit-thumbnail.png',
              nom: 'Firstproduit',
              categorie:'c',
              prix:'50',
              desc:'test'
          },
          {
              img:'http://www.eti-eclairage.fr/wp-content/uploads/2019/03/prolian-2-img-produit-thumbnail.png',
            nom: 'secproduit',
            categorie:'b',
            prix:'25',
            desc:'test2'
          },
          {
            img:'http://www.eti-eclairage.fr/wp-content/uploads/2019/03/dela-2-img-produit-thumbnail.png',
             nom: 'produit',
             categorie:'a',
             prix:'30',
             desc:'test'
         },
      
      ],
      pannier:[
        {
       
        },
        // {
        //   img:'tt',
        //   nom: 'tt',
        //   categorie:'tt',
        //   prix:'tt',
        //   desc:'tt'
        // },
      ]
  
    }
  }

  const CategorieReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
     case CONSTANTS.FETCH_CATEGORIE_REQUEST:
        draft.loading = true

        break

      case CONSTANTS.FETCH_CATEGORIE_SUCCESS:

        // draft.data.categories = action.Categorie
        draft.loading = false

        break
      case CONSTANTS.FETCH_CATEGORIE_FAILURE:
        draft.loading = false

        break

      case CONSTANTS.ADD_CATEGORIE_REQUEST:
        draft.loading = true
        break
      case CONSTANTS.ADD_CATEGORIE_SUCCESS:
          // console.log('nnk',[...draft.data.categories, action.Categorie ])
          draft.data.categories = [...draft.data.categories, action.Categorie ]
          draft.loading = false
          break
          case CONSTANTS.ADD_CATEGORIE_FAILURE:
          draft.loading = false
          break




        case CONSTANTS.FETCH_PRODUIT_REQUEST:
          draft.loading = true
  
          break
  
        case CONSTANTS.FETCH_PRODUIT_SUCCESS:
            draft.loading = false
  
          break
        case CONSTANTS.FETCH_PRODUIT_FAILURE:
          draft.loading = false
  
          break
        case CONSTANTS.ADD_PRODUIT_REQUEST:
          draft.loading = true
          break
        case CONSTANTS.ADD_PRODUIT_SUCCESS:
            console.log('nnk',[...draft.data.produit, action.produit ])
            draft.data.produit = [...draft.data.produit, action.produit ]
            draft.loading = false
            break
            case CONSTANTS.ADD_PRODUIT_FAILURE:
          draft.loading = false
          break

          case CONSTANTS.Update_PRODUIT_REQUEST:
            draft.loading = true
            break
          case CONSTANTS.Update_PRODUIT_SUCCESS:
           
            draft.data = draft.data.produit.map(el =>
              el.nom === action.nom ? { ...el, ...action } : el
            );
            draft.loading = false
            break
           case CONSTANTS.Update_PRODUIT_FAILURE:
            draft.loading = false
            break

           case CONSTANTS.DELETE_PRODUIT_REQUEST:
            draft.loading = true
           break
      case CONSTANTS.DELETE_PRODUIT_SUCCESS:
        console.log("before",state.data.produit)

        draft.data.produit = draft.data.produit.filter(el => el.nom !== action.produit.data)
        console.log("jjjjj",draft.data.produit)
        draft.loading = false
        break
      case CONSTANTS.DELETE_PRODUIT_FAILURE:
        draft.loading = false
        break

        
        case CONSTANTS.SHERSH_PRODUIT_REQUEST:
        draft.loading = true
        break
        case CONSTANTS.SHERSH_PRODUIT_SUCCESS:
        console.log("before",state.data.produit)
        // draft.data.produit = draft.data.produit.filter(el =>
        // el.nom.includes(action.data.value))
   
        // return setList(data.filter(e => e.theme.includes(value)));
        console.log("after",state.data.produit)

        draft.loading = false
        break
        case CONSTANTS.SHERSH_PRODUIT_FAILURE:
        draft.loading = false
        break

  case CONSTANTS.ADD_PANNIER_REQUEST:
          draft.loading = true
          break
        case CONSTANTS.ADD_PANNIER_SUCCESS:
            draft.data.pannier = [...draft.data.pannier, action.pannier ]
            draft.loading = false
            break
            case CONSTANTS.ADD_PANNIER_FAILURE:
          draft.loading = false
          break

    }
    })

    export default CategorieReducer