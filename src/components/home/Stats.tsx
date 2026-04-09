import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { stats } from '../../data/stats';

export const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-10 bg-primary-600">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.prefix}
                {inView && <CountUp end={parseInt(stat.value)} duration={2.5} separator="," />}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
