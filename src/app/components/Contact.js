
const contactData = [
    {title: 'Adresse mail', 
    icon:<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"/>
    </svg>,
    value: ['ekelasikelasi@gmail.com']
    },
    {title: 'Téléphone',
     icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
       <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z"/>
     </svg>,
     value: ['+243 814 183 698', '+243 995 507 260', '+243 817 126 558']
    },
    {title: 'Nos bureaux',
     icon:<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
     <path fillRule="evenodd" d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd"/>
     </svg>,
     value: ['4000 Avenue de la justice commune de la gombe']
    }
]

export default function Contact(){
    return (
        <div className="w-[100%] flex flex-col justify-center items-center bg-[#eeeff3] md:pt-20 md:pb-12">
            <h3 className="md:text-[27px] text-center font-bold text-[25px]">Contactez-nous</h3>
            <div className="flex gap-10 py-10">
               {contactData.map((i, index) => {
                 return(
                    <div key={index} className="w-[20vw] px-1 bg-[#f6f7f8] flex flex-col gap-3 justify-center items-center py-5 rounded-lg">
                        <div>
                            {i.icon}
                        </div>
                        <div className="font-medium">{i.title}</div>
                        <div className="grid">
                          {i.value.map((e, index) => {
                            return(
                              <span key={index} className="font-light text-center text-[15px]">{e}</span>
                            )
                          })}
                        </div>
                    </div>
                 )
               })} 
            </div>
        </div>
    )
}