import React from 'react';
import Gif from './Gif';

const GifList = ({ gifIds, setSelectedId }) => {
  // const { gifIds, setSelectedId } = props;
  return (
    <div className="gif-list">
      { gifIds.map((gifId) => <Gif gifId={gifId} setSelectedId={setSelectedId} key={gifId} />) }
    </div>
  );
};

export default GifList;
