// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   Dialog, 
//   DialogTitle, 
//   DialogContent, 
//   TextField, 
//   IconButton, 
//   Box, 
//   Typography, 
//   Paper,
//   CircularProgress
// } from '@mui/material';
// import { Send, Close } from '@mui/icons-material';

// import SERVICES from '../config/services'; // Import the services config

// const ChatInterface = ({ open, onClose }) => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!input.trim() || isLoading) return;

//     const userMessage = { role: 'user', content: input.trim() };
//     const newMessages = [...messages, userMessage];
//     setMessages(newMessages);
//     setInput('');
//     setIsLoading(true);
// try {
//   const response = await fetch('http://localhost:8000/embed', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       messages: newMessages
//     }),
//     // Note: `fetch` does not support timeout or responseType directly
//   });
//     const data = await response.json();
//       console.log('🔍 Raw axios response:', response);
//       console.log('📦 Response data:', response.data);
//       console.log('🏷️ Response data type:', typeof response.data);
//       console.log('📝 Response headers:', response.headers);

//       let assistantContent = 'No response received';

//       // Handle different response formats
//       if (typeof response.data === 'string') {
//         try {
//           // Try to parse as JSON first
//           const jsonData = JSON.parse(response.data);
//           assistantContent = jsonData.content || jsonData.message || jsonData.text || 'No content in response';
//         } catch (parseError) {
//           // If it's not JSON, it might be plain text or streaming data
//           console.log('Response is not JSON, treating as text:', parseError);
          
//           // Check if it's streaming data (contains data: prefixes)
//           if (response.data.includes('data:')) {
//             // Handle streaming response format
//             const lines = response.data.split('\n');
//             let streamedContent = '';
            
//             for (const line of lines) {
//               if (line.startsWith('data: ') && !line.includes('[DONE]')) {
//                 try {
//                   const jsonLine = line.replace('data: ', '');
//                   const parsed = JSON.parse(jsonLine);
//                   if (parsed.choices && parsed.choices[0] && parsed.choices[0].delta && parsed.choices[0].delta.content) {
//                     streamedContent += parsed.choices[0].delta.content;
//                   }
//                 } catch (streamParseError) {
//                   console.log('Could not parse streaming line:', line);
//                 }
//               }
//             }
//             assistantContent = streamedContent || response.data;
//           } else {
//             // Plain text response
//             assistantContent = response.data;
//           }
//         }
//       } else if (typeof response.data === 'object') {
//         // Response is already parsed as JSON object
//         assistantContent = response.data.content || response.data.message || response.data.text || 'No content in response';
//       }

//       const assistantMessage = {
//         role: 'assistant',
//         content: assistantContent
//       };

//       setMessages([...newMessages, assistantMessage]);

//     } catch (error) {
//       console.error('Chat service error:', error);
//       console.error('Error response:', error.response?.data);
//       console.error('Error status:', error.response?.status);
//       console.error('Error code:', error.code);
      
//       // Handle different error scenarios
//       let errorContent = 'Sorry, I encountered an error. Please try again! 😅';
      
//       if (error.code === 'ECONNREFUSED') {
//         errorContent = `Chat service is not available. Please make sure the chat service is running on port 8000`;
//       } else if (error.code === 'ECONNABORTED') {
//         errorContent = 'Request timeout. The chat service is taking too long to respond.';
//       } else if (error.response?.status === 500) {
//         errorContent = 'Chat service is experiencing issues. Please try again later! 🔧';
//       } else if (error.response?.status === 404) {
//         errorContent = 'Chat service endpoint not found. Please check the service configuration.';
//       } else if (error.code === 'ERR_NETWORK') {
//         errorContent = 'Cannot connect to chat service. Make sure it\'s running on port 8000.';
//       }
      
