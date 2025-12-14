import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const STORE_CONTEXT = `
  Você é a assistente virtual exclusiva da 'Cael Fashion Boutique', uma marca de moda feminina de luxo.
  
  DADOS DA MARCA:
  - Nome: Cael Fashion Boutique.
  - Foco: Glamour, Sofisticação, Exclusividade.
  - Produtos: Vestidos de gala, looks Red & Black, Renda branca, Acessórios premium, Óculos de sol.
  - Público: Mulheres que querem se destacar (eventos de luxo, jantares, casual sofisticado).
  - Instagram: @cael_fashion_boutique1
  - WhatsApp: +244 925 412 200.
  - Envio: Nacional (Angola) e Internacional.
  
  DIRETRIZES DE RESPOSTA:
  1. Tom de voz: Luxuoso, confiante, acolhedor e extremamente educado.
  2. Use emojis sofisticados (✨, 🥂, 🖤, 💎).
  3. Se perguntarem preços, convide para ver o catálogo no WhatsApp para um atendimento personalizado.
  4. Enfatize a exclusividade das peças.
  5. Objetivo final: Levar a cliente para o WhatsApp +244 925 412 200.
`;

export const getFashionAdvice = async (occasion: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: `O cliente perguntou: "Tenho o seguinte evento/ocasião: ${occasion}. O que devo vestir da Cael Fashion Boutique?"`,
      config: {
        systemInstruction: STORE_CONTEXT + "\nFoque em sugerir um look glamouroso e exclusivo (ex: vestido preto, look vermelho impactante, renda sofisticada).",
        temperature: 0.7,
      }
    });

    return response.text || "Um momento, estou selecionando a peça perfeita para você brilhar.";
  } catch (error) {
    console.error("Error fetching fashion advice:", error);
    return "Nossa consultora de estilo está atendendo uma cliente exclusiva. Tente novamente em instantes.";
  }
};

export const sendMessageToAgent = async (message: string, history: string[]): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Histórico da conversa:\n${history.join('\n')}\n\nCliente: ${message}`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: STORE_CONTEXT,
        temperature: 0.7,
      }
    });

    return response.text || "Perdão, não compreendi. Poderia repetir?";
  } catch (error) {
    console.error("Error in chat agent:", error);
    return "Para um atendimento imediato e exclusivo, por favor, chame no WhatsApp +244 925 412 200.";
  }
};