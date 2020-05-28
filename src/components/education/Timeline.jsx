import React from "react";
import TimelineItem from "./TimelineItem";
<<<<<<< HEAD
import styled from "styled-components";

function Timeline() {
  return (
    <TimelineContainer>
      <TimelineItem />
    </TimelineContainer>
  );
}

const TimelineContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
  }
`;

=======

function Timeline() {
  return (
    <div className="timeline-container">
      <TimelineItem />
    </div>
  );
}

>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92
export default Timeline;
