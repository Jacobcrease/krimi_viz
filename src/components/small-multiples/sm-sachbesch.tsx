import * as React from "react";
import Plot from "react-plotly.js";
import faelleZeitreihe from "../../data/ZR-F-01-T01-Faelle_filtered_json.json";
import "../slides.sass";

export interface ISmSachbeschProps {}

export interface Zeitreihe {
  Jahr: number;
  Faelle: number;
  Aufklaerungsquote: number;
}

export default class SmSachbesch extends React.Component<ISmSachbeschProps> {
  public render() {
    const xAxis: number[] = [];
    const yAxis: number[] = [];
    faelleZeitreihe.items.forEach((el) => {
      if (el.Straftat !== "Sachbeschädigung") {
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
            mode: "lines+markers",  // +markers?
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
              //"<b>Sachbeschädigung</b>" + 
              "<br>Jahr: %{x} </br>" +
              "Fallzahlen: %{y:,}" + // TODO: use dot as thousands seperator
              "<extra></extra>",
            fill: 'tozeroy',
          },
        ]}
        layout={{
          dragmode: false,
          title: {
            text: "Sachbeschädigung",
            y: 0.9,
            yanchor: "middle"
          },
          xaxis: {fixedrange: true},
          yaxis: {
            zeroline: false,
            range: [0, 2000000], // adjust range when comparing crimes
            fixedrange: true,
          },
          paper_bgcolor: "#FCFCFC",
          plot_bgcolor: "#FCFCFC",
          font: {
            size: 20,
            color: "#000000",
          },
          margin: {
            b: 32,
            l: 52,
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
