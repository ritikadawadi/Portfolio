
import {  skills, experiences } from "../constants";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className="head-text">
        Hello, <br></br> I'm <span className='purple-gradient_text font-semibold
        drop-shadow'>
          Ritika Dawadi</span></h1>

          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
            Highly motivated junior undergraduate student pursuing a degree in Computer Science with a minor in Bioinformatics. I bring a strong foundation in technical skills, complemented by hands-on project experience and proven leadership in both academic and professional environments. Passionate about computational biology, front-end, and data analysis, I thrive at the intersection of technology and life sciences. 
            <br></br>
            Beyond academics, I enjoy exploring new ideas through reading, expressing creativity through painting, and deepening my understanding of the world through data-driven insights.
            </p>
          </div>

          <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>A Glimpse of my Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      
    </section>
  )
}

export default About
