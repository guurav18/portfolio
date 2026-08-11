import React from 'react';
import { Linkedin, Github, Code2 } from 'lucide-react';

export const HuggingFaceSVG = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`hf-icon-svg ${className}`}
    style={{ display: 'block' }}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-7.9 6.2c.4-.4 1-.4 1.4 0 1.7 1.7 4.3 1.7 6 0 .4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-2.5 2.5-6.5 2.5-9 0-.4-.4-.4-1 0-1.4z" />
  </svg>
);

const SocialIcon = ({ name, size = 18, className = "" }) => {
  switch (name.toLowerCase()) {
    case 'linkedin':
      return <Linkedin size={size} className={className} />;
    case 'github':
      return <Github size={size} className={className} />;
    case 'leetcode':
      return <Code2 size={size} className={className} />;
    case 'hugging face':
    case 'huggingface':
      return <HuggingFaceSVG size={size} className={className} />;
    default:
      return <Code2 size={size} className={className} />;
  }
};

export default SocialIcon;
