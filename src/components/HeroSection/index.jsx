import React, { useEffect, useState, useRef } from 'react';
import Button from '../Common/Button';
import './heroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const [isCursorInside, setIsCursorInside] = useState(false);
    const mainContainerRef = useRef(null);

    useEffect(() => {
        function onMouseMove(e) {
            if (mainContainerRef.current && isCursorInside) {
                const rect = mainContainerRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                document.documentElement.style.setProperty("--cursor-x", x + "px");
                document.documentElement.style.setProperty("--cursor-y", y + "px");
            }
        }

        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, [isCursorInside]);

    const onMouseEnter = () => {
        setIsCursorInside(true);
        document.documentElement.style.setProperty("--cursor-size", "220px");
    };

    const onMouseLeave = () => {
        setIsCursorInside(false);
        document.documentElement.style.setProperty("--cursor-x", "0px");
        document.documentElement.style.setProperty("--cursor-y", "0px");
        document.documentElement.style.setProperty("--cursor-size", "32px");
    };

    return (
        <div className='hero-section-wrapper'>

            <div className='flex absolute-center flex-col hero-section max-width'>
                <div className='hero-heading'>
                    SUMMER PROGRAM'24
                </div>
                <div
                    className='main-container'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    ref={mainContainerRef}
                >
                    <div className='layer dark-layer'>
                        <div className='hero-sub-heading'>
                        The Summer Program '24 at IET-VIT is a month-long initiative where our chapter members engage in creating impactful projects addressing real-world problems. Under the guidance of TFD (Team Fourth Dimension) leads, participants utilize their summer productively, collaborating and innovating to deliver solutions both within and beyond the VIT community. This program embodies our commitment to fostering practical skills and making a meaningful difference.
                        </div>
                    </div>
                    <div className={`layer layer-white ${isCursorInside ? 'mask-visible' : 'mask-top-left'}`}>
                        <div className='hero-sub-heading hero-sub-heading-black'>
                           SP'24 at IET-VIT - the ultimate trick to ensure nobody wastes their summer on boring things like vacation or enjoyment! With <b>TFD</b> leads watching every move, anything remotely resembling fun is a no go! Who needs downtime when you can juggle deadlines and frequent meetings? <b>The main takeaway</b>: becoming pros at sleep deprivation and running on <b>TEA</b>🫖!!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
