import React from "react";

const MessageParser = ({
  children,
  actions,
}: {
  children: any;
  actions: {
    handleGotIt: () => void;
    handleUserInput: () => void;
  };
}) => {
  const parse = (message: string) => {
    const lowerCaseMessage = message.toLowerCase() 

    if (lowerCaseMessage.includes("got it!")) {
      actions.handleGotIt();
    } else if (lowerCaseMessage.includes("got it!")) {
      actions.handleUserInput();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          parse,
          actions,
        })
      )}
    </div>
  );
};

export default MessageParser;
