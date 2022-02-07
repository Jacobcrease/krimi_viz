import * as React from "react";
import Plot from "react-plotly.js";
import faelleZeitreihe from "../../data/FaelleZeitreihe.json";
import "../slides.sass";

export interface IDemoSmallMultipleProps {}

export interface Zeitreihe {
  Jahr: number;
  Faelle: number;
  Aufklaerungsquote: number;
}

export default class DemoSmallMultiple extends React.Component<IDemoSmallMultipleProps> {
  public render() {
    const xAxis: number[] = [];
    const yAxis: number[] = [];
    faelleZeitreihe.items.forEach((el) => {
      if (el.Jahr < 1993) {
        return;
      }
      xAxis.push(el.Jahr);
      yAxis.push(el.Faelle);
    });
    return (
      <Plot
        data={[
          {
            x: xAxis,
            y: yAxis,
            type: "scatter",
            mode: "lines+markers",
            marker: {
              color: "#344780",
              width: 8,
            },
            line: {
              color: "#5472CC",
              width: 4,
            },
            hoverlabel: {
              bgcolor: "#344780",
              font: { size: 20 },
            },
            hovertemplate:
              "<br>Jahr: %{x} </br>" +
              "Fallzahlen: %{y:,}" + // TODO: use dot as thousands seperator
              "<extra></extra>",
            fill: 'tozeroy',
          },
        ]}
        layout={{
          dragmode: false,
          yaxis: {
            zeroline: false,
            range: [4500000, 7000000], // adjust range when comparing crimes
          },
          paper_bgcolor: "#FCFCFC",
          plot_bgcolor: "#FCFCFC",
          font: {
            size: 20,
            color: "#000000",
          },
          margin: {
            b: 32,
            l: 0,
            r: 0,
            t: 16,
            pad: 0,
          },
        }}
        config={{
          displayModeBar: false,
          responsive: true,
          scrollZoom: false,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}
