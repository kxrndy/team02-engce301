# 📌 Parse Server Function - Get Agent Status Histories

## 📝 Purpose

This function retrieves the status change history for agents.

## 📌 API Information

| Information      | Value                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------- |
| **Function URL** | `https://lab-parse-server.cpe-rmutl.net/team02/api/functions/getAgentStatusHistories` |
| **Method**       | `POST`                                                                                |
| **Content-Type** | `application/json`                                                                    |

## 📝 Headers Request

| Header                     | Description          | Value          |
| -------------------------- | -------------------- | -------------- |
| **X-Parse-Application-Id** | Parse application ID | `wallboardapi` |
| **X-Parse-Master-Key**     | Parse master key     | `wallboardapi` |

## 📝 Params Request

| Name     | Description                | Example Value |
| -------- | -------------------------- | ------------- |
| **page** | Page number                | `0`           |
| **size** | Number of records per page | `10`          |

```json
{
  "result": {
    "data": [
      {
        "agent_code": "9999",
        "agent_name": "Dev2",
        "status_from": "1",
        "status_to": "1",
        "createdAt": "2025-03-18T10:46:37.468Z",
        "updatedAt": "2025-03-18T10:46:37.468Z"
      }
    ],
    "pagination": {
      "currentPage": 0,
      "totalPage": 1
    }
  }
}
```

## 📊 Response Fields

| Field                             | Type     | Description                                                             |
| --------------------------------- | -------- | ----------------------------------------------------------------------- |
| **result.data.agent_code**        | `string` | Unique agent code                                                       |
| **result.data.agent_name**        | `string` | Name of the agent                                                       |
| **result.data.status_from**       | `string` | Agent status before the change (Refer to [Agent Status](#agent-status)) |
| **result.data.status_to**         | `string` | Agent status after the change (Refer to [Agent Status](#agent-status))  |
| **result.data.createdAt**         | `string` | Date and time the status change was created                             |
| **result.data.updatedAt**         | `string` | Date and time the status change was last updated                        |
| **result.pagination.currentPage** | `int`    | Current page number                                                     |
| **result.pagination.totalPage**   | `int`    | Total number of pages                                                   |

## 📝 Headers Response

| Header           | Description                 | Value              |
| ---------------- | --------------------------- | ------------------ |
| **Content-Type** | Data response type received | `application/json` |

## 🔄 Agent Status

| Type | Description |
| ---- | ----------- |
| `1`  | Avaliable   |
| `2`  | Active      |
| `3`  | Warp        |
| `4`  | Not ready   |
