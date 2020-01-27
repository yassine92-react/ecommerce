import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Card ,Button,Input} from 'antd';
import { Provider, connect } from "react-redux"; 
import './admin.css'
import * as Categorie from '../shared/Categorie/actions'
import  {fetchCategorie,addCategorie} from '../shared/Categorie/actions'
import 'antd/dist/antd.css'
import { initState } from '../shared/service/service';

const Categories =(props) =>{
  useEffect(()=>{
      props.fetchCategorie();
      // props.addCategorie();
    
},[])
const [newItem, setNewItem] = useState({
  nomCat: '',
  desc: '',

})
const [isShown, setisShown] = useState(false)

const onAdd = categorie => {

  if (isShown) {
    props.addCategorie(categorie)
    setNewItem('')
  } else {
    setisShown(true)
  }
}
const onEditnomCat = newnomCat=> setNewItem({ ...newItem, nomCat: newnomCat.target.value })

  const onEditdesc = newdesc => setNewItem({ ...newItem, desc: newdesc.target.value })


console.log("props",props.list)
return(
<div>
<Button type="primary" onClick={() => onAdd(newItem)}>Ajouter</Button>
{isShown ? (
                  <form>
                    <Input
                      placeholder="name"
                      desc="name"
                      onChange={onEditnomCat}
                      value={newItem.nomCat}
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
{props.list.map((el)=>(

    <Card title="Card_title" bordered={false} style={{ width: 300 }}>
     <p>Nom :{el.nomCat}</p>

      <p>Description :{el.desc}</p>
      <Button type="primary" onClick={() => onAdd(newItem)}>Edit</Button>
      <Button type="primary" onClick={() => onAdd(newItem)}>Delete</Button>

    </Card>
 ))} 
  </div>
  </div>

)
}

const mapStateToProps = state => ({
  list: state.data.categories

});
const mapDispatchToProps ={
  
  fetchCategorie,
  addCategorie,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);




