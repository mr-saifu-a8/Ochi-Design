import React from 'react'

const ClientReviewsName = () => {
  const media = [
    {title: "Medellia", client: "Becky Chastain", action: "Read"},
    {title: "Medellia", client: "Becky Chastain", action: "Read"},
    {title: "Medellia", client: "Becky Chastain", action: "Read"},
    {title: "Medellia", client: "Becky Chastain", action: "Read"},
    {title: "Medellia", client: "Becky Chastain", action: "Read"},
    {title: "Medellia", client: "Becky Chastain", action: "Read"},
    {title: "Medellia", client: "Becky Chastain", action: "Read"},
    {title: "Medellia", client: "Becky Chastain", action: "Read"},
    {title: "Medellia", client: "Becky Chastain", action: "Read"},
    
  ]
return (
  <div className='w-full font-[neue] h-screen'>
    {media.map((item, index) => (
      
      <div className='flex justify-between px-15 py-5 border-t  border-zinc-400 text-lg'>
        <h2>{item.title}</h2>
        <h2>{item.client }</h2>
        <h2 className='underline underline-offset-6'>{item.action}</h2>
      </div>
    ))}
    </div>
  )
}

export default ClientReviewsName
