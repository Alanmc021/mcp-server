import { Module } from '@nestjs/common';
import { McpModule } from '@rekog/mcp-nest';
import { WeatherTool } from './tools/weather.tool';

@Module({
  imports: [
    McpModule.forRoot({
      name: 'weather-mcp-server',
      version: '1.0.0',
    }),
  ],
  providers: [WeatherTool],
})
export class AppModule {}
