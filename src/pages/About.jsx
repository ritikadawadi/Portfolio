import { skills, experiences } from "../constants";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Fly from "../models/fly2";
import Loader from "../components/Loader";
import CTA from "../components/CTA";

const About = () => {
  return (
    
    <section>
      {/* Butterfly Animation */}
      <div className="absolute top-0 left-0 w-full h-[500px]">
    <Canvas className="w-full h-full">
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 3]} intensity={1} />
        <Fly />
      </Suspense>
    </Canvas>
</div>
      {/* Main Content */}
      <section className="max-container realtive">
      <h1 className="head-text">
        Hello, <br /> I'm{" "}
        <span className='purple-gradient_text font-semibold drop-shadow'>
          Ritika Dawadi
        </span>
      </h1>
      
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Highly motivated junior undergraduate student pursuing a degree in Computer Science with a minor in Bioinformatics. I bring a strong foundation in technical skills, complemented by hands-on project experience and proven leadership in both academic and professional environments. Passionate about computational biology, front-end, and data analysis, I thrive at the intersection of technology and life sciences.
          <br />
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
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Here's an overview of my professional journey, with experiences that have shaped my skills and growth:
          </p>
        </div>

        {/* Custom Timeline */}
        <div className='timeline'>
          {experiences.map((experience, index) => (
            <div key={experience.company_name} className='timeline-item'>
              <div className='timeline-content'>
                <div
                  className='timeline-icon'
                  style={{ background: experience.iconBg }}
                >
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-8 h-8 object-contain'
                  />
                </div>
                <div className='timeline-details'>
                  <h3 className='text-lg font-semibold'>{experience.title}</h3>
                  <p className='text-sm text-gray-500'>{experience.company_name}</p>
                  <p className='text-xs text-gray-400'>{experience.date}</p>
                  <ul className='mt-3 list-disc ml-5 space-y-2 text-sm text-gray-700'>
                    {experience.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
          <CTA />

            </section>
    </section>
  );
};

export default About;
