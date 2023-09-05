import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { nanoid } from "nanoid";
import { Message } from "../lib/validators/message";
type ChatInputProps = {
  className: string;
};

const ChatInput = ({ className }: ChatInputProps) => {
  const [input, setInput] = useState("");
  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (message: Message) => {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({messages:[message]}),
      });
    },
  });

  return (
    <div className={cn(`border-t border-primary-content`, className)}>
      <TextareaAutosize
        rows={2}
        maxRows={4}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            const message: Message = {
              id: nanoid(),
              isUserMessage: true,
              text: input,
            };

            sendMessage(message);
          }
        }}
        value={input}
        autoFocus
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="peer disabled:opacity-50  resize-none block pr-14 px-2 w-full border-0 bg-zinc-100  py-1.5 text-primary  text-sm sm:leading-6"
      />
    </div>
  );
};

export default ChatInput;
