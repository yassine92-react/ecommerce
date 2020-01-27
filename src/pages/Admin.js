
import React, { useEffect, useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Produit from './produit'

import ReactDOM from 'react-dom';
import Categories from './CategorieManger'
import 'antd/dist/antd.css';
import { Provider, connect } from "react-redux"; 
// import './index.css';
import * as Categorie from '../shared/Categorie/actions'
import  {fetchCategorie} from '../shared/Categorie/actions'
import {initState} from '../shared/service/service'

import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class Admin extends React.Component {
  // Admin =({
  
  //   fetchCategorie,
  
  // }) =>{
  //     useEffect(()=>{
  //       fetchCategorie()
      
  // },[fetchCategorie])}
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
 
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" >
            <Link to="/">

              <Icon type="user" />
              <span>Ajouter Categorie</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/produit">

            <Icon type="user" />
            <span>Ajouter Produit</span>
            </Link>
            </Menu.Item>
            {/* <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {/* {console.log('i',initState.listCategorie)} */}
            <Switch>
              <Route exact path="/" component={Categories} />
              <Route path="/produit" component={Produit} /> 
              
            </Switch>
            {/* <Categories /> */}
            </Content>
        </Layout>
      </Layout>
    );
  }
}
const mapStateToProps = state => ({
  list: state.listCategorie
});
const mapDispatchToProps ={
  
fetchCategorie:fetchCategorie
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
