import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Steps } from 'antd';
import '../admin.css'
const { Step } = Steps;

function steps (){
return (
    <div>
    <div>
<p className="title-steps">La solution digitale Feezless</p>
<p className="title-two-steps">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />
 labore et dolore magna aliqua ut enim ad minim veniam.</p>
</div>
<div className="stepsbloc">
    <Steps   labelPlacement="vertical">
   
    <Step  title= "Estimation du bien" 
    description  = "Recevez un expert pour l'estimation
                 de votre bien et soyez informés
                 digitalement  des documents de cession" />



    <Step title="Filtrage des acheteurs" description="
                    On présente votre bien qu'à
                    des acheteurs filtrés" />
    <Step title="Gestion des RDV
        en ligne" description="
        Réceptionnez et gérez vos RDV
        de visite passés et à venir" />

    <Step title="Gestion de proposition d'achat" description="
        Gérez vos offres d'achat
        en ligne" />
    <Step title="Transparence" description="
        Recevez les retours de votre
        bien dès sa publication" />

    </Steps>
    </div>
  </div>
);}
export default steps