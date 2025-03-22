
import React, { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "welcome",
    text: "Hi there! How can we help you today?",
    isUser: false,
    timestamp: new Date(),
  },
];

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // First time user sends a message, we need their info
    if (messages.length === 1 && (!name || !email)) {
      toast({
        title: "Please provide your name and email",
        description: "We need this information to get back to you.",
        variant: "destructive",
      });
      return;
    }

    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsSubmitting(true);

    // Simulate sending message to backend
    setTimeout(() => {
      // Auto reply
      const autoReply: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! Our team will get back to you as soon as possible.",
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, autoReply]);
      setIsSubmitting(false);
      
      // In a real implementation, you'd send the message to your backend here
      console.log("Message sent:", {
        name,
        email,
        message: inputValue,
        timestamp: new Date(),
      });
    }, 1000);
  };

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 z-50 rounded-full w-14 h-14 p-0 shadow-lg bg-blue-600 hover:bg-blue-700"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </Button>

      {/* Chat box */}
      <div
        className={cn(
          "fixed bottom-24 right-5 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-xl transition-all duration-300 transform",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        {/* Chat header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="font-semibold">NJoy Communications Support</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleChat}
            className="text-white hover:text-white hover:bg-blue-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* User info (only shown initially) */}
        {messages.length === 1 && (
          <div className="p-4 bg-blue-50">
            <p className="text-sm text-blue-800 mb-2">Please provide your contact information:</p>
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-2"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}

        {/* Messages */}
        <div className="p-4 h-80 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "mb-3 max-w-[80%] p-3 rounded-lg",
                message.isUser
                  ? "ml-auto bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              )}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message here..."
              className="min-h-[60px] resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting || !inputValue.trim()}
              size="icon"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBox;
