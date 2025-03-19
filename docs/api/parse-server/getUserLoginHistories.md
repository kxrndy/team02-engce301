# 📌 Parse Server Function - Get User Login Histories

## 📝 Purpose

This function retrieves the login history of users.

## 📌 API Information

| Information      | Value                                                                               |
| ---------------- | ----------------------------------------------------------------------------------- |
| **Function URL** | `https://lab-parse-server.cpe-rmutl.net/team06/api/functions/getUserLoginHistories` |
| **Method**       | `POST`                                                                              |
| **Content-Type** | `application/json`                                                                  |

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
        "agent_code": "9999",
        "agent_name": "Dev2",
        "is_login": "0",
        "createdAt": "2025-03-18T10:50:15.822Z",
        "updatedAt": "2025-03-18T10:50:15.822Z"
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

| Field                             | Type     | Description                                       |
| --------------------------------- | -------- | ------------------------------------------------- |
| **result.data.agent_code**        | `string` | Unique agent code                                 |
| **result.data.agent_name**        | `string` | Name of the agent                                 |
| **result.data.is_login**          | `string` | Login status (Refer to [Login Mode](#login-mode)) |
| **result.data.createdAt**         | `string` | Date and time the login record was created        |
| **result.data.updatedAt**         | `string` | Date and time the login record was last updated   |
| **result.pagination.currentPage** | `int`    | Current page number                               |
| **result.pagination.totalPage**   | `int`    | Total number of pages                             |

## 📝 Headers Response

| Header           | Description                 | Value              |
| ---------------- | --------------------------- | ------------------ |
| **Content-Type** | Data response type received | `application/json` |

## 🔄 Login Mode

| Type | Description |
| ---- | ----------- |
| `1`  | Login       |
| `0`  | Logout      |
