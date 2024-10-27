import { ScrollArea } from "./ui/scroll-area";
import { calculateTime } from "@/lib/utils";

const myEducation = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Determined and driven, I started my journey into software engineering while working full-time and studying at night, all while becoming a new parent. From early on, I balanced these responsibilities to prepare for university, facing and overcoming challenges that taught me resilience, time management, and perseverance. This experience shaped me into a committed learner and problem-solver, skills that I carry with me into every aspect of my professional life.",
  items: [
    {
      institution: "Instituto Politécnico do Cávado e do Ave",
      degree: "Application Development Master Degree",
      duration: calculateTime("2017-09-28","2021-04-13"),
    },
    {
      institution: "Instituto Politécnico do Cávado e do Ave",
      degree: "Computer Systems Engineering",
      duration: calculateTime("2011-09-26","2017-07-30"),
    },
    {
      institution: "ADLML",
      degree: "Trainer's pedagogical skills",
      duration: calculateTime("2015-01-12","2015-03-12"),
    },
    {
      institution: "Rumos",
      degree: "Java Programmer",
      duration: calculateTime("2016-11-22", "2017-05-28"),
    },
  ],
};

const Education = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold ">{myEducation.title}</h3>
    <p className="max-w-[auto] text-white/60 mx-auto xl:mx-0 text-justify">
      {myEducation.description}
    </p>
    <ScrollArea className="h-[500px] py-4">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {myEducation.items.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg: items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>
              <h3 className="text.xl max-w-[auto] min-h-[60px] text-center lg:text-left">
                {item.degree}
              </h3>
              <div className=" flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.institution}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  </div>
  );
};

export default Education;
