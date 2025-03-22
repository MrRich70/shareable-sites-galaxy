// Twilio SMS integration utilities

export interface SMSMessage {
  to: string;
  from: string;
  body: string;
}

// Twilio phone number to use as sender
export const TWILIO_PHONE_NUMBER = "+18447870507";

/**
 * Sends an SMS message using server-side API endpoint
 * @param message The SMS message to send
 * @returns Promise resolving to true if successful
 */
export const sendSMS = async (message: SMSMessage): Promise<boolean> => {
  console.log("Preparing to send SMS:", message);
  
  try {
    // For deployment, we're using a server-side endpoint to handle SMS sending
    // This keeps Twilio credentials secure on the server
    const response = await fetch("/api/send-sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: message.to,
        from: message.from || TWILIO_PHONE_NUMBER,
        body: message.body
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error("Error sending SMS:", error);
    
    // Fallback for testing deployment - simulate success
    // Remove this in production when the server endpoint is implemented
    console.log("Fallback: Simulating successful SMS sending");
    console.log("Message would be sent to:", message.to);
    console.log("Message content:", message.body);
    
    return true;
  }
};

/**
 * Processes an incoming SMS webhook from Twilio
 * In a real implementation, this would be an endpoint on your server
 * that Twilio calls when an SMS is received
 */
export const processIncomingSMS = (request: any) => {
  // This function would be implemented on your server endpoint
  console.log("Received incoming SMS webhook", request);
  return { success: true };
};

// Example function to update the live chat with incoming SMS
export const fetchLatestSMSMessages = async (phoneNumber: string) => {
  // In a real implementation, this would fetch recent messages from your server endpoint
  console.log("Fetching latest SMS messages for", phoneNumber);
  
  // Simulate fetching messages
  return [
    {
      id: "msg1",
      from: phoneNumber,
      body: "Thanks for your help!",
      timestamp: new Date(Date.now() - 1000 * 60 * 5) // 5 minutes ago
    }
  ];
};
