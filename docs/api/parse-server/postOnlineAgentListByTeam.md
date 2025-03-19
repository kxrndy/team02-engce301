# 📌 Parse Server Function - Post Online Agent List By Team

## 📝 Purpose

This function is used to update the status and information of agents within a specific team.

## 📌 API Information

| Information      | Value                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| **Function URL** | `https://lab-parse-server.cpe-rmutl.net/team02/api/functions/postOnlineAgentListByTeam` |
| **Method**       | `POST`                                                                                  |
| **Content-Type** | `application/json`                                                                      |

## 📝 Headers Request

| Header                     | Description          | Value          |
| -------------------------- | -------------------- | -------------- |
| **X-Parse-Application-Id** | Parse application ID | `wallboardapi` |
| **X-Parse-Master-Key**     | Parse master key     | `wallboardapi` |

## 📝 Params Request

| Name                | Description                                                   | Example Value |
| ------------------- | ------------------------------------------------------------- | ------------- |
| **AgentCode**       | Unique agent code                                             | `9998`        |
| **AgentName**       | Agent display name                                            | `Dev2`        |
| **Team**            | Team ID (0-9)                                                 | `6`           |
| **AgentStatus**     | Current agent status (Refer to [Agent Status](#agent-status)) | `1`           |
| **AgentStatusCode** | Status code (same as `AgentStatus`)                           | `1`           |
| **IsLogin**         | Login mode (Refer to [Login Mode](#login-mode))               | `1`           |

## 📥 Response Example

```json
{
  "result": 9
}
```

## 📊 Response Fields

| Field      | Type     | Description          |
| ---------- | -------- | -------------------- |
| **result** | `string` | Result agent status. |

## 📝 Headers Response

| Header           | Description                 | Value              |
| ---------------- | --------------------------- | ------------------ |
| **Content-Type** | Data response type received | `application/json` |

📊 Result Code Descriptions

| Code | Description                             |
| ---- | --------------------------------------- |
| `0`  | Success: Agent created or deleted.      |
| `1`  | Error: `AgentCode` field required       |
| `2`  | Error: `Team` field required            |
| `3`  | Error: `AgentStatus` field required     |
| `4`  | Error: `AgentStatusCode` field required |
| `5`  | Error: `IsLogin` field required         |
| `6`  | Error: `startedAt` field required       |
| `9`  | Success: Agent updated                  |
| `11` | Error: `AgentCode` field required       |
| `12` | Error: `AgentName` field required       |
| `13` | Error: `Team` field required            |
| `14` | Error: `AgentStatus` field required     |
| `15` | Error: `AgentStatusCode` field required |
| `16` | Error: `IsLogin` field required         |
| `17` | Error: `startedAt` field required       |

## 🔄 Agent Status

| Type | Description |
| ---- | ----------- |
| `1`  | Available   |
| `2`  | Active      |
| `3`  | Away        |
| `4`  | Not ready   |

## 🔄 Login Mode

| Type | Description |
| ---- | ----------- |
| `1`  | Login       |
| `0`  | Logout      |
