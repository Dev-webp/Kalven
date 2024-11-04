import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Count.css';

const CounterGrid = () => {
  const counters = [
    { id: 2, title: "Top Talent Employees", endValue: 44, icon: <img src="/employee.png" alt="Top Talent Employees" style={{ width: 60, height: 60 }} /> },
    { id: 2, title: "Happy Clients", endValue: 44, icon: <img src="/partnership.png" alt="Happy Clients" style={{ width: 60, height: 60 }} /> },
    { id: 3, title: "Awards Won", endValue: 44, icon: <img src="/success.png" alt="Awards Won" style={{ width: 60, height: 60 }} /> },
    { id: 4, title: "Global Campuses", endValue: 44, icon: <img src="/global-connection.png" alt="Global Campuses" style={{ width: 60, height: 60 }} /> }

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
