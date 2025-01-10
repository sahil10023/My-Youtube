import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className="p-4 md:py-0">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
