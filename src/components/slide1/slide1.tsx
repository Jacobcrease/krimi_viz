import * as React from "react";
import Slide1Card from "./slide1-card/slide1-card";
import "./slide1.sass";
export interface ISlide1Props {
  onChange: () => void;
}
export interface ISlide1States {
  question: number;
  crossfade: boolean;
  visible: boolean;
}

export default class Slide1 extends React.Component<
  ISlide1Props,
  ISlide1States
> {
  constructor(props: ISlide1Props) {
    super(props);
    // bugs when nothing is set here
    this.state = { question: 0, visible: true, crossfade: false };
  }

  private questions = [
    {
      title: "Kriminalität in Deutschland ist..\n\n",
      choices: [
        "ein sehr großes Problem",
        "ein großes Problem",
        "ein kleines Problem",
        "kein Problem",
      ],
    },
    {
      title: "Die Kriminalität in Deutschland hat in den letzen 5 Jahren..\n\n",
      choices: [
        "stark zugenommen",
        "etwas zugenommen",
        "ist etwa gleich geblieben",
        "hat etwas abgenommen",
        "stark abgenommen",
      ],
    },
  ];

  private changeQuestion() {
    this.setState({ visible: false });
    setTimeout(() => this.setState({ question: 1, visible: true }), 400);
  }

  private delaySwitch() {
    this.setState({visible: false})
    setTimeout(() => {
      this.setState({ crossfade: true, visible: true })
      setTimeout(() => this.props.onChange(), 800);
    }, 400)
  }

  private getContent() {
    if (this.state.crossfade === true) {
      return (
        <div className="col-align">
          <div className="font-xl">Wie sehen Andere das?</div>
        </div>
      );
    }
    if (this.state.question === 1) {
      return (
        <Slide1Card
          title={this.questions[1].title}
          choices={this.questions[1].choices}
          onChange={() => this.delaySwitch()}
        ></Slide1Card>
      );
    } else {
      return (
        <Slide1Card
          title={this.questions[0].title}
          choices={this.questions[0].choices}
          onChange={() => this.changeQuestion()}
        ></Slide1Card>
      );
    }
  }

  public render() {
    return (
      <div
        className={
          this.state.visible
            ? "slide1-wrapper visible"
            : "slide1-wrapper invisible"
        }
      >
        {this.getContent()}
      </div>
    );
  }
}
