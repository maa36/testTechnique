import React, { Component } from "react";

import "./home.css";
import axios from "axios";
// import Switch from 'react-input-switch';
import InputMask from "react-input-mask";

class Administration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      RueNumber: 0,
      prenom: "",
      RueName: "",
      codePostal: "",
      fixe: 0,
      phone: 0,
      codeFamilly: "",
      checkedLegal: false,
      checkedPedogogique: false,
      PrixTotal: "",
      PrixApplique: 0,
    };
  }
  changePrenon = (e) => {
    this.setState({
      prenom: e.target.value,
    });
  };
  changeCodePostal = (e) => {
    this.setState({
      codePostal: e.target.value,
    });
  };
  changeCIN = (e) => {
    this.setState({
      cin: e.target.value,
    });
  };
  changeNameRue = (e) => {
    this.setState({
      RueName: e.target.value,
    });
  };
  changeRueNumber = (e) => {
    this.setState({
      RueNumber: e.target.value,
    });
  };
  changePrixTotal = (e) => {
    this.setState({
      PrixTotal: e.target.value,
    });
  };
  changePrixApplique = (e) => {
    this.setState({
      PrixApplique: e.target.value,
    });
  };
  changeCodeFamilly = (e) => {
    this.setState({
      codeFamilly: e.target.value,
    });
  };
  handlecheckedPedogogique = (event) => {
    this.setState({ checkedPedogogique: event.target.checked });
    console.log(event.target.checked);
  };
  handlecheckedLegal = (event) => {
    this.setState({ checkedLegal: event.target.checked });
    console.log(event.target.checked);
  };
  changeName = (e) => {
    this.setState({
      nom: e.target.value,
    });
    console.log(this.state.valuePedogogique);
  };
  changePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
    console.log(this.state.value);
  };
  changeFixe = (e) => {
    this.setState({
      fixe: e.target.value,
    });
    console.log(this.state.fixe);
  };
  AddData = () => {
    
    axios
      .post("http://localhost:5000/validationadministration", {
        name: this.state.nom,
        prenom: this.state.prenom,
        RueNumber: this.state.RueNumber,
        RueName: this.state.RueName,
        phone: this.state.phone,
        codePostal: this.state.codePostal,
        adresse: this.state.adresse,
        fixe: this.state.fixe,
        codeFamilly: this.state.codeFamilly,
        "reference Legal": this.state.checkedLegal,
        "reference Pedogogique": this.state.checkedPedogogique,
        PrixTotal: this.state.PrixTotal,
        PrixApplique: this.state.PrixApplique,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="formSignIn">
        <form onSubmit={this.AddData}>
          <div className="form-group row">
            <label for="inputPassword" class="col-sm-4 col-form-label">
              code famile
            </label>
            <div className="col-sm-8">
              <InputMask
                {...this.props}
                mask="a-99-9999"
                placeholder="F-20-2014"
                onChange={this.changeCodeFamilly}
              />
            </div>
          </div>
          <div className="bloc-familly">
            <div className="form-group row">
              <label for="inputPassword" className="col-sm-4 col-form-label">
                Nom
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  id="file"
                  onChange={this.changeName}
                  pattern="[A-Za-z]{3,}"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword" className="col-sm-4 col-form-label">
                Prenom{" "}
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  id="file"
                  onChange={this.changePrenon}
                  pattern="[A-Za-z]{3,}"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword" className="col-sm-4 col-form-label">
                Mobile <i className="fas fa-mobile"></i>
              </label>
              <div className="col-sm-8">
                <InputMask
                  {...this.props}
                  mask="99 999 999"
                  placeholder="20 120 120"
                  onChange={this.changePhone}
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword" className="col-sm-4 col-form-label">
                Fixe <i className="fas fa-phone"></i>
              </label>
              <div className="col-sm-8">
                <InputMask
                  {...this.props}
                  mask="99 999 999"
                  placeholder="75 705 705"
                  onChange={this.changeFixe}
                />
              </div>
            </div>
            <div className="bloc-adresse">
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-6 col-form-label">
                  Numéro de rue
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    id="file"
                    onChange={this.changeRueNumber}
                    pattern="[0-9]"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-6 col-form-label">
                  Nom de Rue{" "}
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    id="file"
                    onChange={this.changeNameRue}
                    pattern="[0-9]{3,}"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-4 col-form-label">
                  Code Postal{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    id="file"
                    onChange={this.changeCodePostal}
                    pattern="[A-Za-z]{3,}"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" className="col-sm-8 col-form-label">
                {" "}
                Referent Péogogique
              </label>

              <div className="col-sm-4">
                <input
                  type="checkbox"
                  onChange={this.handlecheckedPedogogique}
                  data-toggle="toggle"
                  data-size="lg"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" className="col-sm-8 col-form-label">
                {" "}
                Referent Legal{" "}
              </label>

              <div className="col-sm-4">
                <input
                  type="checkbox"
                  onChange={this.handlecheckedLegal}
                  data-toggle="toggle"
                  data-size="lg"
                />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword" className="col-sm-6 col-form-label">
              Prix total calculé
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                id="file"
                onChange={this.changePrixTotal}
                pattern="[0-9]{3,}"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword" className="col-sm-6 col-form-label">
              Prix appliqué
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                id="file"
                onChange={this.changePrixApplique}
                pattern="[0-9]{3,}"
                required
              />
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-lg">
            {" "}
            <i class="fa fa-check" aria-hidden="true"></i>Validation
            administration
          </button>
        </form>
      </div>
    );
  }
}

export default Administration;