//       const errorMessage = {
//         role: 'assistant',
//         content: errorContent
//       };
//       setMessages([...newMessages, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Dialog 
//       open={open} 
//       onClose={onClose} 
//       maxWidth="md" 
//       fullWidth
//       PaperProps={{
//         style: {
//           height: '80vh',
//           display: 'flex',
//           flexDirection: 'column'
//         }
//       }}
//     >
//       <DialogTitle sx={{ 
//         display: 'flex', 
//         justifyContent: 'space-between', 
//         alignItems: 'center',
//         background: '#f18a53',
//         color: 'white'
//       }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <img 
//             src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746049614/monk.png" 
//             alt="Trip Monk" 
//             style={{ height: '30px' }}
//           />
//           <Typography variant="h6">Trip Monk Assistant</Typography>
//           <Typography variant="caption" sx={{ opacity: 0.8, fontSize: '10px' }}>
//             (via localhost:8000)
//           </Typography>
//         </Box>
//         <IconButton onClick={onClose} sx={{ color: 'white' }}>
//           <Close />
//         </IconButton>
//       </DialogTitle>
      
//       <DialogContent sx={{ 
//         flex: 1, 
//         display: 'flex', 
//         flexDirection: 'column',
//         padding: 0
//       }}>
//         {/* Messages Container */}
//         <Box sx={{ 
//           flex: 1, 
//           overflowY: 'auto', 
//           padding: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 1
//         }}>
//           {messages.length === 0 ? (
//             <Box sx={{ 
//               display: 'flex', 
//               flexDirection: 'column', 
//               alignItems: 'center', 
//               justifyContent: 'center',
//               height: '100%',
//               textAlign: 'center'
//             }}>
//               <img 
//                 src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746049614/monk.png" 
//                 alt="Trip Monk" 
//                 style={{ height: '80px', marginBottom: '16px' }}
//               />
//               <Typography variant="h6" gutterBottom>
//                 Welcome to Trip Monk! ✈️
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Ask me about flights, schedules, or travel information!
//               </Typography>
//               <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
//                 Powered by Chat Service on localhost:8000
//               </Typography>
//             </Box>
//           ) : (
//             messages.map((message, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   display: 'flex',
//                   justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
//                   mb: 1
//                 }}
//               >
//                 <Paper
//                   elevation={1}
//                   sx={{
//                     padding: 2,
//                     maxWidth: '70%',
//                     backgroundColor: message.role === 'user' ? '#f18a53' : '#f5f5f5',
//                     color: message.role === 'user' ? 'white' : 'black',
//                   }}
//                 >
//                   <Typography variant="body2" style={{ whiteSpace: 'pre-wrap' }}>
//                     {message.content}
//                   </Typography>
//                 </Paper>
//               </Box>
//             ))
//           )}
          
//           {isLoading && (
//             <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1 }}>
//               <Paper elevation={1} sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <CircularProgress size={16} />
//                   <Typography variant="body2">Trip Monk is thinking...</Typography>
//                 </Box>
//               </Paper>
//             </Box>
//           )}
          
//           <div ref={messagesEndRef} />
//         </Box>

//         {/* Input Container */}
//         <Box sx={{ 
//           borderTop: '1px solid #e0e0e0', 
//           padding: 2 
//         }}>
//           <form onSubmit={handleSubmit}>
//             <Box sx={{ display: 'flex', gap: 1 }}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Ask me about flights, schedules, or travel information..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 disabled={isLoading}
//                 size="small"
//               />
//               <IconButton 
//                 type="submit" 
//                 disabled={isLoading || !input.trim()}
//                 sx={{ 
//                   backgroundColor: '#f18a53',
//                   color: 'white',
//                   '&:hover': {
//                     backgroundColor: '#e07b47'
//                   }
//                 }}
//               >
//                 <Send />
//               </IconButton>
//             </Box>
//           </form>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ChatInterface;
import React, { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Box,
  Typography,
  Paper,
  CircularProgress
} from '@mui/material';
import { Send, Close } from '@mui/icons-material';

import SERVICES from '../config/services'; // Adjust if needed

