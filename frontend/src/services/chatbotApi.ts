export interface ChatSource { title: string; path: string }
export interface ChatTurn { role: 'user' | 'assistant'; content: string; sources?: ChatSource[] }
export interface ChatReply { answer: string; sources: ChatSource[]; needs_consultation: boolean }

export async function getChatStatus(_signal: AbortSignal): Promise<boolean> {
  return false;
}

export async function sendChat(_message: string, _history: ChatTurn[], _signal: AbortSignal): Promise<ChatReply> {
  throw new Error('The assistant is not configured for the Supabase static deployment.');
}