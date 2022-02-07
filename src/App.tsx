import React from "react";
import "./App.sass";
import OnePage from "./components/one-page/one-page";

export interface IApp {}
export default class App extends React.Component<IApp> {
  public render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <OnePage></OnePage>
      </div>
    );
  }
}
