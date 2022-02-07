import * as React from "react";
import "./slide-bemerkungen.sass";

export interface ISlideBemerkungenProps {
  onClickNavigation: () => void;
}

export default class SlideBemerkungen extends React.Component<ISlideBemerkungenProps> {
  public render() {
    return (
      <div className="layout-wrapper">
        <div></div>
        <div className="bemerkung-wrapper">
          <div className="content-wrapper">
            <div className="title font-l">
              Zur Konrad-Adenauer-Stiftung:
            </div>
            <div className="content font-m">
              Es ist erwähnenswert, dass die Umfrageteilnehmer direkt mit dem
              Thema der Kriminalität konfrontiert wurden, wodurch das
              tatsächliche Empfinden von Kriminalität als Problem nicht immer
              richtig ermittelt werden kann. In anderen Umfragen werden
              Teilnehmer nach den größten aktuellen Problemen in Deutschland
              befragt, wobei Kriminalität lediglich einstellige Prozentwerte
              erzielt. In den Augen der Bevölkerung gibt es aktuell drängendere
              Probleme als die Kriminalität.
              <br></br>
              Die Konrad-Adenauer-Stiftung ist eine seit 1955 bestehende
              parteinahe Stiftung der CDU. Sie wird überwiegend durch Mittel des
              Bundes und der Länder finanziert.
              <br></br>
              Das Innenminesterium wurde zum Zeitpunkt der Umfrage durch die CDU
              gestellt.
            </div>
          </div>
          <div className="content-wrapper">
            <div className="title font-l">
              Zur Polizeilichen Kriminalstatistik:
            </div>
            <div className="content font-m">
              Die deutsche Polizeiliche Kriminalstatistik wird seit 1953
              jährlich vom Bundeskriminalamt veröffentlicht und ist die
              bekannteste und am häufigsten zitierte Kriminalstatistik. Sie
              enthält Daten über die bei der Polizei angezeigten Straftaten,
              trifft aber keine Aussage über sonstige Fälle (Dunkelziffer).
              Daher ist die Aussagekraft über die Veränderung der Kriminalität
              begrenzt. Außerdem sind die Fallzahlen von vielen weiteren
              Faktoren abhängig, wie dem Anzeigeverhalten der Bevölkerung, der
              polizeilichen Kontrolldichte, Änderungen im Strafrecht und der
              Bevölkerungsentwicklung.
            </div>
          </div>
        </div>
        <button className="font-m" onClick={this.props.onClickNavigation}>
          Zur nächsten Seite
        </button>
      </div>
    );
  }
}
