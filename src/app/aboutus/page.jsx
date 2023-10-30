import React from 'react'
import './AboutUs.css'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className="flex h-screen w-screen items-center">
      <Image
        src={"/assets/images/balloon.jpg"}
        alt="nile"
        fill={true}
        objectFit="cover"
        className="z-0 f_image"
      />
      <div className="absolute aboutus_container p-5 m-5">
        <p className="text-white drop-shadow">
          Welcome to our website, your ultimate guide to exploring the
          historical and natural wonders of Egypt! We are a team of passionate
          travelers who have embarked on a mission to bring you the best of
          Egypt's treasures. With a history spanning over thousands of years,
          Egypt is a treasure trove of ancient civilizations and remarkable
          landmarks. From the iconic Pyramids of Giza to the magnificent temples
          of Luxor and the mystical Valley of the Kings, our website is your
          gateway to discovering these awe-inspiring historical sites. But Egypt
          isn't just about its ancient past. It is also blessed with
          breathtaking natural landscapes that will leave you in awe. From the
          mesmerizing beaches of the Red Sea to the tranquil oases of the
          Western Desert and the majestic Nile River, Egypt offers a diverse
          range of natural wonders waiting to be explored. Our team of dedicated
          researchers and travel enthusiasts have curated a comprehensive
          collection of articles, guides, and photographs to help you plan your
          journey through Egypt. Whether you're interested in uncovering the
          mysteries of ancient civilizations, embarking on thrilling adventures
          in the desert, or simply immersing yourself in the beauty of nature,
          our website is your go-to resource. We understand that every traveler
          is unique, with different interests and preferences. That's why we
          strive to provide a wealth of information, including historical facts,
          practical travel tips, recommended itineraries, and insider
          recommendations. Our goal is to ensure that your visit to Egypt is not
          only memorable but also enriching. So, whether you're an avid history
          buff, a nature enthusiast, or simply someone who appreciates the
          beauty of this world, join us on this virtual journey through Egypt's
          historical and natural wonders. Let us inspire you to embark on an
          unforgettable adventure and experience the magic of Egypt firsthand.
        </p>
      </div>
    </div>
  );
}

export default AboutUs