import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Card ,Button,Input} from 'antd';
import { Provider, connect } from "react-redux"; 
import './admin.css'
import ModalProduits from '../shared/components/categorie/index'

import * as Produit from '../shared/Categorie/actions'
import  {fetchProduit,addProduit,fetchCategorie,deleteProduit,Updateproduit} from '../shared/Categorie/actions'
import 'antd/dist/antd.css'
import { initState } from '../shared/service/service';


const Prduit =(props) =>{
  useEffect(()=>{
      props.fetchProduit();
      // props.addCategorie();
    
},[props])
const Modalproduits = ModalProduits



const [newItem, setNewItem] = useState({
    nom: '',
    categorie:'',
    prix:'',
    desc: '',

})
const [isShown, setisShown] = useState(false)

const onAdd = produit => {
    if (isShown) {
        props.addProduit(produit)
        setNewItem('')
    } else {
        setisShown(true)
    }
    
}
const OnEditproduit = (el) => {
           
    setId1(el)
    setshow(true)
     console.log("el eel",id1)
  }
  const [show, setshow] = useState(false)
const [id1,setId1]=useState(null)
const onEditnom = newnom => setNewItem({ ...newItem, nom: newnom.target.value })
const onEditcategorie = newcategorie => setNewItem({ ...newItem, categorie: newcategorie.target.value })

const onEditprix = newprix => setNewItem({ ...newItem, prix: newprix.target.value })

const onEditdesc = newdesc => setNewItem({ ...newItem, desc: newdesc.target.value })


// console.log("newItem",{newItem})
return(
<div>
<Button type="primary" onClick={() => onAdd(newItem)}>Ajouter</Button>
{isShown ? (
                  <form>
                    <Input
                      placeholder="name"
                      desc="name"
                      onChange={onEditnom}
                      value={newItem.nom}
                    />
                      {/* <Input
                      placeholder="categorie "
                      desc="categorie "
                      onChange={onEditcategorie }
                      value={newItem.categorie }
                    /> */}
                    {  console.log('select',props.selectlist)
}
                   
                     <select value={newItem.nomCat}
                        
                        onChange={onEditcategorie}
                        // value={newItem.categorie}
                        >
                     {props.selectlist.map((el)=>(
                        <option 
                      
                        >
                            {el.nomCat}
                      </option>
                       
                        ))}       
                        </select>

                      <Input
                      placeholder="prix"
                      desc="prix"
                      onChange={onEditprix}
                      value={newItem.prix}
                    />
                    <Input
                      placeholder="Description"
                      desc="desc"
                      onChange={onEditdesc}
                      value={newItem.desc}
                    />
                   
                  </form>
                ) : (
                    ''
                  )}
<div  className="card" style={{ background: '#ECECEC', padding: '30px' }}>
{props.list.map((el)=>(<>
    <Card title={el.nom} bordered={false} style={{ width: 300 }}>
     <p>Nom :{el.nom}</p>
     <p>categorie :{el.categorie}</p>
     <p>prix :{el.prix}</p>

      <p>Description :{el.desc}</p>
  
  <Button type="primary" onClick={() => props.deleteProduit(el)}>delete</Button>
  <Button type="primary" onClick={() => OnEditproduit(el)}>edit</Button>
    </Card>


     </>
))} 
 <Modalproduits
        data={show}
        produit={props.produit.value}
        onSubmit={Updateproduit} 
 
        produit_modifier={{...id1}}
        setshow={setshow}
      />
  </div>
  </div>

)
}

const mapStateToProps = state => ({
    s1electlist:state.data.categories,

  list: state.data.produit,
  produit:  state.data.produit,

}
);

const mapDispatchToProps ={
    fetchCategorie,

  fetchProduit,
  addProduit,
 deleteProduit,
 Updateproduit,

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Prduit);