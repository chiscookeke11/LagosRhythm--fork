"use client";

import { useEffect, useState } from "react";
import BestOfLagos from "@/components/BestOfLagos";
import HeroSection from "@/components/HeroSection";
import NewsLetter from "@/components/NewsLetter";
import PopularThings from "@/components/PopulaThings";
import Testimonials from "@/components/Testimonials";
import WhyLagos from "@/components/WhyLagos";
import BlogLanding from "@/components/BlogLanding";
import HeroFAQ from "@/components/HeroFAQ";
import JsonLd from "@/components/seo/JsonLd";



const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Lagos Rhythm",
      "url": "https://www.lagosrhythm.com",
      "description": "Lagos Rhythm is a tourism-tech platform redefining how global audiences engage with Lagos culture through live virtual tours, in-person tours, and transit navigation.",
      "logo": "https://www.lagosrhythm.com/logos/logo.png",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61576980652512",
        "https://www.instagram.com/lagos_rhythm/",
        "https://youtube.com/@lagosrhythm",
        "https://vm.tiktok.com/ZMSVpqPpC/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "bookings@lagosrhythm.com",
        "availableLanguage": ["English"]
      },
      "foundingLocation": {
        "@type": "Place",
        "name": "Lagos, Nigeria"
      }
    },
    {
      "@type": "TouristDestination",
      "name": "Lagos",
      "description": "Experience Lagos, Nigeria's most vibrant megacity — live virtual tours, in-person cultural experiences, street navigation, and more with Lagos Rhythm.",
      "touristType": [
        "Cultural tourism",
        "Virtual tourism",
        "Urban exploration",
        "Heritage tourism"
      ]
    }
  ]
}

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);





  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);


  return (
    <div>
      <HeroSection setVideoLoaded={setVideoLoaded} videoLoaded={videoLoaded} />
      <BestOfLagos />
      <PopularThings />
      <WhyLagos />
      <BlogLanding />
      <Testimonials />
      <HeroFAQ />
      <NewsLetter />
      <JsonLd data={homepageJsonLd} />
    </div>
  );
}
