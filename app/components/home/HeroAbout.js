import React from 'react'

const HeroAbout = () => {
  const HeroAboutData = [
    {
      aboutHeader: 'about us',
      aboutContent: 'we are a team working together in one mind and with the vision of calling many sons into glory through the ministry of evangelism, prayer and study of the word of God.'
    },
    {
      getInvolvedHeader: 'get involved',
      getInvolvedContent: 'you can be a supporter or volunteer in any of our programs both, online and onsite.'
    },
    {
      donationHeader: 'giving back',
      donationContent: 'one of our mission is to give to the poor, needy and helping the less priviledge. You can also be a partaker by supporting this mission spiritually, financially and physically.'
    }
  ]

  return (
    <div>
      <div className='flex flex-col items-center'>
        <h1 className='uppercase text-[#161722] font-robotoCondensed font-bold lg:text-3xl md:text-2xl sm:text-lg text-sm text-center'>a church aimed at calling sons into glory</h1>
      </div>
      {HeroAboutData.map((data, index) => (
        <div key={index}>
          <div>
            <h3>{data.aboutHeader}</h3>
            <p>{data.aboutContent}</p>
          </div>
          <div>
            <h3>{data.getInvolvedHeader}</h3>
            <p>{data.getInvolvedContent}</p>
          </div>
          <div>
            <h3>{data.donationHeader}</h3>
            <p>{data.donationContent}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HeroAbout