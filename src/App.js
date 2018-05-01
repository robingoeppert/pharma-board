import React, { Component } from 'react';
import AnalogClock, { Themes } from 'react-analog-clock';
import BoardColumn from './BoardColumn';
import BoardButton from './BoardButton';
import Countdown from './Countdown';

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
            <Countdown title="A9295" duration={172800000} interval={1000} />
            <Countdown title="A8500" duration={172800000} interval={1000} />
          </BoardColumn>

          <BoardColumn title="Infos">
            <BoardButton title="Schichtplan CD" href="file:///L:/Departements/Pharma/Compounding%20Department/CD_Allgemein/151%20Mitarbeiterinfo/Schichtplan%202018%20Compounding.xlsx" />
            <BoardButton title="Produktionsplan" href="file:///L:/Company/Pharma%20Planung%20LPF_PIN_CD/Parenterals%20Planning_LPF_PIN_CD%202018.xlsx" />
            <BoardButton title="Staff Meeting" href="file:///L:/Departements/Pharma/Compounding%20Department/CD_Allgemein/151%20Mitarbeiterinfo/Staff%20Meetings/CD%20Staff%20Meetings/Staff%20Meeting.one" />
            <BoardButton title="Netzplan LPF" href="https://prdbispot.jnj.com/spotfire/wp/render/KGOPjF0KXbsD2QPRuf/analysis?file=PHARMA/JSC/OIBI/Manufacturing%20Dashboard/Reports/Manufacturing%20Dashboard&waid=TnIVIUXc_UmAWOFpctoCw-170504a23aaLPC&wavid=0" />
          </BoardColumn>

          <BoardColumn title="Vorlagen">
            <BoardButton title="QKM/QKB" href="https://docspaceportal.jnj.com/docspaceportal/servlet/OpenPDF?rfrom=null&docname=DS-FRM-18087" />
            <BoardButton title="Statuskarten" href="https://docspaceportal.jnj.com/docspaceportal/servlet/OpenPDF?rfrom=null&docname=DS-FRM-18189" />
            <BoardButton title="Infoblatt" href="https://docspaceportal.jnj.com/docspaceportal/servlet/OpenPDF?rfrom=null&docname=DS-eFRM-981" />
            <BoardButton title="Waagenkontrollblatt" href="https://docspaceportal.jnj.com/docspaceportal/servlet/OpenPDF?rfrom=null&docname=DS-FRM-18356" />
            <BoardButton title="Schichtbuch Vorlage" href="#" />
            <BoardButton title="Übergabeprotokoll" href="file:///L:/Departements/Pharma/Compounding%20Department/CD_Allgemein/%C3%BCbergabeprotokoll-Ansatz.pdf" />
          </BoardColumn>

          <BoardColumn title="Sonstiges">
            <BoardButton title="CILAG Telefon Link" href="http://browsejjeds.jnj.com/" />
            <BoardButton title="Cilag WLAN Passwort" href="http://guestpass.jnj.com/" />
            <BoardButton title="Doc Space Link" href="file:///L:/Departements/Pharma/Compounding%20Department/CD_Allgemein/Dashboard/Doc%20Space%20Link.xlsm" />
            <BoardButton title="Abteilungs Web" href="https://jnj.sharepoint.com/sites/PHM-GCSP-JSC/campuses/Schaffhausen/Abteilungswebs/Parenterals%20CD/Seiten/default.aspx" />
            <BoardButton title="Auslagerungs- &amp; Musterliste" href="file:///L:/Departements/Pharma/Compounding%20Department/CD_Allgemein/614%20Planung/2018/Auslagerungs-%20und%20Musterliste_CD2018.xlsx" />
            <BoardButton title="Kessel Übersicht" href="#" />
            <BoardButton title="Brutto-Tara Erfassung" href="file:///L:/Departements/Pharma/Compounding%20Department/CD_Allgemein/Lyo%20Compounding/INFO_Batchvorbereitung-Comp/Brutto-Tara%20erfassung" />
          </BoardColumn>
        </div>
      </div>
    );
  }
}

export default App;
