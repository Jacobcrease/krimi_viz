import * as React from "react";
import SmBetrug from "../small-multiples/sm-betrug";
import SmDiebstahl from "../small-multiples/sm-diebstahl";
import SmGewalt from "../small-multiples/sm-gewalt";
import SmRauschgift from "../small-multiples/sm-rauschgift";
import SmSachbesch from "../small-multiples/sm-sachbesch";
import SmSonstige from "../small-multiples/sm-sonstige";
import "./slide-fallentwicklung-detail.sass";

export interface ISlideUmfragenDetailProps {
  onClickNavigation: () => void;
}

export default class SlideFallentwicklungDetail extends React.Component<ISlideUmfragenDetailProps> {
  public render() {
    return (
      <div className="slide-fallentwicklung-detail-wrapper">
        <div className="title font-l">Wie sehen die Zahlen im Detail aus?</div>
        <div className="content font-m">
          <div className="link-wrapper">
            <div className="visualizing-wrapper">
              <div className="fallentwicklung-detail-wrapper">
                <SmDiebstahl></SmDiebstahl>
              </div>
              <div className="fallentwicklung-detail-wrapper">
                <SmBetrug></SmBetrug>
              </div>
              <div className="fallentwicklung-detail-wrapper">
                <SmRauschgift></SmRauschgift>
              </div>
              <div className="fallentwicklung-detail-wrapper">
                <SmSachbesch></SmSachbesch>
              </div>
              <div className="fallentwicklung-detail-wrapper">
                <SmSonstige></SmSonstige>
              </div>
              <div className="fallentwicklung-detail-wrapper">
                <SmGewalt></SmGewalt>
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
            Jedes Diagramm stellt hier den Verlauf der Fallzahlen einer
            bestimmten Straftat dar. Dabei wird jeweils der Verlauf von 1993 bis
            2020 dargestellt.
            <br></br>
            <br></br>
            Bitte beachten Sie: Um die einzelnen Entwicklungen besser zu
            betonen, gibt es Unterschiede zwischen den Skalen der Graphen.
            <br></br>
            <br></br>
            Bei den meisten Straftaten ist die Fallzahl tatsächlich etwas
            angestiegen. Allerdings ist die Anzahl der gemeldeten Diebstähle um
            fast 60 % gesunken. 1993 machten Diebstähle noch 61 % der gesamten
            Straftaten aus, 2020 sind es nur noch etwa 32 %. Die Reduktion an
            gemeldeten Diebstählen ist die Hauptursache für den
            Kriminalitätsrückgang.
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
