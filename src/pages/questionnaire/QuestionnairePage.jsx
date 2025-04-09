import styles from "./QuestionnairePage.module.scss";
import { useState } from "react";
import axios from "axios";
import { CreateUrl } from "../../data/serverInfo.js";
import { useNavigate } from "react-router-dom";

import WriteIcon from "../../assets/icons/WRITE.svg";
import BackButton from "../../components/back-button/BackButton.jsx";

const likertMax = 7;
const ageGroupInputDefault = "18-20";
const lcaExperienceInputDefault = "NO KNOWLEDGE";
const genderInputDefault = "PREFER NOT TO SAY";

export default function QuestionnairePage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.backButtonContainer}>
          <BackButton path="/lcsa-data" />
        </div>
        <div className={styles.pageContainer}>
          <div className={styles.topbar}>
            <img
              src={WriteIcon}
              className={styles.writeIcon}
              alt="Write icon"
            />
            <p className={styles.questionnaireTitle}>
              LCSA TRACKER APP QUESTIONNAIRE
            </p>
          </div>
          <div className={styles.formContainer}>
            <Questionnaire />
          </div>
        </div>
      </div>
    </>
  );
}

const Questionnaire = () => {
  const navigate = useNavigate();

  const [ageConfirmation, setAgeConfirmation] = useState(false);
  const [ageGroup, setAgeGroup] = useState(ageGroupInputDefault);
  const [experienceWithLCA, setExperienceWithLCA] = useState(
    lcaExperienceInputDefault,
  );
  const [gender, setGender] = useState(genderInputDefault);
  const [easyToUseScale, setEasyToUseScale] = useState(-1);
  const [quickToLearnScale, setQuickToLearnScale] = useState(-1);
  const [engagingScale, setEngagingScale] = useState(-1);
  const [enjoymentScale, setEnjoymentScale] = useState(-1);
  const [limitationsAndBarriers, setLimitationsAndBarriers] = useState("");
  const [opportunitiesAndPotential, setOpportunitiesAndPotential] =
    useState("");
  const [formConfirmation, setFormConfirmation] = useState(false);

  const [promptAgeConfirmation, setPromptAgeConfirmation] = useState(false);
  const [promptEasyToUse, setPromptEasyToUse] = useState(false);
  const [promptQuickToLearn, setPromptQuickToLearn] = useState(false);
  const [promptEngaging, setPromptEngaging] = useState(false);
  const [promptEnjoyment, setPromptEnjoyment] = useState(false);
  const [promptFormConfirmation, setPromptFormConfirmation] = useState(false);
  const [promptFailedToSendData, setPromptFailedToSendData] = useState(false);

  const time = new Date();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const allResponsesValid = validateRequiredResponses();

    if (allResponsesValid) {
      setPromptFailedToSendData(false);
      const response = await addDataToDatabase({
        ageGroup,
        experienceWithLCA,
        gender,
        easyToUseScale,
        quickToLearnScale,
        engagingScale,
        enjoymentScale,
        limitationsAndBarriers,
        opportunitiesAndPotential,
        time,
      });

      if (response === true) {
        navigate("/lcsa-data");
      } else {
        setPromptFailedToSendData(true);
      }
    }
  };

  const validateRequiredResponses = () => {
    setPromptAgeConfirmation(!ageConfirmation);
    setPromptEasyToUse(easyToUseScale < 0);
    setPromptQuickToLearn(quickToLearnScale < 0);
    setPromptEngaging(engagingScale < 0);
    setPromptEnjoyment(enjoymentScale < 0);
    setPromptFormConfirmation(!formConfirmation);

    // this is required because setting states does not update immediately
    return (
      ageConfirmation &&
      easyToUseScale > 0 &&
      quickToLearnScale > 0 &&
      engagingScale > 0 &&
      enjoymentScale > 0 &&
      formConfirmation
    );
  };

  const addDataToDatabase = async (data) => {
    try {
      const response = await axios.post(
        `${CreateUrl()}/api/addLcsaQuestionnaireData`,
        data,
      );
      return true;
    } catch (err) {
      console.error("Error sending data");
    }
    return false;
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* req - radio button - Please confirm that you are older than 18 years. */}
        <div className={styles.ageConfirmationContainer}>
          <label htmlFor="ageConfirmation" className={styles.checkboxField}>
            <input
              type="checkbox"
              id="ageConfirmation"
              name="ageConfirmation"
              value="ageConfirmation"
              onChange={(e) => {
                setAgeConfirmation(e.target.checked);
              }}
            />
            <span className={styles.checkmark}>
              <span className={styles.checkmarkSelected}></span>
            </span>
            <span className={styles.required}>*</span>{" "}
            <span className={styles.questionText}>
              <i>Please confirm that you are older than 18 years of age.</i>
            </span>
          </label>
          <span
            className={styles.incorrectSubmissionPrompt}
            style={{ display: promptAgeConfirmation ? "block" : "none" }}
          >
            * Please confirm your age
          </span>
        </div>

        {/* req - radio buttons - What is your age group? */}
        <div className={styles.dropdownField}>
          <label htmlFor="ageGroup">
            <span className={styles.required}>*</span> What is your age group?
          </label>
          <select
            id="ageGroup"
            name="ageGroup"
            defaultValue={ageGroupInputDefault}
            onChange={(e) => {
              setAgeGroup(e.target.value);
            }}
          >
            <option value="18-20">18-20</option>
            <option value="21-30">21-30</option>
            <option value="31-40">31-40</option>
            <option value="41-50">41-50</option>
            <option value="51-60">51-60</option>
            <option value="61-70">61-70</option>
            <option value="71+">71+</option>
          </select>
        </div>

        {/* req - radio buttons - What is your experience with Life Cycle Analysis? */}
        <div className={styles.dropdownField}>
          <label htmlFor="experienceWithLCA">
            <span className={styles.required}>*</span> What is your experience
            with Life Cycle Analysis?
          </label>
          <select
            id="experienceWithLCA"
            name="experienceWithLCA"
            defaultValue={lcaExperienceInputDefault}
            onChange={(e) => {
              setExperienceWithLCA(e.target.value);
            }}
          >
            <option value="NO KNOWLEDGE">No Knowledge</option>
            <option value="NOVICE">Novice</option>
            <option value="BEGINNER">Beginner</option>
            <option value="INTERMEDIATE">Intermediate</option>
            <option value="ADVANCED">Advanced</option>
            <option value="EXPERT">Expert</option>
          </select>
        </div>

        {/* radio button - What is your gender? - default prefer not to say */}
        <div className={styles.dropdownField}>
          <label htmlFor="gender">What is your gender</label>
          <select
            id="gender"
            name="gender"
            defaultValue={genderInputDefault}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="PREFER NOT TO SAY">Prefer not to say</option>
            <option value="FEMALE">Female</option>
            <option value="MALE">Male</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        {/* req - radio buttons - I thought the LCSA Tracker app was easy to use. */}
        <LikertScale
          name="easyToUse"
          question="I thought the LCSA Tracker app was easy to use."
          setNewLikertState={setEasyToUseScale}
          unansweredPrompt={promptEasyToUse}
        />

        {/* req - radio buttons - I would imagine that most people would learn to use this system very quickly. */}
        <LikertScale
          name="quickToLearn"
          question="I would imagine that most people would learn to use this system very quickly."
          setNewLikertState={setQuickToLearnScale}
          unansweredPrompt={promptQuickToLearn}
        />

        {/* req - radio buttons - The LCSA Tracker app and dynamic interactions were engaging. */}
        <LikertScale
          name="engaging"
          question="The LCSA Tracker app and dynamic interactions were engaging."
          setNewLikertState={setEngagingScale}
          unansweredPrompt={promptEngaging}
        />

        {/* req - radio buttons - I enjoyed using this tool */}
        <LikertScale
          name="enjoyment"
          question="I enjoyed using this tool."
          setNewLikertState={setEnjoymentScale}
          unansweredPrompt={promptEnjoyment}
        />

        <br />

        {/* text field - what limitations and barriers do you see in using the LCSA Tracker tool? */}
        <div className={styles.textField}>
          <label htmlFor="limitationsAndBarriers">
            What limitations and barriers do you see in using the LCSA Tracker
            tool?
          </label>
          <textarea
            id="limitationsAndBarriers"
            placeholder="Type Here"
            onChange={(e) => {
              setLimitationsAndBarriers(e.target.value);
            }}
          ></textarea>
        </div>

        {/* text field - what opportunities and potential do you see in using the LCSA Tracker tool? */}
        <div className={styles.textField}>
          <label htmlFor="opportunitiesAndPotential">
            What opportunities and potential do you see in using the LCSA
            Tracker tool?
          </label>
          <textarea
            id="opportunitiesAndPotential"
            placeholder="Type Here"
            onChange={(e) => {
              setOpportunitiesAndPotential(e.target.value);
            }}
          ></textarea>
        </div>

        <div className={styles.confirmationContainer}>
          <label htmlFor="formConfirmation" className={styles.checkboxField}>
            <input
              type="checkbox"
              id="formConfirmation"
              name="formConfirmation"
              value="confirmation"
              onChange={(e) => {
                setFormConfirmation(e.target.checked);
              }}
            />
            <span className={styles.checkmark}>
              <span className={styles.checkmarkSelected}></span>
            </span>
            <span className={styles.required}>*</span>{" "}
            <span className={styles.questionText}>
              <i>I confirm that the information I have provided is correct</i>
            </span>
          </label>
        </div>
        <span
          className={styles.incorrectSubmissionPrompt}
          style={{ display: promptFormConfirmation ? "block" : "none" }}
        >
          * You must complete all fields marked with an asterisk
        </span>
        <span
          className={styles.incorrectSubmissionPrompt}
          style={{ display: promptFailedToSendData ? "block" : "none" }}
        >
          * Failed to send data to server. Please try again shortly.
        </span>
        <div className={styles.submitButtonContainer}>
          <button className={styles.submitButton} type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

