import AlumniProfile from "@/components/AlumniProfile";
import AlumniWorkPlace from "@/components/AlumniWorkPlace";
import TopUniversityPartners from "@/components/home/TopUniversityPartners";
import Mentors from "@/components/home/Mentors";
import OneStopSoluion from "@/components/home/OneStopSoluion";
import TrustedBrand from "@/components/home/TrustedBrand";
import WhyChooseMentorsity from "@/components/home/WhyChooseMentorsity";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      {/* <TopUniversityPartners /> */}

      {/* Trusted Brand */}
      <TrustedBrand />

      {/* University Partners */}
      <TopUniversityPartners />

      {/* Courses */}

      {/* Mentors */}
      <Mentors />

      {/* Why Choose Mentorsity */}
      <WhyChooseMentorsity />

      {/* One Stop Solution */}
      <OneStopSoluion />

      {/* Where Our Alumni Work */}
      <AlumniProfile />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
}
