import React, { Component } from "react";

import axios from "axios";
// import Switch from 'react-input-switch';
import InputMask from "react-input-mask";
import "./inscription.css";
import Matiere from "./matiere";
import Headermatiere from "./headermatiere";

class Inscriptionenzo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      dateNaissance: 0,
      prixcalcul : 0,
      prenom: "",
      niveauscolaire: "",
      genre: "",
      enzo: true,
      farid: false,
      admin :'Enzo',
      lyndo: false,
      FormulePresentielMath : '',
      formatGroupe : true
    };
  }
  changePrenon = (e) => {
    this.setState({
      prenom: e.target.value,
    });
  };

  changeGenre = (e) => {
    this.setState({
      genre: e.target.value,
    });
  };
  changeDateNaissance = (e) => {
    this.setState({
      dateNaissance: e.target.value,
    });
  };
  changeNiveauScolaire = (e) => {
    this.setState({
      niveauscolaire: e.target.value,
    });
  };

  changeName = (e) => {
    this.setState({
      nom: e.target.value,
    });
    console.log(this.state.formatGroupe);
  };
  handleClick = (e) => {
    const ID = e.target.id;
    if (ID == "Enzo") {
      this.setState({
        enzo: true,
        farid: false,
        lyndo: false,
        admin : ID

      });
    } else if (ID == "Farid") {
      this.setState({
        enzo: false,
        farid: true,
        lyndo: false,
        admin : ID
      });
    } else {
      this.setState({
        enzo: false,
        farid: false,
        lyndo: true,
        admin : ID

      });
    }
  };

  AddNewInscri = () => {
   
    axios
      .post("http://localhost:5000/newinscription", {
        name: this.state.nom,
        dateNaissance: this.state.dateNaissance,
        niveauscolaire: this.state.niveauscolaire,
        genre: this.state.genre,
        prenom: this.state.prenom,
        
     
        prixcalcul: this.state.prixcalcul,
       
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  changePrixCalcul = (e) => {
    this.setState({
      prixcalcul: e.target.value,
    });
  }
  changeFormat  = (e) => {
    this.setState({
      formatGroupe: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.AddNewInscri}>
          <div style={{ "border-bottom": "2px solid black" }}>
            <div className="col-md-6">
              <span
                id="Enzo"
                className={this.state.enzo ? "buttonTrue" : "buttonFalse"}
                onClick={this.handleClick}
              >
                Enzo (E-16-009)
              </span>
              <span
                id="Farid"
                className={this.state.farid ? "buttonTrue" : "buttonFalse"}
                onClick={this.handleClick}
              >
                Farid (E-18-037)
              </span>
              <span
                id="Lyndo"
                className={this.state.lyndo ? "buttonTrue" : "buttonFalse"}
                onClick={this.handleClick}
              >
                Lyndo (E-20-083)
              </span>
            </div>
          </div>

          <div className="inscriptionenzo">
            <div className="col-md-4">
              <label for="inputPassword">Prenom </label>
              <input
                type="text"
                id="file"
                onChange={this.changePrenon}
                pattern="[A-Za-z]{3,}"
                required
              />
            </div>
            <div className="col-md-4">
              <label for="inputPassword">date Naissance </label>
              <InputMask
                {...this.props}
                mask="99/99/9999"
                placeholder="jj/mm/aaaa"
                onChange={this.changeDateNaissance}
              />
            </div>
            <div className="col-md-4">
              <label for="inputPassword">Niveau scolaire </label>
              <select
                class="mdb-select md-form"
                onChange={this.changeNiveauScolaire}
              >
                <option value="primaire" selected>
                  primaire
                </option>
                <option value="secondaire">secondaire</option>
                <option value="terminal">terminal</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputPassword">Nom </label>
              <input
                type="text"
                id="file"
                onChange={this.changeName}
                pattern="[A-Za-z]{3,}"
                required
              />
            </div>
            <div className="col-md-4">
              <label for="inputPassword">genre </label>
              <select class="mdb-select md-form" onChange={this.changeGenre}>
                <option value="masculin" selected>
                  masculin
                </option>
                <option value="feminin">feminin</option>
              </select>
            </div>
          </div>
          <div className="matieres col-md-10">
            <Headermatiere />
            <Matiere changeFormat={this.changeFormat} className="matiere-choisi" lang="Math" />
            <Matiere className="matiere-choisi" lang="Physique" />
            <Matiere className="matiere-choisi" lang="Français" />
            <Matiere className="matiere-choisi" lang="Anglais" />
          </div>
          <div className="col-md-6">
    <label for="inputPassword" className="col-sm-6 col-form-label">cout calculé pour {this.state.admin}</label>
    
    <input type = "text" id = "file" onChange = {this.changePrixCalcul} pattern = "[0-9]{3,}" required / >
    
  </div>

          <button type="submit" class="btn btn-primary btn-lg">
            {" "}
            <i class="fa fa-check" aria-hidden="true"></i>Je dèsinscris {this.state.admin}
            
          </button>
          <button type="submit" class="btn btn-primary btn-lg">
            {" "}
            <i class="fa fa-check" aria-hidden="true" ></i>J'inscris {this.state.admin}
          </button>
        </form>
      </div>
    );
  }
}

export default Inscriptionenzo;
