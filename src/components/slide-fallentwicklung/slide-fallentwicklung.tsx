import * as React from "react";
import FallentwicklungDeutschland from "../fallentwicklung-deutschland/fallentwicklungDeutschland";
import "./slide-fallentwicklung.sass";

export interface ISlideFallentwicklungProps {
  onClickNavigation: () => void;
}

export default class SlideFallentwicklung extends React.Component<ISlideFallentwicklungProps> {
  public render() {
    return (
      <div className="slide-fallentwicklung-wrapper">
        <div className="title font-l">Was sagen die offiziellen Zahlen?</div>
        <div className="content font-m">
          <div className="visualizing-wrapper">
            <div className="fallentwicklung-wrapper">
              <FallentwicklungDeutschland></FallentwicklungDeutschland>
            </div>
            <a
              href="https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/PKS2020/pks2020_node.html"
              className="font-s"
            >
              Quelle: Polizeiliche Kriminalstatistik 2020
            </a>
          </div>
          <div className="text-wrapper">
            Hier sehen Sie die absolute Anzahl der jährlich bei der Polizei
            angezeigten Straftaten. Während zwar zwischenzeitlich die Fallzahlen
            steigen, ist insgesamt eine deutliche Reduktion erkennbar.
            <br></br>
            Bitte beachten Sie, dass diese Zahl lediglich gemeldete Fälle
            beinhaltet. Ein beachtlicher Anteil an Straftaten fällt unter die
            Dunkelziffer.
            <br></br>
            Da die Kriminalstatistik erst seit 1993 alle 16 Bundesländer
            beinhaltet, stellen wir nur die Daten seit 1993 dar.
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