const ChatInterface = ({ open, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim() || isLoading) return;

//     const userMessage = { role: 'user', content: input.trim() };
//     const newMessages = [...messages, userMessage];
//     setMessages(newMessages);
//     setInput('');
//     setIsLoading(true);

//     console.log('🔍 Sending to /embed:', newMessages);

//     try {
//       const response = await fetch('http://localhost:8000/embed', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ messages: newMessages })
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('📦 Response from backend:', data);

//       const assistantMessage = {
//         role: 'assistant',
//         content: data.content || data.message || data.text || 'No content in response'
//       };

//       setMessages([...newMessages, assistantMessage]);

//     } catch (error) {
//       console.error('❌ Chat service error:', error);

//       let errorContent = 'Sorry, I encountered an error. Please try again! 😅';

//       if (error.message.includes('ECONNREFUSED')) {
//         errorContent = 'Chat service is not available. Please make sure it is running.';
//       } else if (error.message.includes('500')) {
//         errorContent = 'Chat service is experiencing issues. Try again later! 🔧';
//       } else if (error.message.includes('404')) {
//         errorContent = 'Chat service endpoint not found.';
//       }

//       setMessages([...newMessages, {
//         role: 'assistant',
//         content: errorContent
//       }]);

//     } finally {
//       setIsLoading(false);
//     }
//   };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!input.trim() || isLoading) return;

  const userMessage = { role: 'user', content: input.trim() };
  const newMessages = [...messages, userMessage];
  setMessages(newMessages);
  setInput('');
  setIsLoading(true);

  const lastMessage = newMessages[newMessages.length - 1];

  console.log('🔍 Sending to /embed:', { text: lastMessage.content });

  try {
    const response = await fetch('http://localhost:8000/embed', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: lastMessage.content }) // ✅ MATCHES FASTAPI!
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('📦 Response from backend:', data);

    const assistantMessage = {
      role: 'assistant',
      content: JSON.stringify(data.embedding) || 'No embedding received'
    };

    setMessages([...newMessages, assistantMessage]);

  } catch (error) {
    console.error('❌ Chat service error:', error);

    let errorContent = 'Sorry, I encountered an error. Please try again! 😅';

    if (error.message.includes('ECONNREFUSED')) {
      errorContent = 'Chat service is not available. Please make sure it is running.';
    } else if (error.message.includes('500')) {
      errorContent = 'Chat service is experiencing issues. Try again later! 🔧';
    } else if (error.message.includes('404')) {
      errorContent = 'Chat service endpoint not found.';
    }

    setMessages([...newMessages, {
      role: 'assistant',
      content: errorContent
    }]);

  } finally {
    setIsLoading(false);
  }
};

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          height: '80vh',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <DialogTitle sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#f18a53',
        color: 'white'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img
            src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746049614/monk.png"
            alt="Trip Monk"
            style={{ height: '30px' }}
          />
          <Typography variant="h6">Trip Monk Assistant</Typography>
          <Typography variant="caption" sx={{ opacity: 0.8, fontSize: '10px' }}>
            (via localhost:8000)
          </Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: 0
      }}>
        <Box sx={{
          flex: 1,
          overflowY: 'auto',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}>
          {messages.length === 0 ? (
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              textAlign: 'center'
            }}>
              <img
                src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746049614/monk.png"
                alt="Trip Monk"
                style={{ height: '80px', marginBottom: '16px' }}
              />
              <Typography variant="h6" gutterBottom>
                Welcome to Trip Monk! ✈️
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ask me about flights, schedules, or travel information!
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                Powered by Chat Service on localhost:8000
              </Typography>
            </Box>
          ) : (
            messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                  mb: 1
                }}
              >
                <Paper
                  elevation={1}
                  sx={{
                    padding: 2,
                    maxWidth: '70%',
                    backgroundColor: message.role === 'user' ? '#f18a53' : '#f5f5f5',
                    color: message.role === 'user' ? 'white' : 'black',
                  }}
                >
                  <Typography variant="body2" style={{ whiteSpace: 'pre-wrap' }}>
                    {message.content}
                  </Typography>
                </Paper>
              </Box>
            ))
          )}

          {isLoading && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1 }}>
              <Paper elevation={1} sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={16} />
                  <Typography variant="body2">Trip Monk is thinking...</Typography>
                </Box>
              </Paper>
            </Box>
          )}

          <div ref={messagesEndRef} />
        </Box>

        <Box sx={{
          borderTop: '1px solid #e0e0e0',
          padding: 2
        }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Ask me about flights, schedules, or travel information..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                size="small"
              />
              <IconButton
                type="submit"
                disabled={isLoading || !input.trim()}
                sx={{
                  backgroundColor: '#f18a53',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#e07b47'
                  }
                }}
              >
                <Send />
              </IconButton>
            </Box>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ChatInterface;
