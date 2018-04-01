import React, { Component } from 'react';
import AnalogClock, { Themes } from 'react-analog-clock';
import BoardColumn from './BoardColumn';
import BoardButton from './BoardButton';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <div className="container is-fluid">
          <div className="is-clearfix">
            <div className="title-container center is-pulled-left">
              <h1 className="title is-1">CD Dashboard</h1>
            </div>

            <div className="date-container">
              <div className="is-pulled-right">
                <AnalogClock theme={Themes.light} width={100} />
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-8">
          <BoardColumn title="Filtertestgeräte">

          </BoardColumn>

          <BoardColumn title="Infos">
            <BoardButton title="Schichtplan CD" href="L:\Departements\Pharma\Compounding Department\CD_Allgemein\151 Mitarbeiterinfo\Schichtplan 2018 Compounding.xlsx" />
            <BoardButton title="Produktionsplan" href="L:\Company\Pharma Planung LPF_PIN_CD\Parenterals Planning_LPF_PIN_CD 2018.xlsx" />
            <BoardButton title="Staff Meeting" href="L:\Departements\Pharma\Compounding Department\CD_Allgemein\151 Mitarbeiterinfo\Staff Meetings\CD Staff Meetings\Staff Meeting.one" />
            <BoardButton title="Netzplan LPF" href="https://prdbispot.jnj.com/spotfire/wp/render/KGOPjF0KXbsD2QPRuf/analysis?file=PHARMA/JSC/OIBI/Manufacturing%20Dashboard/Reports/Manufacturing%20Dashboard&waid=TnIVIUXc_UmAWOFpctoCw-170504a23aaLPC&wavid=0" />
          </BoardColumn>

          <BoardColumn title="Vorlagen">
            <BoardButton title="QKM/QKB" href="https://docspaceportal.jnj.com/docspaceportal/servlet/OpenPDF?rfrom=null&docname=DS-FRM-18087" />
            <BoardButton title="Statuskarten" href="https://docspaceportal.jnj.com/docspaceportal/servlet/OpenPDF?rfrom=null&docname=DS-FRM-18189" />
            <BoardButton title="Infoblatt" href="https://docspaceportal.jnj.com/docspaceportal/servlet/OpenPDF?rfrom=null&docname=DS-eFRM-981" />
            <BoardButton title="Waagenkontrollblatt" href="https://docspaceportal.jnj.com/docspaceportal/servlet/OpenPDF?rfrom=null&docname=DS-FRM-18356" />
            <BoardButton title="Schichtbuch Vorlage" href="#" />
            <BoardButton title="Übergabeprotokoll" href="L:\Departements\Pharma\Compounding Department\CD_Allgemein\übergabeprotokoll-Ansatz.pdf" />
          </BoardColumn>

          <BoardColumn title="Sonstiges">
            <BoardButton title="CILAG Telefon Link" href="http://browsejjeds.jnj.com/" />
            <BoardButton title="Cilag WLAN Passwort" href="http://guestpass.jnj.com/" />
            <BoardButton title="Doc Space Link" href="L:\Departements\Pharma\Compounding Department\CD_Allgemein\Dashboard\Doc Space Link.xlsm" />
            <BoardButton title="Abteilungs Web" href="https://jnj.sharepoint.com/sites/PHM-GCSP-JSC/campuses/Schaffhausen/Abteilungswebs/Parenterals%20CD/Seiten/default.aspx" />
            <BoardButton title="Auslagerungs- und Musterliste" href="L:\Departements\Pharma\Compounding Department\CD_Allgemein\614 Planung\2018\Auslagerungs- und Musterliste_CD2018.xlsx" />
            <BoardButton title="Kessel Übersicht" href="#" />
            <BoardButton title="Brutto-Tara Erfassung" href="L:\Departements\Pharma\Compounding Department\CD_Allgemein\Lyo Compounding\INFO_Batchvorbereitung-Comp\Brutto-Tara erfassung" />
          </BoardColumn>
        </div>
      </div>
      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
    );
  }
}

export default App;
