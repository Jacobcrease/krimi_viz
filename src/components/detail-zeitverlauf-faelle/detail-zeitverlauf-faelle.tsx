import * as React from "react";
import "../slides.sass";
import Plot from "react-plotly.js";
import faelle from "../../data/ZR-F-01-T01-Faelle_json.json";
import { PlotData } from "plotly.js";

export interface IDetailZeitverlaufFaelleProps {}

export default class DetailZeitverlaufFaelle extends React.Component<IDetailZeitverlaufFaelleProps> {
  public render() {
    const simplfiedGermany = [
      {
        name: "Berlin",
        x: 261,
        y: 833 - 523,
      },
      {
        name: "Brandenburg",
        x: 280,
        y: 833 - 493,
      },
      {
        name: "Sachsen",
        x: 421,
        y: 833 - 547,
      },
      {
        name: "Mecklenburg Vorpommern",
        x: 159,
        y: 833 - 392,
      },
      {
        name: "Schleswig Holstein",
        x: 84,
        y: 833 - 309,
      },
      {
        name: "Hamburg",
        x: 163,
        y: 833 - 305,
      },
      {
        name: "Niedersachsen",
        x: 286,
        y: 833 - 289,
      },
      {
        name: "Sachsen Anhalt",
        x: 315,
        y: 833 - 405,
      },
      {
        name: "Thüringen",
        x: 433,
        y: 833 - 371,
      },
      {
        name: "Bayern",
        x: 728,
        y: 833 - 411,
      },
      {
        name: "Baden-Würtenberg",
        x: 662,
        y: 833 - 247,
      },
      {
        name: "Saarland",
        x: 605,
        y: 833 - 104,
      },
      {
        name: "Rheinland-Pfalz",
        x: 540,
        y: 833 - 185,
      },
      {
        name: "Norrhein-Westfalen",
        x: 398,
        y: 833 - 96,
      },
      {
        name: "Hessen",
        x: 523,
        y: 833 - 187,
      },
      {
        name: "Bremen",
        x: 216,
        y: 833 - 231,
      },
    ];

    const dataY: number[] = [];
    const dataX: number[] = [];
    const dataSize: number[] = [];

    simplfiedGermany.forEach((country) => {
      dataX.push(country.x);
      dataY.push(country.y);
    });

    const args: {
      data: any;
      layout: Partial<Plotly.Layout>;
      frames: any;
      config: any;
    } = {
      data: [
        {
          x: dataX,
          y: dataY,
          mode: "markers",
          marker: {
            size: [
              40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
            ],
          },
        },
      ],

      layout: {
        dragmode: false,
        xaxis: {
          showgrid: false,
          zeroline: false,
          visible: false,
        },
        yaxis: {
          showgrid: false,
          zeroline: false,
          visible: false,
        },
        sliders: [
          {
            pad: { t: 30 },

            x: 0.05,

            len: 0.95,

            currentvalue: {
              xanchor: "right",

              prefix: "color: ",

              font: {
                color: "#888",

                size: 20,
              },
            },

            transition: { duration: 250, easing: "quad-in" },

            // By default, animate commands are bound to the most recently animated frame:

            steps: [
              {
                label: "First",

                method: "animate",

                args: [
                  ["First"],
                  {
                    mode: "immediate",

                    frame: { redraw: false, duration: 500 },

                    transition: { duration: 500 },
                  },
                ],
              },
              {
                label: "Second",

                method: "animate",

                args: [
                  ["Second"],
                  {
                    mode: "immediate",

                    frame: { redraw: false, duration: 500 },

                    transition: { duration: 500 },
                  },
                ],
              },
              {
                label: "Third",

                method: "animate",

                args: [
                  ["Third"],
                  {
                    mode: "immediate",

                    frame: { redraw: false, duration: 500 },

                    transition: { duration: 500 },
                  },
                ],
              },
            ],
          },
        ],
      },

      // The slider itself does not contain any notion of timing, so animating a slider

      // must be accomplished through a sequence of frames. Here we'll change the color

      // and the data of a single trace:

      frames: [
        {
          name: "First",

          data: [
            {
              marker: {
                size: [
                  40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
                  40,
                ],
              },
            },
          ],
        },
        {
          name: "Second",

          data: [
            {
              marker: {
                size: [
                  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                  10,
                ],
              },
            },
          ],
        },
        {
          name: "Third",

          data: [
            {
              marker: {
                size: [
                  80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,
                  80,
                ],
              },
            },
          ],
        },
      ],
      config: {
        displayModeBar: false,
        responsive: true,
        scrollZoom: false,
      },
    };

    return (
      <Plot
        data={args.data}
        layout={args.layout}
        config={args.config}
        frames={args.frames}
        style={{ width: 617, height: 833 }}
      />
    );
  }
}
