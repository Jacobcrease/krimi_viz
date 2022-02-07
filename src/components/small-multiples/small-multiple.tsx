import * as React from "react";
import Plot from "react-plotly.js";

export interface ISmallMultipleProps {
  title: string;
  xAxis: number[];
  yAxis: number[];
}

export interface Zeitreihe {
  Jahr: number;
  Faelle: number;
  Aufklaerungsquote: number;
}

export default class SmallMultiple extends React.Component<ISmallMultipleProps> {
  public render() {
    return (
      <Plot
        data={[
          {
            x: this.props.xAxis,
            y: this.props.yAxis,
            type: "scatter",
            mode: "lines", // +markers?
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
              //"<b>Rauschgiftkriminalität</b>" +
              "<br>Jahr: %{x} </br>" +
              "Fallzahlen: %{y:,}" + // TODO: use dot as thousands seperator
              "<extra></extra>",
            fill: "tozeroy",
          },
        ]}
        layout={{
          title: {
            text: this.props.title,
            y: 0.9,
            yanchor: "middle",
          },
          dragmode: false,
          yaxis: {
            zeroline: false,
            range: [0, 500000], // adjust range when comparing crimes
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
