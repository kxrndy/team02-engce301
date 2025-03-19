# 📌 Parse Server Function - Get Agent Message Histories

## 📝 Purpose

This function retrieves the message history between agents.

## 📌 API Information

| Information      | Value                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------- |
| **Function URL** | `https://lab-parse-server.cpe-rmutl.net/team03/api/functions/getAgentMessageHistories` |
| **Method**       | `POST`                                                                                 |
| **Content-Type** | `application/json`                                                                     |

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

## 📥 Response Example

```json
{
  "result": {
    "data": [
      {
        "from_agent_code": "9999",
        "to_agent_code": "9998",
        "message": "กินข้าวกัน",
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

| Field                             | Type     | Description                                |
| --------------------------------- | -------- | ------------------------------------------ |
| **result.data.from_agent_code**   | `string` | Agent code of the sender                   |
| **result.data.to_agent_code**     | `string` | Agent code of the receiver                 |
| **result.data.message**           | `string` | Content of the message                     |
| **result.data.createdAt**         | `string` | Date and time the message was created      |
| **result.data.updatedAt**         | `string` | Date and time the message was last updated |
| **result.pagination.currentPage** | `int`    | Current page number                        |
| **result.pagination.totalPage**   | `int`    | Total number of pages                      |

## 📝 Headers Response

| Header           | Description                 | Value              |
| ---------------- | --------------------------- | ------------------ |
| **Content-Type** | Data response type received | `application/json` |
