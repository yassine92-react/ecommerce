
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
import {onAddpannier} from '../../shared/Categorie/actions'

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
class panier extends React.Component {
  
  state = {
    collapsed: false,
    disabled: false,
  };
  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  state = {
    inputValue: 0,
  };

  onChange = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      inputValue: value,
    });
  };


  render() {
    const { inputValue } = this.state;

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="white" mode="dark"  defaultSelectedKeys={['1']}>
            {/* <Menu.Item key="2" >
            <Link to="/">

              <Icon type="user" />
            </Link>
            </Menu.Item> */}

           
              
              <Menu.Item key="1" style={{margintop:'20px', height: "36px"}}>
              <Row>
            <Link to="/liste_produit">

              <Icon type="user" />
              <span>Liste des produits</span>
              </Link>
           
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
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            
              {/* <Search  style={{width:'900px',
                margintop:'15px ' ,
                paddingleft:'60px'}} 
                placeholder="input search text" 
                // onSearch=          
                // {value => console.log(value)} 
                // onClick={(e) => this.props.onSershProduit(e.target.value)}
                 onChange={e => this.props.onSershProduit(e.target.value)}
                enterButton /> */}

          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#FFFFFF',
              minHeight: 280,
            }}
          >
            {/* {console.log('i',initState.listCategorie)} */}
            {/* <Switch>
            <Route exact path="/" component={Categories} />
            
        </Switch> */}
        <div  className="card" style={{ background: '#ECECEC', padding: '30px' }}>
        <Card bordered={false}  style={{ width: 1500 }}>
        {        console.log('pannier',this.props.list)
}
        <table >
             <tr>
                  <th>Image du paroduit </th>
                  <th>Nom du produit</th>
                  <th>Categorie</th>
                 
                  <th>Description </th>
                  <th>prix</th>
             </tr>
          {this.props.list.map((el)=>(
            // if (el.nom==this.props.match.params.nom){
            //     return(
              
                  
                  <tr>
                   <th><img src={el.img} alt=""></img> </th>
                  <th>{el.nom}</th>
                  <th>{el.categorie} </th>
                  
                  <th>{el.desc} </th>
                  <th>{el.prix}</th>
                  </tr>
          ))

          }        
       
        </table>

        </Card>
        </div>
      </Content>
        </Layout>
      </Layout>
    );
  }
}
const mapStateToProps = state => ({
  // selectlist:state.data.categories,

  list: state.data.pannier,
});
const mapDispatchToProps ={
  
// fetchCategorie:fetchCategorie

onAddpannier,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(panier);
