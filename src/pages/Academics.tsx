import AcademicsHero from '../components/academics/AcademicsHero';
import CurriculumOverview from '../components/academics/CurriculumOverview';
import SubjectAreas from '../components/academics/SubjectAreas';
import LearningApproach from '../components/academics/LearningApproach';
import AcademicSupport from '../components/academics/AcademicSupport';
import AcademicCTA from '../components/academics/AcademicCTA';

const Academics = () => {
    return (
        <main>
            <AcademicsHero />
            <CurriculumOverview />
            <SubjectAreas />
            <LearningApproach />
            <AcademicSupport />
            <AcademicCTA />
        </main>
    );
};

export default Academics;
