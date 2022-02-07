import * as React from "react";
import "./slide-impressum.sass";

export interface ISlideImpressumProps {}

export default class SlideImpressum extends React.Component<ISlideImpressumProps> {
  public render() {
    return (
      <div className="impressum-wrapper">
        <div></div>
        <div className="font-m block">
          <div className="font-l title">Impressum:</div>
          Die Visualisierung „Wahrnehmung der Kriminalität in Deutschland”
          entstand im Rahmen eines Projekts des Moduls „Data Visualization” im
          Wintersemester 2021/22 an der Freien Universität Berlin.
          <br></br><br></br>
          Jakob Knitter und Jonas Schäfer<br></br>
          jakok07@fu-berlin.de, jonas.schaefer@fu-berlin.de
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
