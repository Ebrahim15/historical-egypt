"use client"

import { useRef } from "react";
import "./explore.css";
import PlaceCard from "@/components/PlaceCard/PlaceCard";

const Explore = () => {
  const places = [
    {
      title: "Amr Ibn Al-Aas Mosque",
      link:'amrMosque',
      description:
        "The Amr ibn al-As Mosque, also known as the Mosque of Amr ibn al-As or the Amr Mosque, holds significant historical and cultural importance as it is considered the first mosque ever built on the African continent. Located in the city of Cairo, Egypt, specifically in the district of Old Cairo (Al-Fustat), the mosque stands as a symbol of early Islamic architecture and the spread of Islam in the region. The mosque was constructed in 642 CE by the Arab general Amr ibn al-As, who led the Muslim conquest of Egypt during the time of the Rashidun Caliphate. It was built on the same site where Amr ibn al-As, after his successful military campaign, pitched his tent, establishing the foundation for the city of Fustat, which later became Cairo.",
      location: "https://maps.app.goo.gl/A6RpTxn6LLBs44VZ6",
      images: [
        {
          src: "/assets/images/amrMosque1.jpg",
          alt: "amrMosque",
        },
        {
          src: "/assets/images/amrMosque2.jpeg",
          alt: "amrMosque",
        },
        {
          src: "/assets/images/amrMosque4.jpg",
          alt: "amrMosque",
        },
      ],
    },
    {
      title: "Salah El Din Citadel",
      link:'salahElDinCitadel',
      description:
        "The Saladin Citadel, also known as the Citadel of Cairo or Salah El-Din Citadel, is a magnificent medieval fortress that stands atop a hill in Cairo, Egypt. It is one of the most iconic and historically significant landmarks in the city and offers breathtaking panoramic views of Cairo's skyline. The Citadel was constructed by Salah ad-Din al-Ayyubi, commonly known as Saladin, a prominent Muslim military leader and the founder of the Ayyubid dynasty. Building began in the 12th century and continued to be expanded and enhanced by subsequent rulers over the centuries.",
      location: "https://maps.app.goo.gl/UC9o9yzTjbhwhTFX9",
      images: [
        {
          src: "/assets/images/salahElDinCitadel1.jpg",
          alt: "salahElDinCitadel",
        },
        {
          src: "/assets/images/salahElDinCitadel2.jpg",
          alt: "salahElDinCitadel",
        },
        {
          src: "/assets/images/salahElDinCitadel3.jpg",
          alt: "salahElDinCitadel",
        },
      ],
    },
    {
      title: "The Grand Egyptian Museum",
      link:'grandEgyptianMuseum',
      description:
        "The Grand Egyptian Museum, also known as GEM, is a world-class museum located near the Giza Plateau in Cairo, Egypt. It is one of the largest and most significant archaeological museums in the world, dedicated to the preservation, exhibition, and study of ancient Egyptian artifacts and treasures. The construction of the Grand Egyptian Museum began in 2002 and is expected to be completed in the near future. Once fully operational, it will house an extensive collection of artifacts spanning over 5,000 years of ancient Egyptian history, including many of the most renowned and iconic treasures of ancient Egypt.",
      location: "https://maps.app.goo.gl/3fCPC7cxk15yr3qJ8",
      images: [
        {
          src: "/assets/images/grandEgyptianMuseum1.jpg",
          alt: "grandEgyptianMuseum",
        },
        {
          src: "/assets/images/grandEgyptianMuseum2.jpg",
          alt: "grandEgyptianMuseum",
        },
        {
          src: "/assets/images/grandEgyptianMuseum3.jpg",
          alt: "grandEgyptianMuseum",
        },
      ],
      ticket: {
        link: "https://grandegyptianmuseumtour.com/",
        details: "",
      },
    },
    {
      title: "Prince Naguib Palace",
      link:'princeNaguibPalace',
      description:
        "The Prince Naguib Palace, located in the district of Maadi in Cairo, Egypt, is a magnificent architectural gem that holds historical and cultural significance. It is named after Prince Naguib, who was a prominent member of the Egyptian royal family and a key figure in Egypt's modern history. The palace is known for its grandeur and elegance, showcasing a blend of European and Middle Eastern architectural styles. It was constructed during the early 20th century, reflecting the opulence and sophistication of the era. The palace boasts intricate detailing, ornate facades, and spacious interiors that exude a sense of luxury and refinement.",
      location: "https://maps.app.goo.gl/tVYSsGVqXcc5Wsgj6",
      images: [
        {
          src: "/assets/images/princeNaguibPalace1.jpg",
          alt: "grandEgyptianMuseum",
        },
        {
          src: "/assets/images/princeNaguibPalace2.jpg",
          alt: "grandEgyptianMuseum",
        },
        {
          src: "/assets/images/princeNaguibPalace3.jpg",
          alt: "grandEgyptianMuseum",
        },
      ],
    },
  ];
  return (
    <div className="pt-20">
      {places.map((place, index) => {
        return (
          <PlaceCard
            key={place.location}
            title={place.title}
            images={place.images}
            description={place.description}
            location={place.location}
            ticket={place.ticket}
            rowReverse={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
            link={place.link}
          />
        );
      })}
    </div>
  );
};

export default Explore;
