import React from "react";
import TimelineItem from "./TimelineItem";
import styled from "styled-components";

export default function Timeline() {
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
