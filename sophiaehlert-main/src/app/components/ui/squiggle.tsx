interface SquiggleProps {
  color?: string;
  className?: string;
}

export function Squiggle({ color = "#e8a559", className = "" }: SquiggleProps) {
  return (
    <svg 
      className={`absolute -bottom-2 left-0 w-full h-3 ${className}`}
      viewBox="0 0 200 12" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path 
        d="M2 6C20 3 40 9 60 6C80 3 100 9 120 6C140 3 160 9 180 6C185 5 190 7 198 6" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

interface HighlightProps {
  children: React.ReactNode;
  color?: string;
  rotation?: number;
}

export function Highlight({ children, color = "#e8a559", rotation = -1 }: HighlightProps) {
  return (
    <span className="relative inline-block px-2 py-1">
      <span className="relative z-10">{children}</span>
      <span 
        className="absolute inset-0 rounded"
        style={{ 
          backgroundColor: `${color}25`,
          transform: `rotate(${rotation}deg)`
        }}
      />
    </span>
  );
}

interface HandDrawnCircleProps {
  className?: string;
  color?: string;
}

export function HandDrawnCircle({ className = "", color = "#c86f4d" }: HandDrawnCircleProps) {
  return (
    <svg 
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 140 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M10 35C10 20 25 8 45 8C65 8 80 15 90 25C100 35 105 45 105 50C105 55 100 60 90 60C80 60 65 55 45 55C25 55 10 50 10 35Z" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeDasharray="4 4"
        opacity="0.5"
      />
    </svg>
  );
}

interface HandDrawnArrowProps {
  className?: string;
  color?: string;
}

export function HandDrawnArrow({ className = "", color = "#e8a559" }: HandDrawnArrowProps) {
  return (
    <svg 
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 80 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M5 10C20 8 35 12 45 18C55 24 65 32 70 40M70 40L65 35M70 40L68 32" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
