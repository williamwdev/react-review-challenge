import React from 'react';

/** The Challenge: Create Components in React
 * Define the child component in JSX
 * Define props of icon, label and number in the child component
 * Use the child component numerous times in the provided parent component and pass in varying data as props
 */

 
// Child Component
function StatCard(props) {
  return (
    <div className="stat-card">
      <div className="stat-line">
        <span>{props.icon}</span>
        <strong>{props.label}</strong>
      </div>
      <p>{props.number.toLocaleString()}</p>
    </div>
  );
}

// Parent Component
export default function ParentComponent() {
  return (
    <div className="props-container">
      <h2>Use components and props in React</h2>
      {/* Use child component x4 here */}
      <StatCard icon='👉' label='Pointer' number={3000}/>
      <StatCard icon='⚡' label='Lighning' number={9000}/>
      <StatCard icon='🤙' label='Shaka' number={12345}/>
      <StatCard icon='💎' label='Diamonds' number={42}/>
    </div>
  );
}
