import React from 'react';

const ScrshotList = (props) => {

  const scrshots = props.scrshots.map((scr) => {
    return <img className="screenshots" style={{width:"200px", height: "auto", margin: "20px"}} src={scr} />
  });

  return (
    <div style={{ overflowX: "auto", overflowY: "hidden", width: "100%", height: "390px" }}>
       <div style={{ width: "10000px" }}>
          {scrshots}
       </div>
    </div>
  );
};

export default ScrshotList;
