import * as React from "react";
import "./slide-fazit.sass";

export interface ISlideFazitProps {
  onClickNavigation: () => void;
}

export default class SlideFazit extends React.Component<ISlideFazitProps> {
  public render() {
    return (
      <div className="fazit-wrapper">
        <div></div>
        <div className="font-m block">
          <div className="font-l title">Fazit:</div>
          Die Kriminalität in Deutschland erfuhr in den letzten 30 Jahren einen
          Rückgang von etwa 23 %. Insbesondere hat die Zahl der gemeldeten Fälle
          seit 2016 um etwa 16,5 % abgenommen. Dennoch ist die gefühlte
          Unsicherheit bezüglich Kriminalität in der deutschen Bevölkerung hoch.
          Laut dem{" "}
          <a href="https://www.global-monitoring.com/corporate/risikokarte/">
            A3M Global Monitoring
          </a>{" "}
          ist Deutschland eines der sichersten Länder der Welt. Mehrere
          unabhängige Studien und Statistiken belegen, dass der gefühlte
          Kriminalitätsanstieg ungerechtfertigt ist.
          <br></br>
          <br></br>
          Weitere Informationen zum Thema finden Sie unter{" "}
          <a href="https://netzpolitik.org/2021/kriminalitaetswahrnehmung-vollkommen-losgeloest-von-der-realitaet/">
            netzpolitik.org
          </a>.
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