function CustomRadioButton({ name, value, onChange }) {
  const uniqueName = `${name}-${value}`;
  return (
    <div className={styles.checkboxContainer}>
      <label htmlFor={uniqueName} className={styles.checkboxField}>
        <input
          type="radio"
          id={uniqueName}
          name={name}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <span className={styles.checkmark}>
          <span className={styles.checkmarkSelected}></span>
        </span>
        <p>{value}</p>
      </label>
    </div>
  );
}

function LikertScale({ name, question, setNewLikertState, unansweredPrompt }) {
  const updateLikertState = (val) => {
    setNewLikertState(val);
  };

  const likertOptions = [];
  for (let i = 1; i <= likertMax; i++) {
    likertOptions.push(
      <CustomRadioButton
        key={`${name}-${i}`}
        name={name}
        value={i}
        // TODO: pass in value i to updateLikertState
        onChange={updateLikertState}
      />,
    );
  }

  return (
    <div className={styles.likertScaleList}>
      <label>
        <span className={styles.required}>*</span> {question}
      </label>
      <div className={styles.likertListOptions}>{likertOptions}</div>
      <span
        className={styles.incorrectSubmissionPrompt}
        style={{ display: unansweredPrompt ? "block" : "none" }}
      >
        * Please select an option
      </span>
    </div>
  );
}
