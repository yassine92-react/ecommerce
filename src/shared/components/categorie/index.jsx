import { Modal, Input } from 'antd'
import React from 'react'
import {connect} from 'react-redux'
import { DatePicker } from 'antd';
import  {fetchProduit,addProduit,fetchCategorie,deleteProduit,Updateproduit} from '../../Categorie/actions'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}
class ModalProduits extends React.Component {
  state = { visible: false, produit: null }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  //   componentDidMount() {
  //     this.setState({ employe: this.props.employe })
  //     console.log('data didmount', this.props.employe)
  //   }

  componentWillReceiveProps(newProps) {
    this.setState({ produit: newProps.produit })
  }

  handleOk = e => {
    // console.log("test",this.state.employe.id)

    this.props.setshow(false)
    this.props.Updateproduit(this.state.produit)
    this.setState({
      visible: false,

    })
    this.props.onSubmit(this.state.produit)
      // id: this.props.id;
      // value: this.state.employe;
      
    
    // console.log('2',this.state.employe.id)

  }
handleCancel = e => {
    console.log(e)
    this.props.setshow(false)

    this.setState({
      visible: false,
    })
  }

  render() {
    // console.log(this.props.employe.find(el=>el.id==this.props.id))
    return (
      <Modal
        title="Update produit"
        visible={this.props.data}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Input
        //  placeholder={this.props.produit_modifier.nom}

          desc="nom"
          onChange={e =>
            this.setState({
              produit: { ...this.props.produit.find(el=>el.nom==this.props.produit_modifier.nom), nom: e.target.value },
            })
            
          }
          
          value={ this.props.produit_modifier.nom  }
          
        />

        <Input
          placeholder={this.props.produit.categorie}
          desc="categorie"
          onChange={e =>
            this.setState({
              produit: { ...this.props.produit.find(el=>el.categorie==this.props.categorie), categorie: e.target.value },
            })
            
          }
          value={this.props.produit.categorie}
          
        />

    
          {/* <Input
          placeholder={this.props.nom.prix}
          desc="prix"
          onChange={e =>
            this.setState({
              produit: { ...this.props.produit.find(el=>el.prix==this.props.prix), prix: e.target.value },
            })
            
          }
          value={this.state.produit && this.state.produit.prix}
          
        />
       <Input
          placeholder={this.props.nom.desc}
          desc="description"
          onChange={e =>
            this.setState({
              produit: { ...this.props.produit.find(el=>el.desc==this.props.desc), desc: e.target.value },
            })
            
          }
          value={this.state.produit && this.state.produit.desc}
          
        /> */}
       

      </Modal>
    )
  }
}

const mapStatetoProps =(state) =>{
return {
    produit:state.data.produit
}

}
export default connect(mapStatetoProps,{Updateproduit})(ModalProduits)
