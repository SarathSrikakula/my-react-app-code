import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Define the common icon size
const iconSize = '1.5rem';

// Create a basic Material-UI theme.
const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif', // Set Inter font as per general instructions
  },
});

function App1() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline provides a consistent baseline for CSS across browsers */}
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh', // Center the buttons vertically on the page
        backgroundColor: '#f0f2f5', // Light background for contrast
        paddingLeft: '1rem', // Add some padding from the left edge of the screen
        gap: '0.5rem', // Add consistent spacing between buttons
      }}>
        {/* Plus Button with inline styles */}
        <Button
          sx={{
            display: 'flex',
            width: '2.5rem', // Set a fixed width to make it square
            height: '2.5rem', // Set a fixed height to match the width
            minWidth: 'unset', // Override MUI's default min-width for buttons
            justifyContent: 'center', // Center content horizontally
            alignItems: 'center',   // Center content vertically
            gap: '0.25rem',
            borderRadius: '0.25rem',
            border: '1px solid #005695',
            backgroundColor: '#FFFFFF',
            color: '#005695',
            // Pseudo-class for hover effect, directly supported by MUI's sx prop
            '&:hover': {
              backgroundColor: '#005695',
              color: '#FFFFFF',
              borderColor: '#005695', // Ensures border color matches background on hover
            },
          }}
          variant="outlined" // 'outlined' variant because it has a border
          onClick={() => console.log("Plus Button clicked!")}
        >
          <AddIcon sx={{ fontSize: iconSize }} />
        </Button>

        {/* Delete Button with inline styles */}
        <Button
          sx={{
            display: 'flex',
            width: '2.5rem', // Set a fixed width to make it square, matching the plus button
            height: '2.5rem', // Set a fixed height to match the width
            minWidth: 'unset', // Override MUI's default min-width for buttons
            justifyContent: 'center', // Center content horizontally
            alignItems: 'center',   // Center content vertically
            gap: '0.25rem',
            borderRadius: '0.25rem',
            background: '#F5F5F5', // Use 'background' for gradient/image, 'backgroundColor' for solid color
            backgroundColor: '#F5F5F5', // Explicitly set background color
            color: '#000000', // Default icon/text color for the delete button (e.g., black)
            '&:hover': {
              backgroundColor: '#C0CFD8',
              color: '#000000', // Ensure color stays consistent on hover, or change if desired
            },
            border: 'none', // Delete button in your spec doesn't have a border, explicitly set to none
          }}
          variant="text"
          onClick={() => console.log("Delete Button clicked!")}
        >
          <DeleteOutlineIcon sx={{ fontSize: iconSize }} />
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App1;
