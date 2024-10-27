const about = {
  title: "About me",
  description: ``,
  favoriteQuote:`"Per aspera ad astra - Through hardships to the stars."`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tiago Silva",
    },
    {
      fieldName: "Experience",
      fieldValue: "6 years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Portuguese",
    },
    {
      fieldName: "Languages",
      fieldValue: "Portuguese and English",
    },
  ],
};

const About = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <blockquote className="text-xl italic font-semibold dark:text-white">
      <svg className="w-8 h-8 text-white/60 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
      </svg>
       <p>{about.favoriteQuote}</p>
      </blockquote>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {about.description}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0">
        {about.info.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center xl:justify-start gap-4"
            >
              <span className="text-white/60">{item.fieldName}</span>
              <span className="text-md">{item.fieldValue}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
