import React, { useEffect } from "react";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const sampleJSON = {
  QAs: [
    {
      Q: "What bikes do you service?",
      A:
        "We service all kinds of bikes (Rodie, MTB, Hybrid, Foldable, Kids, etc.)",
    },
    {
      Q: "Do you build custom frame?",
      A:
        "Yes..!! We do custom paint and upgrade the components according to the frame compatibility.",
    },
    {
      Q: "Does your service price include spare parts?",
      A: "Spares are considered to be extra.",
    },
    {
      Q: "Does your price include pick & drop?",
      A: "No.. But prices are very affordable.",
    },
    {
      Q: "What if the bike needs extra spares?",
      A:
        "Once we receive the bike, we will check the complete bike - this is an in depth check to see whether any additional parts needed. If needed, we will certainly call you for confirmation.",
    },
    {
      Q: "How soon can you collect my bike?",
      A:
        "Unlike bike shop who have a long waiting list, you don't have to wait too long for your bike to be collected & serviced. Even in peak season we'll be able to collect and return within 48 to 72 hours.",
    },
    {
      Q: "How long would you take to do doorstep service?",
      A:
        "Once we receive your order, we will call you and schedule the appointment and reach your venue.",
    },
    {
      Q: "Do you offer Warranty on service?",
      A:
        "All labour work comes with 3 months warranty. All parts supplied by us comes with a manufacturer's warranty (user misuse and fair wear and tear is not covered); if you do experience problem with your bike service, please do not hesitate to get in touch with us, we want our users to be happy pedalling",
    },
    { Q: "How do you take payments?", A: "Online with any UPI or Cash." },
    { Q: "Can you assemble the bicycle?", A: "Yes... We can help you out." },
  ],
};

function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="my-5 pt-20 lg:mx-64 xl:pr-40 text-left md:mx-40 mx-10 ">
        <h2 className="my-4 text-3xl font-bold">FAQs</h2>
        <div className="">
          <ul>
            {sampleJSON.QAs.map((item, i) => {
              return (
                <li key={i}>
                  <span className="text-red-600 font-bold">{item.Q}</span>
                  <br />
                  <span className="italic font-regualr">{item.A}</span>
                  <br />
                  <br />
                </li>
              );
            })}
          </ul>
        </div>
        <a href="/#service">
          <button
            type="button"
            className="my-5 py-2 px-4 bg-red-600 rounded hover:bg-black transition duration-500 ease-in-out transform md:hover:scale-105 hover:shadow-xl text-white font-bold text-xl hover:text-white hover:bg-black hover:shadow"
          >
            BOOK SERVICE
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
