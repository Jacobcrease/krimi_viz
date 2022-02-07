import * as React from "react";
import Plot from "react-plotly.js";

export interface IUmfrageKriminalitaetProblemProps {}

export default class UmfrageKriminalitaetProblem extends React.Component<IUmfrageKriminalitaetProblemProps> {
  public render() {
    var ys = [12, 54, 30, 2];
    var xs = [
      "ein sehr großes<br>Problem",
      "ein großes<br>Problem",
      "ein kleines<br>Problem",
      "kein Problem",
    ];

    return (
      <Plot
        data={[
          {
            y: ys,
            x: xs,
            type: "bar",
            text: ys.map(String),
            textposition: "outside",
            marker: {
              color: "#5472CC",
              line: {
                color: "#344780",
                width: 1.5,
              },
            },
          },
        ]}
        layout={{
          title: "Kriminalität in Deutschland ist..",
          autosize: true,
          yaxis: { title: "Anteil in Prozent", range: [0, 70]},
          paper_bgcolor: "#FCFCFC",
          plot_bgcolor: "#FCFCFC",
          font: {
            size: 20,
            color: "#000000",
          },
        }}
        config={{
          staticPlot: true,
          responsive: true,
          scrollZoom: false,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}
