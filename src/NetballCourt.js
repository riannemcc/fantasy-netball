import React from 'react'

import './NetballCourt.css'

export function NetballCourt({ children }) {
    return (
        <div className="netball-court">
            <div className="netball-court-children">{children}</div>
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect x="0" y="0" width="100" height="100" stroke="blue" fill="transparent" stroke-width="2" />
                <path d="M 20 0 C 20 25, 80 25, 80 0" stroke="blue" stroke-width="1" fill="transparent"/>
                <line x1="0" y1="33" x2="100" y2="33" stroke="blue" stroke-width="1" />
                <ellipse cx="50" cy="50" rx="6" ry="3" stroke="blue" stroke-width="1" fill="transparent" />
                <line x1="0" y1="67" x2="100" y2="67" stroke="blue" stroke-width="1" />
                <path d="M 20 100 C 20 75, 80 75, 80 100" stroke="blue" stroke-width="1" fill="transparent"/>
            </svg>
        </div>
    )
} 
