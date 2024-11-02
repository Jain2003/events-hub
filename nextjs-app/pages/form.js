import { useState } from 'react';
import styles from '../styles/EventForm.module.css'; // Import CSS module

export default function EventForm() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ label: '', type: 'text' });

  const addQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({ label: '', type: 'text' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted form data:', questions);
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log('All completed');
    // Logic needs to be added
  }

  return (
    <div className={styles.outerContainer}>
        {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>EventHub</h1>
          <button className={styles.signInButton}>
            👤 Sign In
          </button>
        </div>
      </header>
        <div className={styles.container}>
      <h2 className={styles.title}>Event Registration Form</h2>

      {/* Display added questions and inputs */}
      <form onSubmit={handleSubmit} className={styles.form}>
        {questions.map((question, index) => (
          <div key={index} className={styles.question}>
            <label className={styles.label}>{question.label}</label>
            <input type={question.type} name={question.label} required className={styles.input} />
          </div>
        ))}

        {/* Form to add a new question */}
      <div className={styles.addQuestion}>
        <input
          type="text"
          placeholder="Question label"
          value={newQuestion.label}
          onChange={(e) => setNewQuestion({ ...newQuestion, label: e.target.value })}
          className={styles.input}
        />
        <select
          value={newQuestion.type}
          onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value })}
          className={styles.select}
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
        </select>
        <button onClick={addQuestion} className={styles.addButton}>Add Question</button>
      </div>

        <button type="submit" className={styles.submitButton} onClick={sendData}>Submit Registration</button>
      </form>

    </div>
    </div>
  );
}
