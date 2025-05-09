# 🌤️ MCP Weather Server

This project is a **tool server based on the Model Context Protocol (MCP)** that provides real-time weather forecasts. It is built with **NestJS** and can be integrated into any AI agent or assistant that supports MCP tools (such as Claude, OpenDevin, etc.).

## 🚀 Features

- 🌎 Get current weather data by city name
- 🧠 Exposed as a Tool via the Model Context Protocol
- 📦 Built with NestJS + MCP SDK
- ⚙️ STDIO-compatible for use with [MCP Inspector](https://modelcontextprotocol.io/tools/inspector)

## 🧱 Architecture

- **NestJS**: TypeScript backend framework
- **OpenWeatherMap API**: for real-time weather data
- **MCP SDK**: to expose tools in a standardized way
- **Zod**: for input validation

## 📦 Installation

```bash
git clone https://github.com/Alanmc021/mcp-server.git
cd mcp-server
npm install
