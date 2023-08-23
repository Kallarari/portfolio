import React from "react";

interface DynamicProps {
  params: {
    id: string;
  };
}
const Dynamic: React.FC<DynamicProps> = ({ params }) => {
  return (
    <div>
      <h1>Dynamic</h1>
      <p>{params.id}</p>
    </div>
  );
};

export default Dynamic;