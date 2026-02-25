import AdmissionsHero from '../components/admissions/AdmissionsHero';
import ProcessSection from '../components/admissions/ProcessSection';
import ImportantDates from '../components/admissions/ImportantDates';
import TuitionAndScholarships from '../components/admissions/TuitionAndScholarships';
import AdmissionsFAQ from '../components/admissions/AdmissionsFAQ';
import AdmissionsCTA from '../components/admissions/AdmissionsCTA';

const Admissions = () => {
    return (
        <main>
            <AdmissionsHero />
            <ProcessSection />
            <ImportantDates />
            <TuitionAndScholarships />
            <AdmissionsFAQ />
            <AdmissionsCTA />
        </main>
    );
};

export default Admissions;
