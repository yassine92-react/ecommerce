
import React, { useEffect, useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import { Slider, InputNumber, Row, Col, Checkbox } from 'antd';
import { Card } from 'antd';

import 'antd/dist/antd.css'
import { onSershProduit } from '../../shared/Categorie/actions'

import ReactDOM from 'react-dom';
// import Categories from './CategorieManger'
import Produit from '../produit'

// import 'antd/dist/antd.css';
import { Provider, connect } from "react-redux";
// import './index.css';
// import * as Categorie from '../shared/Categorie/actions'
// import  {fetchCategorie} from '../shared/Categorie/actions'
// import {initState} from '../shared/service/service'

import { Layout, Menu, Icon, Input, Button } from 'antd';

const { Header, Sider, Content } = Layout;
// const { disabled } = this.state;
const { Search } = Input;

class liste_produit extends React.Component {

  state = {
    inputValue: 1,
    collapsed: false,
    disabled: false,
    comparewith:'',
    search: '',
    checkSearch: [],
  };
 
  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

 
// comparewith = (c)=>{
//   console.log("pppppppppp",c) 
//   if (c==='Prix'){
//   }
// }

compare=( a, b )=> {
  console.log("ab",a)
  console.log("ab",b)

  if ( a.prix >= b.prix ){
    return -1;
  }
  if ( a.prix < b.prix ){
    return 1;
  }
  return 0;
}
  onChange = value => {
    // if (isNaN(value)) {
    //   return;
    // }
    this.setState({
      inputValue: value,
    });
    {
      console.log("6565", value)
    }
  };

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }



  handleCompare  = (e) => {
    console.log('e.value: ', e);
    this.setState({
     comparewith: e
     
     
    })
    console.log("comparewith",this.state.comparewith)
  }



  handleCheck = (e) => {
    const index = this.state.checkSearch.indexOf(e.target.value)
    console.log('index: ', index);
    if (index === -1)
      this.setState({
        checkSearch: this.state.checkSearch.concat(e.target.value)
      })
    else {
      this.setState({
        checkSearch: this.state.checkSearch.filter((el, i)=> i!==index)
        // checkSearch: this.state.checkSearch.slice(0, index).concat(this.state.checkSearch.slice(index+1))
      })
    }
  }
  
  render() {
    const { inputValue, checkSearch,trieparprix } = this.state;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="white" mode="white" style={{ height: "450px" }} defaultSelectedKeys={['1']}>

            <div key="2" style={{ paddingtop: '20px', backgroundColor: "#B0B0B0", margintop: '20px', height: "36px" }}>
              <Link to="/panier">

                <Icon type="user" />
                <span style={{ color: "black" }}>Panier</span>
              </Link>
            </div>

            <div className="flesh">
              <div>
                <Row>

                  <Col span={12}>
                    <Slider
                      min={1}
                      max={30}
                      onChange={this.onChange}
                      // onChange={e=>console.log("hhhh",this.onChange.value)}                    

                      value={typeof inputValue === 'number' ? inputValue : 0}
                      onChange={e => this.onChange.handleSearch(e.value)}

                    />
                  </Col>
                  <Col span={4}>
                    <div style={{ marginLeft: 14, paddingleft: '50px' }}>
                      <InputNumber
                        min={1}
                        max={30}
                        value={inputValue}
                        // onChange={this.onChange}
                        onChange={e => this.handleSearch(e.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="checkbox" >
              <div  >
                <div style={{ display: 'block', lineHeight: '10px' }}>
                  <p>Recherche Produit</p>
                  <div>
                    <Checkbox value="firstcategorie" onChange={e => this.handleCheck(e)}>
                      first categorie
                   </Checkbox>
                  </div>
                  <div className="checkboxsec" >
                    <Checkbox value="seccategorie" onChange={e => this.handleCheck(e)}>
                      Second categorie
                   </Checkbox>
                  </div>
                </div>
              </div>
            </div>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />

            <Search style={{
              width: '900px',
              margintop: '15px ',
              paddingleft: '60px'
            }}
              placeholder="input search text"
              onChange={e => this.handleSearch(e)}
              enterButton
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#FFFFFF',
              minHeight: 280,
            }}
          >
   
        <p>Sort by</p>
            <select style={{}} onClick={e=>this.handleCompare(e.target.value)} >
            <option value="choix" >choissisez</option>

              <option value="Prix" 
          
              >Prix</option>
              <option value="categorie">Categorie</option>

            </select>
            <div className="card" style={{ background: '#ECECEC', padding: '30px' }}>
              {/* {console.log('hllo', this.props.list)} */}
              {this.props.list
                .filter(el => el.nom.includes(this.state.search) || el.prix.includes(this.state.search))
                // .filter(el=>checkSearch.includes(el.categorie))
                .filter(el=>checkSearch.length ? checkSearch.includes(el.categorie) : el)
                .sort((a,b) => ((this.state.comparewith==='Prix' ?  (a.prix - b.prix) : "")))
                .sort((a,b) => ((this.state.comparewith==='categorie' ?  ((a.categorie > b.categorie)?1 : -1):"")))

                // .sort ((el=>this.state.comparewith==='Prix' ?  (a.prix - b.prix)) : ""))

                  // .sort ((a,b)=>this.compare(a.prix ,b.prix))
                // .sort ((e=>this.comparewith(e)==='Prix') ? (a,b) => (a.prix - b.prix) : "")
                .map((el) => (
                  <Card title={el.nom} bordered={false}
                    style={{ width: 300 }}>
                    <p>Nom :{el.nom}</p>
                    <p>categorie :{el.categorie}</p>
                    <p>prix :{el.prix}</p>
                    <p>Description :{el.desc}</p>


                    <Link to={`/Detais/${el.nom}`}>
                      <Button type="primary">
                        Detais
                  </Button>
                    </Link>
                  </Card>
                ))}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
const mapStateToProps = state => ({
  selectlist: state.data.categories,

  list: state.data.produit,
}
);
const mapDispatchToProps = {

  // fetchCategorie:fetchCategorie
  onSershProduit,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(liste_produit);
