# 📌 Parse Server Function - Online Agent By Agent Code

## 📝 Purpose

This function retrieves the status and information of an agent based on the provided `AgentCode`.

## 📌 API Information

| Information      | Value                                                                                |
| ---------------- | ------------------------------------------------------------------------------------ |
| **Function URL** | `https://lab-parse-server.cpe-rmutl.net/team03/api/functions/OnlineAgentByAgentCode` |
| **Method**       | `POST`                                                                               |
| **Content-Type** | `application/json`                                                                   |

## 📝 Headers Request

| Header                     | Description          | Value          |
| -------------------------- | -------------------- | -------------- |
| **X-Parse-Application-Id** | Parse application ID | `wallboardapi` |
| **X-Parse-Master-Key**     | Parse master key     | `wallboardapi` |

## 📝 Params Request

| Name          | Description       | Example Value |
| ------------- | ----------------- | ------------- |
| **AgentCode** | Unique agent code | `9998`        |

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

## 📊 Result Code Descriptions

| Code | Description          |
| ---- | -------------------- |
| `1`  | Available            |
| `2`  | Active               |
| `3`  | Warp                 |
| `4`  | Not ready            |
| `9`  | Something went wrong |
