import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TopicTasks.css';

const topics = {
  1: { 
    name: 'useState',
    tasks: [
      { 
        id: 'counter', 
        title: 'Counter Application', 
        difficulty: 'Easy',
        description: 'Build a counter with increment and decrement functionality'
      },
      { 
        id: 'color-changer', 
        title: 'Color Changer', 
        difficulty: 'Easy',
        description: 'Create a div that changes color on button click'
      },
      { 
        id: 'form', 
        title: 'Form Handling', 
        difficulty: 'Medium',
        description: 'Implement a form with multiple input fields and validation'
      },

      { 
        id: 'word-Char', 
        title: 'word-char count', 
        difficulty: 'easy',
        description: 'Creat a word , char couunt with some additional features'
      },
      { 
        id: 'list-add', 
        title: 'Adding in list', 
        difficulty: 'easy',
        description: 'add the task in the list'
      },
      { 
        id: 'color-generator', 
        title: 'Generate color', 
        difficulty: 'easy',
        description: 'Generate a color on the basis of number in input field'
      },
      { 
        id: 'Task Add', 
        title: 'Adding a task in top and bottom ', 
        difficulty: 'medium',
        description: 'Adding the particular task in top "   "and bottom in the list'
      },
      { 
        id: 'Dice', 
        title: 'Role a dice ', 
        difficulty: 'medium',
        description: 'Role a dice and get one output'
      },
      { 
        id: 'todo', 
        title: 'Todo List', 
        difficulty: 'Medium',
        description: 'Create a todo list with add, delete, and mark complete features'
      },
    ]
  },
  2: {
    name: 'useEffect',
    tasks: [
      { 
        id: 'data-fetch', 
        title: 'Data Fetching', 
        difficulty: 'Medium',
        description: 'Fetch and display data from an API'
      },
      { 
        id: 'window-resize', 
        title: 'Window Resize', 
        difficulty: 'Easy',
        description: 'Track and display window dimensions'
      },
      { 
        id: 'timer', 
        title: 'Timer Application', 
        difficulty: 'Medium',
        description: 'Build a countdown timer with start, pause, and reset'
      }
    ]
  },
  
 
  
};

const TopicTasks = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const topic = topics[topicId];

  if (!topic) {
    return (
      <div className="topic-not-found">
        <h2>Topic not found</h2>
        <p>The requested topic does not exist.</p>
      </div>
    );
  }

  return (
    <div className="topic-tasks-container">
      <h1 className="topic-title">{topic.name} Practice Tasks</h1>
      <div className="tasks-grid">
        {topic.tasks.map(task => (
          <div 
            key={task.id} 
            className="task-card"
            onClick={() => navigate(`/practice/topic/${topicId}/task/${task.id}`)}
          >
            <div className="task-card-header">
              <h2>{task.title}</h2>
              <span className={`difficulty-badge ${task.difficulty.toLowerCase()}`}>
                {task.difficulty}
              </span>
            </div>
            <p>{task.description}</p>
            <div className="arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicTasks;