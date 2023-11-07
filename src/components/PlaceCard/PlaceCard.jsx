"use client"

import React, { useState } from 'react'
import './PlaceCard.css'
import Image from 'next/image'
import Link from 'next/link'
import ImageSlider from '../ImageSlider/ImageSlider'
import { ChevronUpSquare, ChevronDownSquare } from 'lucide-react'

const PlaceCard = ({title, images, description, location, ticket, rowReverse, link}) => {
  const [toggleDescription, setToggleDescription] = useState(false)
  return (
    <div
      className={`flex max-md:flex-col ${rowReverse} p-5 gap-5 border-b-2 border-gray`}
      id={link}
    >
      {/* Image */}
      <ImageSlider images={images} />

      {/* Title, Description, Location, Book a ticket */}
      <div className="flex flex-col gap-3 justify-between py-3 w-full md:w-[70%]">
        <div>
          <p className="font-bold">{title}</p>
          <div className="flex w-full items-end">
            <p className={`${toggleDescription ? "line-clamp-none" : "line-clamp-3"} md:line-clamp-none`}>{description}</p>
            <button
              className="px-3 md:hidden"
              onClick={() => setToggleDescription(!toggleDescription)}
            >
              {toggleDescription ? (
                <ChevronUpSquare size={35} strokeWidth={1} fillOpacity={1} />
              ) : (
                <ChevronDownSquare size={35} strokeWidth={1} fillOpacity={1} />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <Link href={location} target="_blank">
            <button className="rounded px-8 py-4 border-black border-2 opacity-100 hover:opacity-50 transition-opacity duration-500">
              Location
            </button>
          </Link>
          {ticket && (
            <Link href={ticket.link} target="_blank">
              <button className="w-max rounded px-8 py-4 border-black border-2 opacity-100 hover:opacity-50 transition-opacity duration-500 lg:w-auto">
                Book a ticket
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlaceCard