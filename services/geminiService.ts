import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFashionAdvice = async (occasion: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      Você é um consultor de moda especializado e sofisticado da loja 'ADRINE STORY' em Angola.
      A loja vende saltos finos, sandálias modernas e socas elegantes.
      
      Seu objetivo é sugerir o calçado ideal baseado na ocasião informada pelo usuário.
      
      Diretrizes:
      1. Seja elegante, polido e use linguagem acolhedora (Português de Angola/Brasil).
      2. Recomende explicitamente um dos nossos tipos de produto (Salto Fino, Sandália ou Soca).
      3. Explique brevemente o porquê da escolha combinando com o look.
      4. Mencione que temos entrega imediata em Luanda por 2.000 Kz.
      5. Finalize convidando para ver o catálogo.
      
      Mantenha a resposta curta (máximo 3 frases).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: `O cliente perguntou: "Tenho o seguinte evento/ocasião: ${occasion}. O que devo calçar?"`,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, estou ajustando meus sapatos no momento. Tente novamente!";
  } catch (error) {
    console.error("Error fetching fashion advice:", error);
    return "Nossa consultora virtual está indisponível no momento. Mas garantimos que qualquer escolha na Adrine Story será elegante!";
  }
};