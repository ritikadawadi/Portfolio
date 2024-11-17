import { Link } from "react-router-dom";


const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Ritika</span>
        👩🏻‍💻
        <br />
        Computer Science & Bioinformatics 
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked with many companies <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Worked hands-on with various technologies & exciting projects.
        </p>
        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Gained valuable experience across multiple companies
      </p>
      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;