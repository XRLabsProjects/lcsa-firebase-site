import styles from "./OurTeamPage.module.scss";

import BukkyImage from "../../assets/team/Bukky.png";
import AnastasiaImage from "../../assets/team/Anastasia.png";
import AidanImage from "../../assets/team/Aidan.png";
import Navbar from "../../components/navbar/Navbar.jsx";
import RecolouredPage from "../../components/recoloured-page/RecolouredPage.jsx";

const pageColour = "--our-team-colour";

export default function OurTeamPage() {
  return (
    <RecolouredPage pageColour={pageColour}>
      <Navbar />
      <div className={styles.page}>
        <h2>OUR TEAM</h2>
        <div className={styles.teamContainer}>
          <div className={styles.teamMain}>
            <TeamMember
              image={BukkyImage}
              name="Dr Olubukola Tokede"
              role="Project Lead - Life Cycle Assessment"
              information="Dr Olubukola Tokede is a Life Cycle Assessment Certified Practitioner (LCACP), Associate Head of School (International), Deakin University"
              email="olubukola.tokede@deakin.edu.au"
            />
            <TeamMember
              image={AnastasiaImage}
              name="Dr Anastasia Globa"
              role="Project Lead - XR Technology and User Engagement"
              information="Senior Lecturer in Computational Design and Advanced Manufacturing ADP, The University of Sydney"
              email="anastasia.globa@sydney.edu.au"
            />
          </div>
          <div className={styles.teamOther}>
            <TeamMember
              image={AidanImage}
              name="Aidan Walbran"
              role="Web Portal Development"
              information="Freelance XR and Web Developer"
              email="aidan.walbran@sydney.edu.au"
            />
            <TeamMember
              image={AidanImage}
              name="Aidan Walbran"
              role="Web Portal Development"
              information="Freelance XR and Web Developer"
              email="aidan.walbran@sydney.edu.au"
            />
            <TeamMember
              image={AidanImage}
              name="Aidan Walbran"
              role="Web Portal Development"
              information="Freelance XR and Web Developer"
              email="aidan.walbran@sydney.edu.au"
            />
            <TeamMember
              image={AidanImage}
              name="Aidan Walbran"
              role="Web Portal Development"
              information="Freelance XR and Web Developer"
              email="aidan.walbran@sydney.edu.au"
            />
            <TeamMember
              image={AidanImage}
              name="Aidan Walbran"
              role="Web Portal Development"
              information="Freelance XR and Web Developer"
              email="aidan.walbran@sydney.edu.au"
            />
            <TeamMember
              image={AidanImage}
              name="Aidan Walbran"
              role="Web Portal Development"
              information="Freelance XR and Web Developer"
              email="aidan.walbran@sydney.edu.au"
            />
            <TeamMember
              image={AidanImage}
              name="Aidan Walbran"
              role="Web Portal Development"
              information="Freelance XR and Web Developer"
              email="aidan.walbran@sydney.edu.au"
            />
            <TeamMember
              image={AidanImage}
              name="Aidan Walbran"
              role="Web Portal Development"
              information="Freelance XR and Web Developer"
              email="aidan.walbran@sydney.edu.au"
            />
          </div>
        </div>
      </div>
    </RecolouredPage>
  );
}

function TeamMember({ image, name, role, information, email }) {
  return (
    <div className={styles.teamMember}>
      <img src={image} alt={`Picture of ${name}`} />
      <h3>{name}</h3>
      <h3>
        <i>{role}</i>
      </h3>
      <p>{information}</p>
      <p className={styles.emailText}>{email}</p>
    </div>
  );
}
