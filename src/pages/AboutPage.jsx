import '../styles/about.css';
import About from '../components/about';

function AboutPage() {
  return (
    <>
      <div className="project-cards">
            <About/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3Qr0TU4Rj7k?si=Xz4V5XDvL9N4VAxm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div >
    </>
  );
}

export default AboutPage;