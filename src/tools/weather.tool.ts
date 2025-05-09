import { Injectable } from '@nestjs/common';
import { Tool, Context } from '@rekog/mcp-nest';
import { z } from 'zod';
import axios from 'axios';

@Injectable()
@Tool({
  name: 'previsao_do_tempo',
  description: 'Obtém a previsão do tempo para uma cidade específica.',
  parameters: z.object({
    cidade: z.string().describe('Nome da cidade para obter a previsão do tempo.'),
  }),
})
export class WeatherTool {
  async run({ cidade }: { cidade: string }, context: Context) {
    const API_KEY = 'SUA_CHAVE_OPENWEATHERMAP';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      cidade,
    )}&appid=${API_KEY}&units=metric&lang=pt_br`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      return {
        content: [
          {
            type: 'text',
            text: `Previsão para ${data.name}:
- Temperatura: ${data.main.temp}°C
- Sensação térmica: ${data.main.feels_like}°C
- Descrição: ${data.weather[0].description}
- Umidade: ${data.main.humidity}%`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: 'Erro ao obter a previsão do tempo. Verifique o nome da cidade e tente novamente.',
          },
        ],
      };
    }
  }
}
