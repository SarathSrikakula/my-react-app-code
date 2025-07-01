import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  ListItemIcon,
  TextField,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";

// Define an interface for the data structure to ensure type safety
interface StateData {
  state: string;
  stateEffectiveDate: string;
  stateEmployerCode: string;
  bureauId: string;
}

// Dummy data remains the same
const data: StateData[] = [
  {
    state: "AL",
    stateEffectiveDate: "07/01/2025",
    stateEmployerCode: "*******1100",
    bureauId: "917495866",
  },
  {
    state: "CA",
    stateEffectiveDate: "07/01/2025",
    stateEmployerCode: "*******2190",
    bureauId: "102102101",
  },
  {
    state: "FL",
    stateEffectiveDate: "07/01/2025",
    stateEmployerCode: "*******4567",
    bureauId: "202202200",
  },
  {
    state: "MA",
    stateEffectiveDate: "07/01/2025",
    stateEmployerCode: "*******1689",
    bureauId: "301300302",
  },
  {
    state: "PA",
    stateEffectiveDate: "07/01/2025",
    stateEmployerCode: "*******4578",
    bureauId: "403400403",
  },
  {
    state: "RI",
    stateEffectiveDate: "07/01/2025",
    stateEmployerCode: "*******3498",
    bureauId: "500502501",
  },
];

