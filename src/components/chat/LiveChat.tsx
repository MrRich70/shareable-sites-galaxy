import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { sendSMS, SMSMessage, TWILIO_PHONE_NUMBER } from "@/utils/sms-utils";

// Support phone number to send SMS to
const SUPPORT_PHONE_NUMBER = "+12175219814"; // Updated with customer's cell phone number

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        text: "Hi there! How can we help you today? This is a live chat and your message will be forwarded to our support team.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);
  
  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  // Mark as read when opening chat
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
    }
  }, [isOpen]);
  
  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsSending(true);
    
    try {
      // Prepare SMS message for Twilio
      const smsMessage: SMSMessage = {
        to: SUPPORT_PHONE_NUMBER,
        from: TWILIO_PHONE_NUMBER, // This will be used by the server
        body: `Web Chat: ${message}`
      };
      
      // Send message to support via SMS
      const success = await sendSMS(smsMessage);
      
      if (success) {
        // Simulate automated response
        const autoResponse: Message = {
          id: `auto-${Date.now()}`,
          text: "Thanks for your message! Our team has been notified and will respond shortly.",
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, autoResponse]);
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat toggle button */}
      <Button
        onClick={toggleChat}
        className={`rounded-full w-14 h-14 shadow-lg ${hasUnread ? 'bg-blue-600' : 'bg-blue-500'} hover:bg-blue-700 text-white p-0 relative`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
        {hasUnread && !isOpen && (
          <span className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4"></span>
        )}
      </Button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden flex flex-col">
          {/* Chat header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Live Chat Support</h3>
            <Button variant="ghost" size="sm" onClick={toggleChat} className="text-white h-8 w-8 p-0">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-3 overflow-y-auto max-h-96 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    msg.isUser
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <div className="border-t p-3 flex items-end gap-2">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="min-h-[80px] resize-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button
              onClick={handleSendMessage}
              disabled={isSending || !message.trim()}
              className="h-10 w-10 p-0"
            >
              {isSending ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
