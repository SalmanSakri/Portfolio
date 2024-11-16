import React from 'react'
import "../style/Project.css"

const Project = () => {

  const projectData = [
    {
      title: "Survey Form",
      description: `Designed and developed a user-friendly and visually appealing survey form for collecting valuable feedback and data. `,
      imageUrl: "https://global.discourse-cdn.com/freecodecamp/optimized/4X/d/1/b/d1be47e75bf643f77b46e6f21fc3026c83f68232_2_474x500.jpeg",
      githubLink: "",
      liveDemoLink: "https://survey-form-6daaclauz-salmansakris-projects.vercel.app/"
    },

    // {
    //   title: "TO-DO List",
    //   description: "Designed and developed a fully functional ToDo List application using React JS",
    //   imageUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--mAEj9aTD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9lpc5065tedctt6lh3fx.jpg",
    //   githubLink: "https://github.com/your-username/your-repo",
    //   liveDemoLink: "https://fluffy-swan-51beb8.netlify.app/"
    // },
    // {
    //   title: "Crud Operation",
    //   description:`The primary purpose of this app is to manage employee data. Users can perform CRUD
    //   operations on employee records.`,
    //   imageUrl: "https://www.codestoresolutions.com/wp-content/uploads/2023/08/crud.webp",
    //   githubLink: "https://github.com/your-username/your-repo",
    //   liveDemoLink: "https://salmancrud.vercel.app/"
    // },
    // {
    //   title: "Quiz App",
    //   description: "",
    //   imageUrl: "	https://file.forms.app/sitefile/how-to-create-an-online-quiz-with-formsapp-cover.jpg",
    //   githubLink: "https://github.com/your-username/your-repo",
    //   liveDemoLink: "https://quizepp.netlify.app/"
    // },
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