
const about ={
    title:'About me',
    description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    info: [
      {
        fieldName:'Name',
        fieldValue:'Tiago Silva'
      },
      {
        fieldName:'Experience',
        fieldValue:'5 years'
      },
      {
        fieldName:'Nationality',
        fieldValue:'Portuguese'
      },
      {
        fieldName:'Languages',
        fieldValue:'Portuguese and English'
      },
    ]
  };
  
const About = () => {
  return (
    <div className="flex flex-col gap-[30px]">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
            {about.info.map((item, index) =>{
                return(
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-md">{item.fieldValue}</span>
                    </li>
                );
            })}
        </ul>
    </div>
  )
}

export default About