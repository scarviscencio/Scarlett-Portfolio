import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Process from './sections/Process.jsx';
import SelectedWork from './sections/SelectedWork.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import ContactDialog from './components/ContactDialog.jsx';
import ProjectDialog from './components/ProjectDialog.jsx';

export default function App() {
  const [dialog, setDialog] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const openContact = () => setDialog('contact');
  const openProject = (project) => { setActiveProject(project); setDialog('project'); };
  const closeDialog = () => setDialog(null);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar onContact={openContact} />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Process />
        <SelectedWork onProject={openProject} />
        <About />
        <Contact onContact={openContact} />
      </main>
      {dialog === 'contact' && <ContactDialog onClose={closeDialog} />}
      {dialog === 'project' && <ProjectDialog project={activeProject} onClose={closeDialog} onContact={openContact} />}
    </>
  );
}
