import { styled } from '@mui/material/styles'; // Ensure correct import
import { Link as LinkComponent } from "react-router-dom";

// Visually hidden input for accessibility
export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
});

// Styled Link component with hover effect
export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: black;
    padding: 1rem; /* Corrected typo here */
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const Input = ""