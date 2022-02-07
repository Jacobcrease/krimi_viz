import * as React from "react";
import Plot from "react-plotly.js";

export interface IUmfrageKriminalitaetZunahmeProps {}

export default class UmfrageKriminalitaetZunahme extends React.Component<IUmfrageKriminalitaetZunahmeProps> {
  public render() {
    var ys = [26, 36, 30, 6, 0];
    var xs = [
      "stark<br>zugenommen",
      "etwas<br>zugenommen",
      "ist etwa gleich<br>geblieben",
      "hat etwas<br>abgenommen",
      "stark<br>abgenommen",
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
          title:
            "Die Kriminalität in Deutschland hat in den letzten 5 Jahren..",
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
