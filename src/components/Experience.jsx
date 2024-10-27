import { ScrollArea } from "./ui/scroll-area";
import { calculateTime } from "@/lib/utils";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: `I am a Software Engineer with over 20 years of experience, beginning my career as a Software and Computer Technician. At Checkmarx since 2018, I’ve advanced to a Tier 4 Support Engineer role, focusing on troubleshooting complex issues, backporting features, and fixing bugs. My journey also includes a significant role at FARFETCH, where I managed high-volume services and modernized legacy systems. I thrive in collaborative environments, leveraging my technical skills to deliver innovative solutions and drive team success.`,
  items: [
    {
      company: "Checkmarx",
      position: "Software Developer",
      duration: "Present",
    },
    {
      company: "Farfetch",
      position: "Software Developer",
      duration: calculateTime("2023-06-01", "2024-03-1"),
      description: `Collaborated with cross-functional teams and product managers to drive a high-volume service managing thousands of daily transactions.
Oversaw a legacy service handling client orders and refund calculations, navigating challenges of limited documentation and a complex roadmap. Led the migration to .NET Core and improved unit test coverage and performance.
Designed APIs for new functionalities, gaining key insights into ensuring code reliability and testability in a regulated environment.`,
    },
    {
      company: "Checkmarx",
      position: "Software Developer",
      duration: calculateTime("2018-10-1", "2023-05-01"),
      description: `Provide technical support to customers by addressing inquiries, troubleshooting, and offering solutions. Collaborate with development and product teams to resolve issues efficiently and fix bugs. Document cases and maintain accurate records. Assist in testing new features, create support documentation, and escalate priority issues for prompt resolution.`,
    },
    {
      company: "Wytec Lda",
      position: "Field Engineer",
      duration: calculateTime("2009-10-1", "2018-09-31"),
      description: `Lead and support a team of four technicians in refurbishing laboratory analyzers, guiding them through the disassembly, validation, repair, and reassembly processes. Ensure each component is thoroughly tested and calibrated to meet quality standards. Once validated, I perform tests to ensure the instruments are fully operational. Additionally, I manage the company's advertisement and oversee all aspects of maintaining a positive company image.`,
    },
    {
      company: "Bitmega",
      position: "Software and Computer Technician",
      duration: calculateTime("2001-2-1", "2008-8-1"),
      description: `Provide technical support for hardware and software, offering external assistance to various companies. Handle the installation and configuration of networks and servers, along with computer assembly. Initially, I focused on computer maintenance and repairs in-store. As I gained experience, I advanced to supporting companies by assembling structured networks and providing software support, including management systems like PHC and SAGE Gespos, while staying ahead in the technical department.`,
    },
  ],
};

const Experience = () => {
  return (
    <div className="flex flex-col gap-[50px] text-center xl:text-left">
      <h3 className="text-4xl font-bold ">{experience.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 xl:max-w-full">
        {experience.description}

      </p>
      <ScrollArea className="h-[600px]">
        <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
          {experience.items.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-[#232329] h-[auto] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg: items-start gap-1"
              >
                <p className="flex items-center gap-3 text-white/60">
                {item.company}
                </p>
                <span className="text-accent">{item.duration}</span>
                <h3 className="text.xl max-w-[260px] min-h-[60px] text-center lg:text-left xl:max-w-[520px]">
                  {item.position}
                </h3>
                <div className="flex items-center gap-3">
                  <p className="text-white/60 text-left">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Experience;
