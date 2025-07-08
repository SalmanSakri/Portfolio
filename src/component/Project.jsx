import React from 'react'
import "../style/Project.css"

const Project = () => {

  const projectData = [
    {
      title: "Survey Form",
      description: `Designed and developed a user-friendly and visually appealing survey form for collecting valuable feedback and data. `,
      imageUrl: "https://global.discourse-cdn.com/freecodecamp/optimized/4X/d/1/b/d1be47e75bf643f77b46e6f21fc3026c83f68232_2_474x500.jpeg",
      githubLink: "",
      liveDemoLink: "https://surveyy-form.vercel.app"
    },

    {
      title: "Meet App",
      description: "Built secure application with JWT authentication. Created OTP-based email authentication flow with Nodemailer. Implemented CRUD operations for meeting scheduling with MERN Stack.",
      imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubLink: "https://github.com/SalmanSakri/Auth-Banckend",
      liveDemoLink: "https://meet-in-the-middle-app.netlify.app"
    },
  ];

  return (

    <section className='project' id='project'>
      <h2 className='ProjectMe numberCount'>Projects</h2>
      <div className='project-container'>
        {projectData.map((item, index) => (
          <div className="project-card" key={index}>
            <img src={item.imageUrl} alt="" className="project-image" height={"180px"} width={"100%"} />
            <div className="project-details">
              <h3 className="project-title">{item.title}</h3>
              <p className="project-description">{item.description}</p>
              <div className="project-links">
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className='project-links-a'>
                  GitHub
                </a>
                <a href={item.liveDemoLink} target="_blank" rel="noopener noreferrer" className='project-links-a2'>
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


  )
}

export default Project