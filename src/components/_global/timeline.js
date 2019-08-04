import React from 'react';


const Timeline = ({ entries }) => {
    return (
        <div class="timeline">
            {entries.map(entry => <TimelineItem {...entry} />)}
        </div>
    );
}

const TimelineItem = ({ title, content, icon, date } ) => {
    return (
        <div className="timeline-item" id="timeline-example-1">
            <div className="timeline-left">
                <a className={`timeline-icon ${((icon || {}).size ? icon.size : '')}`} href="#timeline-example-1">
                    {(icon || {}).name ? <i className={`icon ${icon.name}`} /> : null}
                </a>
            </div>
            <div className="timeline-content">
                <div className="tile">
                    <p className="tile-subtitle">{title}</p>
                    {content.map(c => (typeof c === 'string' ? <p>{c}</p> : {c}))}
                </div>
            </div>
        </div>
    );
}
 
export default Timeline;