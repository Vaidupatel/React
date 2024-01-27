import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";
const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel1");
        }}
      >
        <AccordionSummary
          id="panel1-header"
          area-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            excepturi nisi deleniti quia sit quam earum porro quod nihil? Atque,
            illo debitis! Error consequatur dolorem esse, sit reprehenderit
            laboriosam voluptas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel2");
        }}
      >
        <AccordionSummary
          id="panel2-header"
          area-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            excepturi nisi deleniti quia sit quam earum porro quod nihil? Atque,
            illo debitis! Error consequatur dolorem esse, sit reprehenderit
            laboriosam voluptas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel3");
        }}
      >
        <AccordionSummary
          id="panel3-header"
          area-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            excepturi nisi deleniti quia sit quam earum porro quod nihil? Atque,
            illo debitis! Error consequatur dolorem esse, sit reprehenderit
            laboriosam voluptas.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
