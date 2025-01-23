interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '🧠 Neurosurgical E-log',
    description: `A secure and private neurosurgical case log designed for surgeons to post, plan, share, and analyze their cases. The system, developed for the Sri Chithra Thirunal Institute of Medical Science, incorporates a detailed range of neurosurgical fields and features a multipurpose search tool. Developed using Python, Web.py framework, SQLite3, HTML5, CSS3, JavaScript, jQuery, and Ajax.and Ajax.`,
    imgSrc: '/static/images/elog.png',
    href: 'https://github.com/rishinrahim/Project-NeuroSurgical-eLog',
  },
]

export default projectsData
