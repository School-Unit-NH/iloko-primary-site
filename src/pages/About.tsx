import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import HistorySection from '../components/about/HistorySection';
import LeadershipMessage from '../components/about/LeadershipMessage';
import PhilosophySection from '../components/about/PhilosophySection';

const About = () => {
    return (
        <main>
            <AboutHero />
            <MissionVision />
            <HistorySection />
            <LeadershipMessage />
            <PhilosophySection />
        </main>
    );
};

export default About;
