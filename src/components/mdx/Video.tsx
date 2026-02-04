import React from "react";
import styled from "styled-components";

const VideoTag = styled.video`
  width: 100%;
  max-width: 800px;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0;
  margin: 20px 0;
`;

interface VideoProps {
  src: string;
  title?: string;
}

const Video = ({ src, title }: VideoProps) => {
  return <VideoTag src={src} title={title} autoPlay loop muted playsInline controls={false} />;
};

export default Video;
