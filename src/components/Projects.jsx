const Projects = () => {
    const projects = [
        {
            imgLink : `https://cdn.dribbble.com/userupload/13217976/file/original-c9f041ecad063a46101b72206ae5aefa.jpg?resize=752x&vertical=center`,
            projectLink : `https://neura-chat.netlify.app`,
            projectName : `Neura Chat`
        },
        {
            imgLink : `https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/378/827/datas/original.jpg`,
            projectLink : `https://claude-chef.netlify.app/`,
            projectName : `Claude Chef`
        },
        {
            imgLink : `https://www.ledsviti.cz/user/articles/images/steampunk-design-a-sv__tidla.jpg`,
            projectLink : `https://yatinsingh2007.github.io/Project_Capstone_1.0/ProjectSteampunk1.0.html`,
            projectName : `Steampunk World`
        },
        {
            imgLink : `https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/54/25/e8/5425e86c-0752-0b84-cd1b-143d633b5c83/AppIcon-85-220-0-4-2x.png/512x512bb.png`,
            projectLink : `https://yatinsingh2007.github.io/Textutils2.0/`,
            projectName : `TextUtils`
        },
        {
            imgLink : `https://cdn.sanity.io/images/anl9abaw/production/b66ffc7f38a5fcbd048d5b7f701167a0d373544e-1920x1280.png?w=3840&q=75&fit=clip&auto=format`,
            projectLink : `https://calculatoryatin.netlify.app`,
            projectName : `Calculator`
        }
    ]
  return (
    <>
        <main className="p-4">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-2 shadow-lg shadow-cyan-500 transition-transform duration-500 hover:scale-105" style = {{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                }}>
                    <div className="hover:rotate-x-3 hover:rotate-y-3">
                        <img src={project.imgLink} alt="project" className="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div className="flex justify-between mt-2">
                    <p className="text-white font-mono p-2">{project.projectName}</p>
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-white font-mono hover:text-black hover:bg-white p-2 rounded-lg transition-colors duration-300">
                        View Project
                    </a>
                    </div>
                </div>
                ))}
            </div>
        </main>

    </>
  )
}
export default Projects
