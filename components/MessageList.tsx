import React, { useEffect, useRef } from "react";

// 1. Define the data that the component wants to receive.
export type Message = {
  id: string;
  body: string;
  date: Date;
  from: {
    image: string;
    displayName: string;
  };
};

type Props = {
  messages: Message[];
};
/**
 * Simple message list component styled with tailwind CSS classes
 */
const MessageList = ({ messages }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages.length]);
  return (
    // Container
    <div className="h-[400px] w-full overflow-y-auto bg-blue-50 rounded-md px-4 ">
      {messages.map((message) => {
        return (
          // Individual messages
          <div key={message.id} className="flex gap-4 items-center mt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={message.from.image}
              alt={message.from.displayName}
              className="w-16 h-16 flex-shrink-0 rounded-full"
            />
            <p className="bg-blue-100 text-blue-500 p-5 rounded-md">
              {message.body}
            </p>
          </div>
        );
      })}
      <div ref={ref} className="h-5" />
    </div>
  );
};

export default MessageList;
