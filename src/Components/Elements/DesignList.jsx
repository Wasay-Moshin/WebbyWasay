import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState, useEffect, useRef } from 'react';
// import './DesignList.css';

const DesignList = () => {
    const [selected, setSelected] = useState(0);
    const itemsRef = useRef([]);

    const items = [
        { id: 1, description: 'I break down complex user experience problems to create integrity focused solutions that connect billions of people' },
        { id: 2, description: 'Develop technical solutions required to accommodate specific user-facing assets such as [Product or Service]' },
        { id: 3, description: 'Convert graphic designs to usable web images using React JS' },
        { id: 4, description: 'Identify issues, analyzed information and provided solutions to problems' },
        { id: 5, description: 'Multi-task across multiple functions and roles to generate project results and meet deadlines and organizational expectations' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        itemsRef.current.forEach((item) => {
            if (item) {
                observer.observe(item);
            }
        });

        return () => {
            itemsRef.current.forEach((item) => {
                if (item) {
                    observer.unobserve(item);
                }
            });
        };
    }, []);

    return (
        <div className="design-list">
            {items.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`design-item ${selected === index ? 'selected' : ''}`} 
                    onClick={() => setSelected(index)}
                    ref={(el) => (itemsRef.current[index] = el)}
                >
                    <div className="item-number">{`0${item.id}`}</div>
                    <div className="item-content">
                        {/* <div className="item-title">{item.title}</div> */}
                        <div className="item-description">{item.description}</div>
                    </div>
                    <div className="item-arrow">
                        {hover === index ? '↑' : '→'}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DesignList;
