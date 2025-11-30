import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const STORE_CONTEXT = `
  Você é a 'Adrine', a assistente virtual elegante da loja 'ADRINE STORY' em Luanda, Angola.
  
  DADOS DA LOJA:
  - Produtos: Saltos finos, sandálias, socas de luxo, scarpins.
  - Faixa de Preço: Entre 12.000 Kz a 35.000 Kz.
  - Entrega: Taxa fixa de 2.000 Kz para toda Luanda (Entrega Imediata).
  - WhatsApp para compra: +244 950 124 243.
  - Estilo: Elegante, sofisticado, feminino.
  
  DIRETRIZES DE RESPOSTA:
  1. Seja muito educada, use emojis elegantes (✨, 👠, 🛍️).
  2. Responda perguntas sobre moda, preços e entregas.
  3. Se perguntarem preço exato de um item específico que você não vê, dê a faixa de preço média e peça para mandar foto no WhatsApp.
  4. Sempre tente direcionar para o WhatsApp para fechar a venda.
  5. Mantenha respostas curtas e úteis.
`;

export const getFashionAdvice = async (occasion: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: `O cliente perguntou: "Tenho o seguinte evento/ocasião: ${occasion}. O que devo calçar?"`,
      config: {
        systemInstruction: STORE_CONTEXT + "\nFoque em sugerir o calçado ideal para a ocasião.",
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, estou ajustando meus sapatos no momento. Tente novamente!";
  } catch (error) {
    console.error("Error fetching fashion advice:", error);
    return "Nossa consultora virtual está indisponível no momento.";
  }
};

export const sendMessageToAgent = async (message: string, history: string[]): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    // Format history for context context, though strictly generateContent is stateless, 
    // passing strictly previous context helps simple turns.
    const prompt = `Histórico da conversa:\n${history.join('\n')}\n\nCliente: ${message}`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: STORE_CONTEXT,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não entendi. Pode repetir?";
  } catch (error) {
    console.error("Error in chat agent:", error);
    return "Estou com muitas clientes agora. Por favor, chame no WhatsApp +244 950 124 243.";
  }
};