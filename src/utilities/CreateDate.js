import React from "react";

const CreateDate = (timestamp) => {
  const newDate = new Date(timestamp);
  const date = newDate.toLocaleDateString();

  return date;
};

export default CreateDate;
