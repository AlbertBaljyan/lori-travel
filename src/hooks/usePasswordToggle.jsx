import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const usePasswordToggle = () => {
  const [visibility, setVisibility] = useState(false);

  const Icon = (
    <FontAwesomeIcon
      icon={visibility ? faEyeSlash : faEye}
      onClick={() => setVisibility(!visibility)}
    />
  );

  const InputType = visibility ? "text" : "password";

  return [InputType, Icon];
};

export default usePasswordToggle;
