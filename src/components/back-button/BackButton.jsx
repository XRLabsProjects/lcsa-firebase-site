import styles from "./BackButton.module.scss";

import { useNavigate } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";

export default function BackButton({ path }) {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(path);
  };

  return (
    <>
      <div className={styles.backButton} onClick={navigateToPage}>
        <IoMdArrowRoundBack size="25" />
        <p>BACK</p>
      </div>
    </>
  );
}
