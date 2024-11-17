import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
//import { CTA } from "../components";
import { projects, leadershipRoles } from "../constants";
import Fly from "../models/fly2";

const Projects = () => {
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
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <br></br>
        <span className='purple-gradient_text font-semibold drop-shadow'>
           Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      Over the years, I have worked on a variety of exciting and meaningful projects that showcase my skills and interests.  If any of them catch your attention, feel free to dive into the codebase and share your ideas for improvements. <br />
      You can explore even more projects on my <a href="https://github.com/ritikadawadi" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">GitHub profile</a>!
    </p>


      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-purple-900'
                >
                  Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <div className="py-10">
        <h3 className="subhead-text">Leadership & Extra-Curricular</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          I actively engage beyond academics, showcasing my leadership and collaboration skills through meaningful roles and extracurricular activities.          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {leadershipRoles.map((role, index) => (
            <div key={index} className="role-card">
              <h4 className="text-lg font-bold text-purple-700">{role.title}</h4>
              <p className="text-sm text-gray-500">{role.date}</p>
              <p className="text-sm mt-2 text-gray-700">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className='border-slate-200' />


     

      {/* Uncomment the line below if the CTA component is required */}
      {/* <CTA /> */}
    </section>
    </section>
  );
};

export default Projects;
