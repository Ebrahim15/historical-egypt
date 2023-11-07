"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()

  const welcomeToEgypt = [
    {
      lang: "Ar",
      text: "!اهلا بك في مصر",
      buttonText: "اكتشف",
    },
    {
      lang: "En",
      text: "Welcome to Egypt!",
      buttonText: "Explore",
    },
    {
      lang: "Fr",
      text: "Bienvenue en Egypte!",
      buttonText: "Explorer",
    },
    {
      lang: "Sp",
      text: "Bienvenida a Egipto!",
      buttonText: "Explorar",
    },
    {
      lang: "Gr",
      text: "Willkommen in Ägypten!",
      buttonText: "Erkunden",
    },
    {
      lang: "Sw",
      text: "Välkommen till Egypten!",
      buttonText: "Utforska",
    },
    {
      lang: "Ru",
      text: "Добро пожаловать в Египет!",
      buttonText: "Исследовать",
    },
    {
      lang: "Jp",
      text: "エジプトへようこそ!",
      buttonText: "探検する",
    },
  ];

  const [welcomeLang, setWelcomeLang] = useState("Ar");

  const updateWelcomeLangauge = () => {
    welcomeToEgypt.map((language, i) => {
      setTimeout(() => {
        setWelcomeLang(language.lang);
      }, i * 5000);
    });
  };
  useEffect(() => {
    updateWelcomeLangauge();
  }, []);

  useEffect(() => {
    setInterval(() => {
      welcomeToEgypt.map((language, i) => {
        setTimeout(() => {
          setWelcomeLang(language.lang);
        }, i * 5000);
      });
    }, 40000);
  }, []);

  return (
    <main className="h-screen">
      <div className="h-screen relative">
        <div className="background_image_container">
          <Image
            src="/assets/images/pyramidsL2.jpg"
            alt="pyramids"
            fill={true}
            objectFit="cover"
            objectPosition="60% center"
            className="z-0 background_image"
          />
        </div>
        <div className="home_background flex overflow-hidden flex-row justify-center w-full px-5 items-center h-full absolute lg:w-2/4 lg:items-center">
          {welcomeToEgypt.map((language, id) => {
            return (
              <div
                key={id}
                className={`home_welcome_message  w-full h-1/3 lg:h-auto lg:w-auto ${
                  language.lang === "Ar" ? "font-[Roboto] text-6xl lg:text-9xl" : ""
                } flex flex-col p-3 justify-center font-bold text-center text-white drop-shadow-md text-5xl lg:text-8xl lg:bg-inherit leading-tight absolute ${
                  welcomeLang === language.lang ? "opacity-100" : "opacity-0"
                }`}
              >
                {language.lang === "Ar" ? (
                  <>
                    اهلا بك
                    <br />
                    في
                    <br />
                    !مصر
                  </>
                ) : (
                  language.text
                )}
              </div>
            );
          })}
          <button
            className="explore_button flex justify-center items-center self-end relative mb-16 text-white font-bold border-2 px-16 py-6 rounded-xl"
            onClick={() => router.push("/explore")}
          >
            {welcomeToEgypt.map((language, id) => {
              return (
                <span
                  key={id}
                  className={`${
                    welcomeLang === language.lang ? "opacity-100" : "opacity-0"
                  } text-lg absolute`}
                >
                  {language.buttonText}
                </span>
              );
            })}
          </button>
        </div>
      </div>
    </main>
  );
}
