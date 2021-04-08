import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";

class Testimonial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
    };
  }

  next = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide + 1,
    }));
  };

  prev = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide - 1,
    }));
  };

  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };

  render() {
    return (
      <div className="h-auto bg-gray-100 z-0 shadow-inner flex flex-col items-center">
        <h1 className="text-red-600 pt-10 text-4xl 2xl:text-5xl font-extrabold uppercase">
          Testimonials
        </h1>

        <div className="md:flex md:flex-row item-center lg:w-3/4 w-11/12">
          <div className="hidden md:flex w-96 ">
            <button onClick={this.prev}>
              <img className="text-gray-800" src={left} />
            </button>
          </div>

          <Carousel
            className="py-10"
            autoPlay={true}
            showArrows={false}
            interval={6000}
            infiniteLoop={true}
            stopOnHover={false}
            useKeyboardArrows={true}
            showThumbs={false}
            dynamicHeight={true}
            showStatus={false}
            selectedItem={this.state.currentSlide}
            onChange={this.updateCurrentSlide}
            {...this.props}
          >
            <div>
              <p className="italic font-normal">
                Had a pretty good experience in getting my Fuji CrossPro Ultegra
                Cyclocross serviced. Stanley was kind enough to get the bike
                serviced replaced parts as necessary. <br /> *All the service
                requirements are available and done with professional tools on a
                work station.
                <br /> *Service is done at a domestic place. So you can stand
                next to bike, see what work is going on and eat heads with your
                questions.
                <br /> *Parts if not available are procured from outside at no
                extra cost.
                <br /> *Call up and fix your time for bike service to avoid
                delays.
                <br /> Rest assured, your bike is in good hands even if there is
                a slight delay.
              </p>
              <h5 className="pt-5 font-semibold">- Chinmaya Halkare</h5>
              <br />
              <br />
              <br />
            </div>
            <div>
              <p className="italic font-normal">
                I give ⭐️⭐️⭐️⭐️⭐️ It’s a place where our Bicycles take
                rebirth and you will feel like that your back on your New bike
                riding.
                <br /> Work - Excellent.
                <br /> Parts - Genuine parts are used to fix back.
                <br /> Staff - Stanley explains the issues and advises for the
                Difference and different types of parts.
                <br /> Over my experience - I felt Very Happy, Learnt new things
                about my bike which I can practice and implementing in my daily
                rides.
              </p>
              <h5 className="pt-5 font-semibold">- Peter Punith</h5>
              <br />
              <br />
              <br />
            </div>
            <div>
              <p className="italic font-normal">
                Bosco Bicycle Works is one of the best bicycle services that I
                have come across.
                <br /> Stanley is knowledgeable, professional, has a good value
                and hard working.
                <br /> I would recommend to people who are passionate bikers to
                get your bicycle serviced here, trust me you will not be
                disappointed.
                <br /> And they also pickup and drop facility!
              </p>
              <h5 className="pt-5 font-semibold">- Mathew</h5>
              <br />
              <br />
              <br />
            </div>
            <div>
              <p className="italic font-normal">
                Perfect. Lucky to find them. I was referred to them by a pro
                rider.
                <br /> Personal attention. Well trained. Stanly is the man! I
                serviced my cycle before a long tour.
                <br /> And also have taken his help for a few regular
                maintenance on some of my other cycles.
                <br /> I used to service with some of the best bike stores in
                bangalore.
                <br /> They are all very professional but usually need to get on
                a waitlist to find time with them.
                <br /> Also for routine service they can get needlessly
                expensive.
                <br /> With Stanly, quick work and good value. Highly recommend.
              </p>
              <h5 className="pt-5 font-semibold">- Ravi Kittu</h5>
              <br />
              <br />
              <br />
            </div>
            <div>
              <p className="italic font-normal">
                Good value service run by young and passionate team who have
                <br />
                experience working within the bicycle industry for many years.
              </p>
              <h5 className="pt-5 font-semibold">- Mathew James</h5>
              <br />
              <br />
              <br />
            </div>
            <div>
              <p className="italic font-normal">
                Stanly is the Man behind this... He works with passion in his
                heart!
                <br /> Try his services and you'll never regret 👍🏽
              </p>
              <h5 className="pt-5 font-semibold">- Maria Precina</h5>
              <br />
              <br />
              <br />
            </div>
            <div>
              <p className="italic font-normal">
                Got my Triban RC500 serviced in December. Cycle still feels
                smooth after 700kms !
              </p>
              <h5 className="pt-5 font-semibold">- Nishanth N</h5>
              <br />
              <br />
              <br />
            </div>
            <div>
              <p className="italic font-normal">
                I had given my bike for service and once I received it back had
                an 100 percent blissfull experience with it!!!!
              </p>
              <h5 className="pt-5 font-semibold">- Anto Lenin</h5>
              <br />
              <br />
              <br />
            </div>
          </Carousel>

          <div className="hidden md:flex w-96">
            <button onClick={this.next}>
              <img className="" src={right} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
