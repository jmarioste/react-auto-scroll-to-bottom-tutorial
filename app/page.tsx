"use client";
import MessageList, { Message } from "@/components/MessageList";
// use faker to generate random messages
import { faker } from "@faker-js/faker";
import { useState } from "react";

export default function Home() {
  // state to track the messages, ideally the messages should come from the backend api.
  const [messages, setMessages] = useState<Message[]>([]);

  // handler to add a random message using faker
  function addRandomMessage(event: React.MouseEvent<HTMLButtonElement>): void {
    const newMessage: Message = {
      id: faker.string.nanoid(),
      body: faker.lorem.lines(faker.number.int({ min: 1, max: 3 })),
      date: new Date(),
      from: {
        displayName: faker.person.firstName(),
        image: faker.image.urlLoremFlickr({ category: "people" }),
      },
    };
    // set the new messages
    setMessages([...messages, newMessage]);
  }

  return (
    <main className="p-24">
      <div className="w-full">
        <button
          onClick={addRandomMessage}
          className="bg-violet-100 text-violet-500 px-4 py-2 rounded-md "
        >
          Add random message
        </button>
        <div className="my-2 w-full">
          <MessageList messages={messages} />
        </div>
      </div>
    </main>
  );
}
