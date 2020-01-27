
import React, { useEffect, useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import { Slider, InputNumber, Row, Col,Checkbox  } from 'antd';
import { Card } from 'antd';

import 'antd/dist/antd.css'
import  {onSershProduit} from '../../shared/Categorie/actions'

import ReactDOM from 'react-dom';
// import Categories from './CategorieManger'
import Produit from '../produit'
import '../admin.css'
import {onAddpannier,fetchProduit} from '../../shared/Categorie/actions'

// import 'antd/dist/antd.css';
import { connect } from "react-redux"; 
// import './index.css';
// import * as Categorie from '../shared/Categorie/actions'
// import  {fetchCategorie} from '../shared/Categorie/actions'
// import {initState} from '../shared/service/service'

import { Layout, Menu, Icon,Input,Button } from 'antd';

const { Header, Sider, Content } = Layout;
// const { disabled } = this.state;
const { Search } = Input;


const  Detais =( {
  list,
  fetchProduit,
  match,
  onAddpannier
})=>{

  useEffect(()=>
  {
    fetchProduit()
  },[]
  )
  useEffect(()=>
  {
    console.log("qte",qte)
  }
  )
 
  const [collapsed,setcollapsed] =useState(false);
  // const [disabled,setdisabled] =useState(false);

  const [disabled,setdisabled] =useState(false);

  const [inputValue,setinputValue] =useState(0);
  const [qte,setqte] =useState(0);


  const handleDisabledChange = disabled => {
    setdisabled(true);
  };
  const toggle = () => {
   
      setcollapsed( !collapsed)
  
  };


  const onChange1 = value => {
    if (isNaN(value)) {
      return;
    }
  
      setinputValue( value)
   
  };


    // const { inputValue } = this.state;

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="white" mode="dark"  defaultSelectedKeys={['1']}>
            <Menu.Item key="1" >
              <Row>
              <Col span={12}>
                <Slider 
                    min={1}
                    max={20}
                    setonChange1={onChange1}

                    value={typeof inputValue === 'number' ? inputValue : 0
                  }
                />
            </Col>
            <Col span={4}>
            <InputNumber
                min={1}
                max={20}
                style={{ marginLeft: 16 }}
                value={inputValue}
                setonChange1={onChange1}
                
            />
            </Col>
              </Row>
             </Menu.Item>
             <Menu.Item key="3" >


          </Menu.Item>
           
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              setonClick={toggle}
            />
            <Link to={`/panier`}>
              <img src="http://www.abh-deco.be/images/iconepanier.png"
               style={{height: 37,float:'right'}}></img>
        
          </Link>
         
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#FFFFFF',
              minHeight: 280,
            }}
          >
           
        <div  className="card" style={{ background: '#ECECEC', padding: '30px' }}>
          {list.map((el)=>{
            if (el.nom==match.params.nom){
                return(
                <Card title={match.params.nom} bordered={false}  style={{ width: 1500 }}>
                    <div className="pannier">
                    <div ><img src={el.img} alt=""></img></div>
                    <div>
                <p>Nom :{el.nom}</p>
                <p>categorie :{el.categorie}</p>
                <p>prix :{el.prix}</p>
                {/* <InputNumber min={1} max={10} defaultValue={3} value="qte" onChange={e=>console.log(qte)} /> */}
                Qte: <input type="number" name="qte" onChange={(e)=>setqte(e.target.value)}


                ></input>

                <p>Description :{el.desc}</p>
                
                <Link to={`/detais/${el.nom}`}>
                <Button type="primary"
                   onClick={()=>onAddpannier({...el,qte:qte}) }
                   
                >Ajouter pannier</Button>
                </Link>
                </div>
                </div>

                </Card>
             )}})}        
        </div>
      </Content>
        </Layout>
      </Layout>
    );
  };


const mapStateToProps = state => ({
  selectlist:state.data.categories,

  list: state.data.produit,
  listpannier: state.data.pannier,

});
const mapDispatchToProps ={
  fetchProduit,
// fetchCategorie:fetchCategorie
onSershProduit,
onAddpannier,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detais);
