# 📌 API Documentation - Login

## 🔑 Login Agent User

Login agent user via desktop app (agent-notification)

## 📌 API Information

| Information      | Value                                                    |
| ---------------- | -------------------------------------------------------- |
| **API URL**      | `https://lab-api.cpe-rmutl.net/team02/api/v1/auth/login` |
| **Method**       | `POST`                                                   |
| **Content-Type** | `multipart/form-data `                                   |

## 📝 Headers Request

| Information       | Value            |
| ----------------- | ---------------- |
| **Authorization** | `Bearer {token}` |

## 📝 Body Request

| Parameter    | Type     | Description       | Example Value |
| ------------ | -------- | ----------------- | ------------- |
| **username** | `string` | Username of agent | `agent9998`   |
| **password** | `string` | Password of agent | `1234`        |

📥 Response Example

```json
{
  "error": false,
  "statusCode": 200,
  "errMessage": "Success",
  "data": {
    "agent_code": "9999",
    "agent_name": "Dev2",
    "agent_status": "2",
    "agent_status_code": "2",
    "is_login": "1",
    "token": "eyJhbGci...."
  }
}
```

## 📊 Response Fields

| Field                      | Type      | Description                                                   |
| -------------------------- | --------- | ------------------------------------------------------------- |
| **error**                  | `boolean` | Indicates if the request was successful                       |
| **statusCode**             | `int`     | HTTP status code                                              |
| **errMessage**             | `string`  | Message indicating success or failure                         |
| **data.agent_code**        | `string`  | Unique agent code                                             |
| **data.agent_name**        | `string`  | Display name of the agent                                     |
| **data.agent_status**      | `string`  | Current agent status (Refer to [Agent Status](#agent-status)) |
| **data.agent_status_code** | `string`  | Status code (same as `data.agent_status`)                     |
| **data.is_login**          | `string`  | Login status (Refer to [Login Mode](#login-mode))             |
| **data.token**             | `string`  | JWT authentication token                                      |

## 📝 Headers Response

| Header           | Description                 | Value              |
| ---------------- | --------------------------- | ------------------ |
| **Content-Type** | Data response type received | `application/json` |

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
