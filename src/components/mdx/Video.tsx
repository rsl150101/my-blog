import React from "react";
import styled from "styled-components";

const VideoTag = styled.video`
  width: auto;
  max-width: 100%;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  margin: 0;

  max-height: 600px;
  height: auto;
  object-fit: contain;
`;

interface VideoProps {
  src: string;
  title?: string;
}

const Video = ({ src, title }: VideoProps) => {
  return <VideoTag src={src} title={title} autoPlay loop muted playsInline controls={false} />;
};

export default Video;
