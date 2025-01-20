import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Practice.css';

const topics = [
  { 
    id: 1, 
    name: 'useState', 
    description: 'State management in functional components',
    tasks: [
      { id: 'counter', title: 'Counter Application', difficulty: 'Easy' },
      { id: 'color-changer', title: 'Color Changer', difficulty: 'Easy' },
      { id: 'form', title: 'Form Handling', difficulty: 'Medium' },
      { id: 'todo', title: 'Todo List', difficulty: 'Medium' }
    ]
  },
  { 
    id: 2, 
    name: 'useEffect', 
    description: 'Side effects in React components',
    tasks: [
      { id: 'data-fetch', title: 'Data Fetching', difficulty: 'Medium' },
      { id: 'window-resize', title: 'Window Resize', difficulty: 'Easy' },
      { id: 'timer', title: 'Timer Application', difficulty: 'Medium' }
    ]
  },
  { 
    id: 3, 
    name: 'useRef', 
    description: 'Accessing and manipulating DOM elements',
    tasks: [
      { id: 'focus-input', title: 'Focus Input', difficulty: 'Easy' },
      { id: 'scroll-to-element', title: 'Scroll to Element', difficulty: 'Medium' },
      { id: 'store-previous-value', title: 'Store Previous Value', difficulty: 'Medium' }
    ]
  },
  { 
    id: 4, 
    name: 'Routing', 
    description: 'Navigation and routing in React applications',
    tasks: [
      { id: 'basic-routing', title: 'Basic Routing', difficulty: 'Easy' },
      { id: 'nested-routes', title: 'Nested Routes', difficulty: 'Medium' },
      { id: 'protected-routes', title: 'Protected Routes', difficulty: 'Hard' }
    ]
  },
  { 
    id: 5, 
    name: 'props', 
    description: 'Passing data between components',
    tasks: [
      { id: 'basic-props', title: 'Basic Props', difficulty: 'Easy' },
      { id: 'props-validation', title: 'Props Validation', difficulty: 'Medium' },
      { id: 'default-props', title: 'Default Props', difficulty: 'Medium' }
    ]
  },
  { 
    id: 6, 
    name: 'context API', 
    description: 'Managing global state with Context API',
    tasks: [
      { id: 'basic-context', title: 'Basic Context', difficulty: 'Easy' },
      { id: 'context-with-reducer', title: 'Context with Reducer', difficulty: 'Medium' },
      { id: 'context-performance', title: 'Context Performance Optimization', difficulty: 'Hard' }
    ]
  }

  // ... other topics remain the same
];

const Practice = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="practice-container">
      <div className="practice-header">
        <h1 className="practice-title">Practice React</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search topics..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="topics-grid">
        {filteredTopics.map(topic => (
          <div 
            key={topic.id} 
            className="topic-card"
            onClick={() => navigate(`/practice/topic/${topic.id}`)}
          >
            <h2>{topic.name}</h2>
            <p>{topic.description}</p>
            <div className="arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice;