import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaUserTie, FaSmile, FaTrophy, FaGlobe } from 'react-icons/fa'; // Icons for each counter
import './Count.css';

const CounterGrid = () => {
  const counters = [
    { id: 1, title: "Top Talent Employees", endValue: 1500, icon: <FaUserTie /> },
    { id: 2, title: "Happy Clients", endValue: 300, icon: <FaSmile /> },
    { id: 3, title: "Awards Won", endValue: 25, icon: <FaTrophy /> },
    { id: 4, title: "Global Campuses", endValue: 44, icon: <FaGlobe /> }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div className="counter-container" ref={ref}>
      {counters.map((counter) => (
        <div className="counter-grid" key={counter.id}>
          <div className="icon">{counter.icon}</div> 
          <h3>{counter.title}</h3>
          {inView && (
            <CountUp start={0} end={counter.endValue} duration={2.5} separator="," />
          )}
        </div>
      ))}
    </div>
  );
};

export default CounterGrid;
