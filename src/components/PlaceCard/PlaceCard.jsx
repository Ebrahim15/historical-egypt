import React from 'react'
import './PlaceCard.css'
import Image from 'next/image'
import Link from 'next/link'
import ImageSlider from '../ImageSlider/ImageSlider'

const PlaceCard = ({title, images, description, location, ticket, rowReverse, link}) => {
  return (
    <div className={`flex ${rowReverse} p-5 gap-5 border-b-2 border-gray`} id={link}>
      {/* Image */}
      <ImageSlider images={images}/>
      {/* <Image
        src={image.src}
        width={500}
        height={500}
        alt={image.alt}
        className='min-h-[300px]'
      /> */}

      {/* Title, Description, Location, Book a ticket */}
      <div className='flex flex-col justify-between py-3 w-[70%]'>
        <div>
          <p className='font-bold'>{title}</p>
          <p>{description}</p>
        </div>
        <div className='flex flex-row gap-3'>
          <Link href={location} target='_blank'>
            <button className='rounded px-8 py-4 border-black border-2 opacity-100 hover:opacity-50 transition-opacity duration-500'>Location</button>
          </Link>
          {
            ticket &&
            <Link href={ticket.link} target='_blank'>
              <button className='rounded px-8 py-4 border-black border-2 opacity-100 hover:opacity-50 transition-opacity duration-500'>Book a ticket</button>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default PlaceCard