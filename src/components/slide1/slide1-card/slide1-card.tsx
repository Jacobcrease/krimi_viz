import * as React from "react";

export interface ISlide1CardProps {
  title: string;
  choices: string[];
  // just passing the switch page function
  onChange: () => void;
}
export interface ISlide1CardStates {
  active: number;
  question: number;
}

export default class Slide1Card extends React.Component<
  ISlide1CardProps,
  ISlide1CardStates
> {
  constructor(props: ISlide1CardProps) {
    super(props);
    // bugs when nothing is set here
    this.state = { active: -1, question: 0 };
  }
  public render() {
    const onClickButton = (button: number) => {
      this.setState({ active: button });
      if (this.state.active === button) {
        this.setState({ active: -1 });
      }

      // adding a small gap before switching the bage
      setTimeout(() => this.props.onChange(), 300);
    };

    return (
      <div className="col-align">
        <div className="font-xl">
          Wie schätzen Sie das ein?
          <br></br>
          {this.props.title}
        </div>
        <div className="choices-wrapper">
          {this.props.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => onClickButton(index)}
              className="choice font-m"
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