export default function App() {
  // isEditing state is no longer needed as the component will always be in "edit mode"
  // const [isEditing, setIsEditing] = useState(false);

  // Define a consistent icon size
  const iconSize = "1.25rem";

  const handleDeleteClick = (state: string) => {
    console.log("Delete Button clicked for row:", state);
    // In a real application, you would add logic here to delete the row from your state
  };

  return (
    <>
      {/* Styles moved to a style tag, simulating a separate SCSS/CSS file */}
      <style>
        {`
        .main-container {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        .page-section-title {
          display: flex;
          padding: 0.5rem 0.75rem;
          align-items: center;
          gap: 0.25rem;
          align-self: stretch;
          border-radius: 0.25rem;
          background: #F3F9FD;
          margin: 0 0 0.5rem 0;
          justify-content: space-between;
        }

        // @media (max-width: 600px) {
        //   .page-section-title {
        //     padding-top: 1.5rem;
        //     padding-bottom: 1.5rem;
        //     flex-direction: column; /* Stack items vertically on small screens */
        //     align-items: flex-start; /* Align stacked items to the start */
        //   }
        //   .title-typography {
        //     margin-bottom: 1rem;
        //   }
        
        //   .label-on-small {
        //     display: inline;
        //   }
        // }

        // @media (min-width: 600px) {
        //   .page-section-title {
        //     padding-top: 0.5rem;
        //     padding-bottom: 0.5rem;
        //     flex-direction: row; /* Keep items in a row on larger screens */
        //     align-items: center; /* Center items vertically in a row */
        //   }
        //   .title-typography {
        //     margin-bottom: 0;
        //   }
          
        //   .label-on-small {
        //     display: none;
        //   }
        // }

        
          // .state-data-cell {
          //   //font-weight: normal;
          //   border-left: 1px solid #CCC;
          //    box-sizing: border-box;
          // }
        .table-header {
          
           background-color: #5BC0BE;
           font-weight: 600;
           color: #000;
           flex-wrap: nowrap;
          display: 'flex';
          padding: '0.5rem';
          alignItems: 'center';
          gap: '0.25rem';
          flexShrink: 0;
          borderRadius: '0.25rem';
          background: '#5BC0BE';
          color: '#090008';
        }

        .cell-style-header {
          // display: flex;
          // align-items: center;
          // gap: 0;
          // flex-grow: 1;
          // flex-shrink: 0;
          // flex-basis: 0;
          // align-self: stretch;
          // padding:  0.5rem;
          // border-right: 1px solid #CCC;
          // border-bottom: 1px solid #CCC;
          // border-left: 1px solid #CCC;
          display: 'flex';
          alignItems: 'center';
          gap: '0.25rem';
          flex: '1 0 0';
          borderRadius: '0.25rem 0rem 0rem 0rem';
          background: '#5BC0BE';
          height:2.5rem;
          padding:  0.5rem;
        }
          .cell-style-normal-row {
          display: flex;
          align-items: center;
          gap: 0;
          flex-grow: 1;
          flex-shrink: 0;
          flex-basis: 0;
          align-self: stretch;
          padding:  0.5rem;
          //border-right: 1px solid #CCC;
          //border-bottom: 1px solid #CCC;
          //border-left: 1px solid #CCC;
          height:2.5rem
        }
          .cell-style-normal-row-delete {
          display: flex;
          padding: 0.5rem;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          align-self: stretch;
          background: #FAFAFA;
        }
          

        /* Only one scrollable class is needed now, for the editing table */
        .table-body-scrollable-editing {
          max-height: 700px;
          overflow-y: auto;
        }

        .table-row {
          display: flex;
          height: auto;
          align-items: center;
          gap: 0;
          flex-grow: 1;
          flex-shrink: 0;
          flex-basis: 0;
          flex-wrap: wrap;
          align-self: stretch;
          height: 3.5rem; /* Set a fixed height for each row */
          border-left: 1px solid #CCC;
          border-right: 1px solid #CCC;I. 
        }
        .table-row:last-child {
            border-bottom: 1px solid #CCC; /* Add a border at the bottom of the last row */
          }
I. 
        .striped-row-even {
          background-color: #FFF;
        }

        .striped-row-odd {
          background-color: #FAFAFA;
        }

        .action-button-group {
            display: flex;
            gap: 0.5rem;
        }

        .action-button-add {
          display: flex;
          width: 2.5rem;
          height: 2.5rem;
          min-width: unset;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
          border-radius: 0.25rem;
          border: 1px solid #005695;
          background-color: #FFFFFF;
          color: #005695;
        }
        .action-button-add:hover {
          background-color: #005695;
          color: #FFFFFF;
          border-color: #005695;
        }

        .action-button-delete {
          display: flex;
          width: 2.5rem;
          height: 2.5rem;
          min-width: unset;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
          border-radius: 0.25rem;
          background: #F5F5F5;
          background-color: #F5F5F5;
          color: #000000;
          border: none;
        }
        .action-button-delete:hover {
          background-color: #C0CFD8;
          color: #000000;
        }
.text-field {
 display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    align-self: stretch;
    background-color: #FFFFFF;
    border-color: #CCCCCC;
    font-family: 'Lato', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    color: #090C08;
    width: 19.3rem;
    height: 2.5rem;
    box-sizing: border-box;
    padding:0.2rem;
}
//     .text-field {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 0.25rem;
//     align-self: stretch;
// box-sizing: border-box;
//     height: 2.5rem;
//     width: 19.3rem;
//     background-color: #FFFFFF; /* Override background color */
//     font-family: 'Lato', sans-serif; /* Custom font */
//     font-size: 0.875rem; /* Custom font size */
//     font-weight: 400; /* Custom font weight */
//     color: #090C08; /* Text color */
//     width: 100%; /* Make it responsive */
//     box-sizing: border-box; /* Ensure padding and border are included in width/height */
//   }
        /* Removed .edit-save-button-container and .circular-button as they are no longer needed */
        `}
      </style>

      <Box className="main-container">
        {/* Only the editing grid is rendered */}
        <Box>
          <Grid container className="table-header">
            <Grid item xs={2.5} sm={2.5} className="cell-style-header">
              State
            </Grid>
            <Grid item xs={2.5} sm={2.5} className="cell-style-header ">
              State Effective Date
            </Grid>
            <Grid item xs={2.5} sm={2.5} className="cell-style-header ">
              State Employer Code
            </Grid>
            <Grid item xs={2.5} sm={2.5} className="cell-style-header ">
              Bureau ID
            </Grid>
            <Grid item xs={2} sm={2} className="cell-style-header">
              Actions
            </Grid>
          </Grid>

          <Box className="table-body-scrollable-editing">
            {data.map((row, index) => (
              <Grid
                container
                key={index}
                //className={`table-row}`}
                className={`table-row ${
                  index % 2 === 0 ? "striped-row-even" : "striped-row-odd"
                }`}
              >
                <Grid
                  item
                  xs={2.5}
                  sm={2.5}
                  className="cell-style-normal-row state-data-cell"
                >
                  <Box className="label-on-small">State: </Box>
                  {row.state}
                </Grid>
                <Grid item xs={2.5} sm={2.5} className="cell-style-normal-row">
                  <Box className="label-on-small">Effective Date: </Box>
                  {row.stateEffectiveDate}
                </Grid>
                <Grid item xs={2.5} sm={2.5} className="cell-style-normal-row">
                  {/* <TextField
                    inputProps={{ "data-testid": "state-employer-code" }}
                    variant="outlined"
                    className="text-field"
                    defaultValue={row.stateEmployerCode}
                  /> */}
                </Grid>
                <Grid item xs={2.5} sm={2.5} className="cell-style-normal-row">
                  <Box className="label-on-small">Bureau ID: </Box>
                  {row.bureauId}
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={2}
                  className="cell-style-normal-row-delete"
                >
                  <Box className="action-button-group">
                    <Button
                      className="action-button-delete"
                      variant="text"
                      onClick={() => handleDeleteClick(row.state)}
                    >
                      <DeleteOutlineIcon sx={{ fontSize: iconSize }} />
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
