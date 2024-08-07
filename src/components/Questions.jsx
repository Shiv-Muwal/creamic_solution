import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {accordionData.map((item) => (
        <Accordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)}>
          <AccordionSummary
            aria-controls={`${item.id}bh-content`}
            id={`${item.id}bh-header`}
          >
            <Typography className="accordion-summary">{item.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
