import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className=' pt-16 px-8 text-sm pb-28'>
        <div className='text-foreground filter pb'>
            Vibe Coded with ❤️ by Sakshi Singh
        </div>
        <div className='text-muted pt-2'>
            © {year} Sakshi Singh. All rights reserved.
        </div>
    </div>
  )
}

export default Footer