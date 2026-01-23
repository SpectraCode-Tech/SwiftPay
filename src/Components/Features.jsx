import React from 'react'


const Features = () => {
  return (
    <div id='features' className='py-10 px-5 text-center text-white bg-dark-green'>
      <h1 className="items-center text-3xl mb-5 font-bold">Features</h1>
      <h3 className='text-center font-bold text-2xl'>What makes us the Best?</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-4 gap-8 mt-8 *:transition-all *:ease-in-out *:duration-300 *:rounded *:bg-green *:p-5">
        <span className='hover:-translate-y-2 cursor-pointer'>
          <h2 className="mb-5 font-bold">Agentic AI Assistant</h2>
          <p className="">A proactive partner that autonomously manages subscriptions and predicts cash flow gaps before they happen.</p>
        </span>
        <span className='hover:-translate-y-2 cursor-pointer'>
          <h2 className="mb-5 font-bold">5-Minute Onboarding</h2>
          <p className="">Instant account opening using biometric ID verification for a fully paperless, immediate setup.</p>
        </span>
        <span className='hover:-translate-y-2 cursor-pointer'>
          <h2 className="mb-5 font-bold">Predictive Dashboards</h2>
          <p className="">A dynamic interface that automatically surfaces relevant insights and tools based on your current spending habits</p>
        </span>
        <span className='hover:-translate-y-2 cursor-pointer'>
          <h2 className="mb-5 font-bold">Instant Settlements</h2>
          <p className="">Real-time, 24/7 fund transfers, ensuring money moves the second you send it.</p>
        </span>
        
      </div>
    </div>

  )
}

export default Features
