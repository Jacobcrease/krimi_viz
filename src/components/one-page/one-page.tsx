import * as React from "react";
import Hammer from "hammerjs";
import "./one-page.sass";
import Slide1 from "../slide1/slide1";
import DetailZeitverlaufFaelle from "../detail-zeitverlauf-faelle/detail-zeitverlauf-faelle";
import SlideUmfrage from "../slide-umfragen/slide-umfragen";
import SlideFallentwicklung from "../slide-fallentwicklung/slide-fallentwicklung";
import SlideFallentwicklungDetail from "../slide-fallentwicklung-detail/slide-fallentwicklung-detail";
import SlideFallentwicklungDetail2 from "../slide-fallentwicklung-detail-2/slide-fallentwicklung-detail-2";
import SlideFazit from "../slide-fazit/slide-fazit";
import SlideBemerkungen from "../slide-bemerkungen/slide-bemerkungen";
import SlideImpressum from "../slide-impressum/slide-impressum";
import DemoSmallMultiple from "../demo-small-multiple/demo-small-multiple";

export interface IOnePageProps {}

export default class OnePage extends React.Component<IOnePageProps> {
  activeIndex: number = 0;

  SLIDES: HTMLDivElement[];
  BULLETS: HTMLDivElement[];
  SLIDER: HTMLDivElement;
  SLIDERCONTAINER: HTMLDivElement;
  SLIDERSIZE = 100;
  SENSITIVITY = 0.9;

  WHEELSENSITIVITY = 195;

  hammerWrapperRef: React.RefObject<HTMLDivElement>;
  hammer: HammerManager;

  timer: ReturnType<typeof setTimeout>;
  wheelTimer: ReturnType<typeof setTimeout>;
  wheelCounter: number = 0;

  panIsRunning = false;

  constructor(props: IOnePageProps) {
    super(props);
    this.hammerWrapperRef = React.createRef();
  }

  componentDidMount() {
    this.SLIDES = Array.from(document.querySelectorAll(".slide"));
    this.BULLETS = Array.from(document.querySelectorAll(".bullet"));
    this.SLIDER = document.querySelector(".slider-inner-wrapper")!;
    this.SLIDERCONTAINER = document.querySelector(".slider-outer-wrapper")!;

    this.SLIDER.style.height = `${this.SLIDES.length * 100}%`;

    this.hammer = new Hammer(this.hammerWrapperRef.current!);
    this.hammer.on("pan", this.onHammerPanEvent.bind(this));
    this.setActiveElement(this.activeIndex);
  }

  componentWillUnmount() {
    this.hammer.destroy();
  }

  onWheel(ev: React.WheelEvent) {
    if (ev.deltaY > 0) {
      this.wheelCounter -= this.WHEELSENSITIVITY;
    } else {
      this.wheelCounter += this.WHEELSENSITIVITY;
    }

    const wheelDistance =
      ((this.SLIDERSIZE / this.SLIDES.length) * this.wheelCounter) /
      this.SLIDER.clientWidth;
    /**
       const wheelDistanceCalculated =
         wheelDistance - (this.SLIDERSIZE / this.SLIDES.length) * this.activeIndex;
      this.animateSlider(wheelDistanceCalculated);
       */

    clearTimeout(this.wheelTimer);
    this.wheelTimer = setTimeout(() => {
      this.wheelCounter = 0;
      this.jumpToPage(wheelDistance);
    }, 20);
  }

  onHammerPanEvent(event: HammerInput) {
    this.panIsRunning = true;

    const panDistance =
      ((this.SLIDERSIZE / this.SLIDES.length) * event.deltaY) /
      this.SLIDER.clientWidth;
    const panDistanceCalculated =
      panDistance - (this.SLIDERSIZE / this.SLIDES.length) * this.activeIndex;

    //this.animateSlider(panDistanceCalculated);

    if (event.isFinal) {
      //this.jumpToPage(panDistance);
    }
  }

  jumpToPage(distance: number) {
    console.log(distance);
    let sizeFraction = this.SLIDERSIZE / this.SLIDES.length;
    sizeFraction *= distance > 0 ? 1 : -1;
    console.log(sizeFraction);
    const sensitivityRatio = this.SENSITIVITY * sizeFraction;
    const sensifietDistance = distance + sensitivityRatio;
    let pageAmount = parseInt(
      (sensifietDistance / sizeFraction).toString(),
      10
    );
    pageAmount *= distance > 0 ? -1 : 1;
    console.log(pageAmount);
    this.goToSlide(this.activeIndex + pageAmount);
  }

  goToSlide(index: number) {
    if (index < 0) {
      this.activeIndex = 0;
    } else if (index > this.SLIDES.length - 1) {
      this.activeIndex = this.SLIDES.length - 1;
    } else {
      this.activeIndex = index;
    }
    this.SLIDER.classList.add("is-animating");

    const percentage =
      -(this.SLIDERSIZE / this.SLIDES.length) * this.activeIndex;
    this.animateSlider(percentage);

    this.setActiveElement(this.activeIndex);
    this.setActiveBullets(this.activeIndex);
    this.addSmoothTransition();
  }

  animateSlider(percentage: number) {
    const distance =
      (this.SLIDERSIZE / this.SLIDES.length) * (this.SLIDES.length - 1);
    if (percentage > 0) {
      percentage = 0;
    } else if (percentage < -distance) {
      percentage = -distance;
    }
    this.SLIDER.style.transform = "translateY( " + percentage + "% )";
  }

  setActiveElement(index: number) {
    const activeElement = document.querySelector(".active");
    if (activeElement) {
      activeElement.classList.remove("active");
    }
    this.SLIDES[index].classList.add("active");
  }

  setActiveBullets(index: number) {
    const activeBullet = document.querySelector(".bullet-active");
    if (activeBullet) {
      activeBullet.classList.remove("bullet-active");
    }
    this.BULLETS[index].classList.add("bullet-active");
  }

  addSmoothTransition() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.SLIDER.classList.remove("is-animating");
      this.panIsRunning = false;
    }, 300);
  }

  public render() {
    return (
      <div
        className="slider-outer-wrapper"
        ref={this.hammerWrapperRef}
        onWheel={(ev) => this.onWheel(ev)}
      >
        <div className="slider-inner-wrapper">
          <div className="slide">
            <Slide1 onChange={() => this.goToSlide(1)}></Slide1>
          </div>
          <div className="slide">
            <SlideUmfrage
              onClickNavigation={() => this.goToSlide(2)}
            ></SlideUmfrage>
          </div>
          <div className="slide">
            <SlideFallentwicklung
              onClickNavigation={() => this.goToSlide(3)}
            ></SlideFallentwicklung>
          </div>
          <div className="slide">
            <SlideFallentwicklungDetail
              onClickNavigation={() => this.goToSlide(4)}
            ></SlideFallentwicklungDetail>
          </div>
          <div className="slide">
            <SlideFallentwicklungDetail2
              onClickNavigation={() => this.goToSlide(5)}
            ></SlideFallentwicklungDetail2>
          </div>
          <div className="slide">
            <SlideFazit
              onClickNavigation={() => this.goToSlide(6)}
            ></SlideFazit>
          </div>
          <div className="slide">
            <SlideBemerkungen
              onClickNavigation={() => this.goToSlide(7)}
            ></SlideBemerkungen>
          </div>
          <div className="slide">
            <SlideImpressum></SlideImpressum>
          </div>
        </div>
      </div>
    );
  }
}
