import * as React from "react";
import Plot from "react-plotly.js";
import faelleZeitreihe from "../../data/FaelleZeitreihe.json";
import "../slides.sass";

export interface IFallentwicklungDeutschlandProps {}

export interface Zeitreihe {
  Jahr: number;
  Faelle: number;
  Aufklaerungsquote: number;
}

export default class FallentwicklungDeutschland extends React.Component<IFallentwicklungDeutschlandProps> {
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
          },
        ]}
        layout={{
          title: "Rückgang der jährlichen Fallzahlen seit 1993",
          autosize: true,
          dragmode: false,
          xaxis: {
            title: "Jahr",
            range: [1993, 2020],
            fixedrange: true,
          },
          yaxis: {
            title: "Polizeilich angezeigte Fälle",
            range: [5000000, 7000000],
            fixedrange: true,
          },
          paper_bgcolor: "#FCFCFC",
          plot_bgcolor: "#FCFCFC",
          font: {
            size: 20,
            color: "#000000",
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
