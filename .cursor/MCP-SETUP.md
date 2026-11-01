# MCP setup for this project

Copy `.cursor/mcp.json.example` to `.cursor/mcp.json` (gitignored). Restart Cursor after edits.

Official Exa reference (fetched 2026-08-27): [exa.ai/docs/reference/exa-mcp](https://exa.ai/docs/reference/exa-mcp)

---

## Exa MCP (web search + page fetch)

Exa is a **Cursor client** tool for live web search and page fetches. It does **not** replace RealScout, Follow Up Boss, or Calendly — those stay native.

### Fastest path

Install from the [Cursor Marketplace listing for Exa](https://cursor.com/marketplace/exa), then sign in to Exa in the browser (OAuth).

### Manual config (`~/.cursor/mcp.json` or project `.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "exa": {
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```

Default tools (no query param needed):

| Tool | Use |
| --- | --- |
| `web_search_exa` | Web search with clean content |
| `web_fetch_exa` | Fetch URL(s) as markdown |

Optional tools via `?tools=` on the MCP URL:

| Tool | Use |
| --- | --- |
| `web_search_advanced_exa` | Filters, dates, domains, highlights |
| `agent_run` | Multi-step Exa Agent (usage-based; needs OAuth or API key) |

Enable defaults plus advanced + agent:

```
https://mcp.exa.ai/mcp?tools=web_search_exa,web_fetch_exa,web_search_advanced_exa,agent_run
```

### Auth (current as of 2026-08-27)

- Hosted MCP works on Exa’s **free plan** for casual use — no key required.
- **OAuth:** Cursor opens a browser to your Exa account on first connect. Manage at [dashboard.exa.ai](https://dashboard.exa.ai).
- **API key (optional):** lifts rate limits and is the production path. Get a key at [dashboard.exa.ai/api-keys](https://dashboard.exa.ai/api-keys).

```json
{
  "mcpServers": {
    "exa": {
      "url": "https://mcp.exa.ai/mcp",
      "headers": {
        "x-api-key": "${env:EXA_API_KEY}"
      }
    }
  }
}
```

Do not commit a real key. If `EXA_API_KEY` is unset, omit the `headers` block so free-plan OAuth still works.

Fallback if the client cannot speak remote MCP: `npx -y mcp-remote https://mcp.exa.ai/mcp`, or local `npx -y exa-mcp-server` with `EXA_API_KEY`.

### Troubleshooting

- Tools missing: restart Cursor after saving `mcp.json`.
- HTTP 429: add `x-api-key` from the dashboard.
- Endpoint: `https://mcp.exa.ai/mcp` (streamable HTTP; GET/HEAD may return 405).

---

## Notion MCP (configured in `.cursor/mcp.json`)

The **Notion MCP server** is installed via `mcp.json`. To finish setup:

### 0. Create your local config (if needed)

- If **`.cursor/mcp.json`** is missing, copy from the template:
  - **Windows:** `copy .cursor\mcp.json.example .cursor\mcp.json`
  - **macOS/Linux:** `cp .cursor/mcp.json.example .cursor/mcp.json`
- Your real `mcp.json` is in `.gitignore` so the token is never committed.

### 1. Create a Notion integration

1. Go to [Notion → Integrations](https://www.notion.so/profile/integrations).
2. Click **New integration**.
3. Name it (e.g. "Cursor MCP"), pick a workspace, and set capabilities (e.g. "Read content", "Update content", "Insert content" as needed).
4. Copy the **Internal Integration Secret** (starts with `ntn_` or `secret_`).

### 2. Connect pages/databases to the integration

- Open each Notion page or database you want Cursor to use.
- Click **⋯** (top right) → **Connections** → **Connect to** → choose your integration.
- Without this step, the MCP will not see those pages or databases.

### 3. Add your token to MCP config

- Open **`.cursor/mcp.json`** (create from `mcp.json.example` if needed).
- Replace `YOUR_NOTION_INTEGRATION_TOKEN` with your integration secret. Keep the surrounding quotes, e.g. `"Bearer secret_xxxx..."`.

### 4. Restart Cursor

- Quit Cursor completely and reopen the project so the MCP server loads.

### 5. Verify

- In chat, try: **Search my Notion for [a page name]** or **Find my tasks database**.
- If the Notion plugin tools appear and return results, the integration is working.

**Security:** `.cursor/mcp.json` is in `.gitignore` so your token is never committed. The repo only has `.cursor/mcp.json.example` as a template.

---

## Adding more MCP servers

Edit **`.cursor/mcp.json`** and add entries under `mcpServers`. Then restart Cursor.

## Notion plugin vs Notion MCP

- **Cursor Notion plugin** (Settings → Extensions): Uses Cursor’s own Notion connection; you sign in with your Notion account.
- **Notion MCP** (`mcp.json`): Uses a Notion **integration** and token; you control which pages/databases are shared via “Connect to integration.”

You can use one or both. The MCP gives the AI direct API-style access to the pages/databases you connect to the integration.
