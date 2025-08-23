import CredenceOffers from "landing-page/components/CredenceOffers";
import Experience from "landing-page/components/Experience";
import HeroSection from "landing-page/components/HeroSection";

import ServiceBenefits from "landing-page/components/ServiceBenefits";
import GetStarted from "landing-page/components/GetStarted";
import Footer from "landing-page/components/Footer";
import CtaForm from "landing-page/components/CtaForm";

import Navbar from "landing-page/components/Navbar";
import Possibilities from "landing-page/components/Possibilities";
import Faq from "landing-page/components/Faq";
import React from "react";
import SocialLinks from "landing-page/components/SocialLinks";
import HashElement from "landing-page/hash-element/HashElement";

function Home() {
  return (
    <>
      <div className="bg-bgGreyLight">
        <Navbar />
        <HeroSection />
        <Experience />
        <CredenceOffers />
        <Possibilities />
        <ServiceBenefits />
        <GetStarted />
        <Faq />
        <CtaForm />
        <Footer />
        <HashElement />
      </div>
    </>
  );
}

export default Home;
