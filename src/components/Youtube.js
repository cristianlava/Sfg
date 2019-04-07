import React from 'react'

const Youtube = (props) => {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 560,
          height: 315
        }}
        src={props.link}
        frameBorder="0"
      />
    </div>
  );
};

export default Youtube