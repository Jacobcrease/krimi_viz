import * as React from "react";
import SmBetrug2 from "../small-multiples/sm-betrug2";
import SmDiebstahl2 from "../small-multiples/sm-diebstahl2";
import SmGewalt2 from "../small-multiples/sm-gewalt2";
import SmRauschgift2 from "../small-multiples/sm-rauschgift2";
import SmSachbesch2 from "../small-multiples/sm-sachbesch2";
import SmSonstige2 from "../small-multiples/sm-sonstige2";
import "./slide-fallentwicklung-detail-2.sass";

export interface ISlideUmfragenDetailProps {
  onClickNavigation: () => void;
}

export default class SlideFallentwicklungDetail2 extends React.Component<ISlideUmfragenDetailProps> {
  public render() {
    return (
      <div className="slide-fallentwicklung-detail-wrapper">
        <div className="title font-l">Wie sehen die Zahlen im Detail aus?</div>
        <div className="content font-m">
          <div className="link-wrapper">
            <div className="visualizing-wrapper">
              <div className="fallentwicklung-detail-wrapper">
                <SmDiebstahl2></SmDiebstahl2>
              </div>
              <div className="fallentwicklung-detail-wrapper">
                <SmBetrug2></SmBetrug2>
              </div>
              <div className="fallentwicklung-detail-wrapper">
                <SmRauschgift2></SmRauschgift2>
              </div>
              <div className="fallentwicklung-detail-wrapper">
                <SmSachbesch2></SmSachbesch2>
              </div>
              <div className="fallentwicklung-detail-wrapper">
                <SmSonstige2></SmSonstige2>
              </div>
              <div className="fallentwicklung-detail-wrapper">
                <SmGewalt2></SmGewalt2>
              </div>
            </div>
            <a
              href="https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/PKS2020/pks2020_node.html"
              className="font-s"
            >
              Quelle: Polizeiliche Kriminalstatistik 2020
            </a>
            <a
              href="https://www.bka.de/SharedDocs/Downloads/DE/Publikationen/PolizeilicheKriminalstatistik/2020/Interpretation/02_Rili/Anlage-3-Definitionskatalog.pdf?__blob=publicationFile&v=5"
              className="font-s"
            >
              Intepretationshilfe: Definitionskatalog 2020
            </a>
          </div>
          <div className="text-wrapper">
            Hier werden noch einmal die Straftaten aus der vorherigen
            Visualisierung miteinander verglichen, allerdings mit Fokus auf die
            absoluten Zahlen. Das heißt, die Daten sind über die gleiche Achse
            skaliert. Dadurch wird klar, dass Diebstahlkriminalität den mit
            Abstand größten Teil der gemeldeten Kriminalität ausmacht. Die
            Entwicklung ist dennoch stark rückläufig.
            <br></br>
            <br></br>
            Anhand der Visualisierung wird deutlich, dass Trends bei Delikten
            mit geringeren Fallzahlen, wie beispielsweise der
            Rauschgiftkriminalität, den allgemeinen Kriminalitätsrückgang kaum
            beeinflussen.
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
