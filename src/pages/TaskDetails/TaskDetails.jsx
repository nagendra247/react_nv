import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TaskDetails.css';

const taskData = {
  '1': {
    counter: {
      title: 'Counter Application',
      difficulty: 'Easy',
      estimatedTime: '30 minutes',
      description: 'The Task Counter is a simple React application that allows users to increment and decrement a numerical counter. This task is designed to help learners understand the fundamentals of state management in React. Users will interact with buttons to increase, decrease, or reset the counter value, showcasing the dynamic updates of the UI in response to user actions.',
      img: 'https://daveceddia.com/images/counter-plain.png',
      approaches: [
        `State Management:

Use the useState hook to manage the counter's value.
Initialize the state with a default value (e.g., 0).` ,
        `Event Handlers:

Create functions to handle incrementing, decrementing, and resetting the counter.` ,
        `Component Structure:

A single functional component to keep the structure simple and focused.
Render buttons for increment, decrement, and reset alongside the counter display.` ,
        `Conditional Logic:

Prevent the counter from going below a certain value (e.g., 0) if needed.` ,
        `Styling:

Add basic CSS to style the buttons and counter display for better usability and visual appeal.`

      ],
      functionality: [
        'when click on + button the counter will increase by 1',
        'when clic on -  button the counter will deacrease by 1',
        'If value is 0 and click on -  button the counter will not decrease'
      ],
      solution: `
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};`
    },
    'color-changer': {
      title: 'Color Changer',
      difficulty: 'Easy',
      estimatedTime: '20 minutes',
      description: 'Create a div that changes background color when clicking a button',
      img: '/color-change.png',
      approaches: [
        'Use useState to store the current color',

        'Update color state on button click'
      ],
      functionality: [
        'when click on button the color of div changes to the red',
        'when click again on that the color changes to white',
        'if div color is white then button text is "change to red" else "change to white"'
      ],
      solution: `
             will be available soon

`
    },
    'word-Char': {
      title: 'word-char count',
      difficulty: 'Easy',
      estimatedTime: '20 minutes',
      description: 'Create a input field and below that we to headings for word and character',
      img: '/word-count.png',
      approaches: [
        'Use useState to store the current color',

        'Update color state on button click'
      ],
      functionality: [
        'when user start typing in that input field',
        'we have to dynamically show the number of word and character inside the input field at that time',
        'if click on backspace the one char deleted from input field from last no. of char and word updated"',
        'if click on clear then text inside the input field goes vanished',
        'if click on the upper case then text inside the input field change into upper case'
      ],
      solution: `
             will be available soon
        `
    },
    'color-generator': {
      title: 'Generate color',
      difficulty: 'Easy',
      estimatedTime: '30 minutes',
      description: 'Generate a color on tha basis of RGB value enter inside the input fields',
      img: '/col-generator.png',
      approaches: [
        `1. Set up the component structure
Create a functional React component, e.g., ColorGenerator.
Use state to manage the RGB values and the displayed color.` ,
        `2. Define state variables
Use useState hooks to store the red, green, and blue values.
Add another state variable for the generated color (e.g., backgroundColor).` ,
        `3. Create input fields
Add three input fields for red, green, and blue values.
Use onChange event handlers to update the corresponding state variables when the user inputs values.
Ensure the input type is number and set min to 0 and max to 255 to constrain the range.` ,
        `4. Implement the "Generate Color" button
Add a button with an onClick event handler.
When clicked, update the backgroundColor state variable to the new RGB value.` ,
        `5. Display the generated color
Add a container whose background color is dynamically updated based on the backgroundColor state.` ,
        `6. Show the current RGB value
Display the current RGB color value (rgb(r, g, b)) below the container.` ,
        `7. Add validation
Validate the inputs to ensure the values are within the range of 0–255.
Display error messages or reset invalid values to default (e.g., 0).`


      ],
      functionality: [
        'can not enter a number more than 255 in input field , if then show alrt when generate button is click',
        'can not enter a number less then 0 , if then show a alert when click on generate button',
        'when use click on generate button , a div below that change its background according to that RGB value',

      ],
      solution: `
             will be available soon
        `
    }
    // Add more tasks here...
  }
};

const TaskDetails = () => {
  const { topicId, taskId } = useParams();
  const [showSolution, setShowSolution] = useState(false);

  const task = taskData[topicId]?.[taskId];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(task.solution);
    alert('Solution copied to clipboard!');
  };

  if (!task) {
    return (
      <div className="task-not-found">
        <h2>Task not found</h2>
        <p>The requested task does not exist.</p>
      </div>
    );
  }

  return (
    <div className="task-details">
      <h1 className="task-title">{task.title}</h1>

      <div className="task-info">
        <span className="difficulty">Difficulty: {task.difficulty}</span>
        <span className="time">Estimated Time: {task.estimatedTime}</span>
      </div>

      <section className="task-section">
        <h2>Description</h2>
        <p>{task.description}</p>
      </section>
      <section className='task-section'>
        <h2>User interface</h2>
        <img src={task.img} alt='counter-task' />
      </section>

      <section className="task-section">
        <h2>Functionality</h2>
        <ul>
          {task.functionality.map((knowledge, index) => (
            <li key={index}>{knowledge}</li>
          ))}
        </ul>
      </section>

      <section className="task-section">
        <h2>Approaches</h2>
        <ul>
          {task.approaches.map((approach, index) => (
            <li key={index}>{approach}</li>
          ))}
        </ul>
      </section>



      <div className="solution-section">
        <button
          className="show-solution-btn"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>

        {showSolution && (
          <div className="solution-container">
            <div className="solution-header">
              <h2>Solution</h2>
              <button className="copy-btn" onClick={copyToClipboard}>
                Copy Code
              </button>
            </div>
            <pre className="solution-code">
              <code>{task.solution}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskDetails;