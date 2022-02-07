import * as React from "react";
import UmfrageKriminalitaetProblem from "../umfrage-kriminalitaet-problem/umfrage-kriminalitaet-problem";
import UmfrageKriminalitaetZunahme from "../umfrage-kriminalitaet-zunahme/umfrage-kriminalitaet-zunahme";
import "./slide-umfragen.sass";

export interface ISlideUmfrageProps {
  onClickNavigation: () => void;
}

export default class SlideUmfrage extends React.Component<ISlideUmfrageProps> {
  public render() {
    return (
      <div className="slide-umfragen-wrapper">
        <div className="title font-l">Wie sehen Andere das?</div>
        <div className="content font-m">
          <div className="visualizing-wrapper">
            <div className="umfragen-wrapper">
              <UmfrageKriminalitaetProblem></UmfrageKriminalitaetProblem>
            </div>
            <div className="umfragen-wrapper">
              <UmfrageKriminalitaetZunahme></UmfrageKriminalitaetZunahme>
            </div>
            <a
              href="https://www.kas.de/de/monitor/detail/-/content/wenn-es-nacht-wird-in-deutschland"
              className="font-s"
            >
              Quelle: Meinungsumfrage der Konrad-Adenauer-Stiftung, Oktober 2021
            </a>
          </div>
          <div className="text-wrapper">
            Mehr als die Hälfte der Deutschen empfindet Kriminalität als ein
            großes oder sehr großes Problem.
            <br></br>
            Die Meisten gehen davon aus, dass die Kriminalität in Deutschland in
            den letzten Jahren zugenommen hat oder in etwa gleich geblieben ist.
            <br></br>
            Die Daten der Polizeilichen Kriminalstatistik deuten auf das
            Gegenteil: Im Vergleich zu 1993 gab es 2020 etwa 23 % weniger
            gemeldete Straftaten. Die Umfrageergebnisse stammen aus einer Studie
            der Konrad-Adenauer-Stiftung (KAS) von Oktober 2021. Zwischen
            Oktober und Dezember 2020 wurden etwa 3.000 zufällig ausgewählte
            Personen befragt. Die Ergebnisse seien laut KAS repräsentativ für
            die wahlberechtigte, deutschsprachige Wohnbevölkerung.
          </div>
        </div>
        <div className="footer">
          <button className="font-m" onClick={this.props.onClickNavigation}>
            Zur nächsten Seite
          </button>
        </div>
      </div>
    );
  }
}
