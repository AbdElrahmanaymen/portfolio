import Welcome from "./components/welcome/welcome";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Testimonials from "./components/testimonials/testimonials";
import Awards from "./components/awards/awards";

export default function Home() {
  return (
    <main>
      <section id="home" className="min-h-screen">
        <Navbar />
        <Welcome />
      </section>
      <section id="testimonials" className="min-h-screen">
        <Testimonials />
      </section>
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>
      <section id="about" className="min-h-screen" >
        <About />
      </section>
      <section id="projects" >
        <Projects />
      </section>
      {/* <section className="min-h-screen">
        <Awards />
      </section> */}
      <Footer />
    </main>
  );
}
