import * as React from "react";
import "./slide-impressum.sass";

export interface ISlideImpressumProps {}

export default class SlideImpressum extends React.Component<ISlideImpressumProps> {
  public render() {
    return (
      <div className="impressum-wrapper">
        <div className="font-s block">
          <div className="font-l title">
            Legal Notice according to § 5 TMG (Telemediengesetz):
          </div>
          <br></br>
          Claudia Müller-Birn<br></br>
          Forschungsgruppe Human-Centered Computing<br></br>
          Freie Universität Berlin<br></br>
          Königin-Luise-Str. 24/26<br></br>
          14195 Berlin<br></br>
          <br></br>
          Contact: clmb |at| inf |dot| fu-berlin |dot| de<br></br>
          <br></br>
          <b>Privacy Statement</b><br></br>
          We do not collect any data on this website.<br></br>
          <br></br>
          <b>Liability for Links</b><br></br>
          Our site contains links to third-party Web sites. We have no influence
          whatsoever on the information on these Web sites and accept no
          guaranty for its correctness. The content of such third-party sites is
          the responsibility of the respective owners and or providers. At the
          time third-party Web sites were linked to ours, we found NO GROUNDS
          WHATSOEVER of any likely contravention of the law. We shall promptly
          delete a link upon becoming aware that it violates the law.<br></br>
          <br></br>
          <b>Attribution</b><br></br>
          <a
            href="https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/PKS2020/pks2020_node.html"
            className="font-s"
          >
            Polizeiliche Kriminalstatistik 2020
          </a>
          <br></br>
          <a
            href="https://www.kas.de/de/monitor/detail/-/content/wenn-es-nacht-wird-in-deutschland"
            className="font-s"
          >
            Meinungsumfrage der Konrad-Adenauer-Stiftung
          </a>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
