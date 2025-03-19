# 📌 API Documentation - postOnlineAgentStatus

## 📝 Purpose

This API endpoint updates or inserts various values of the `OnlineAgentsTable` for a specified `AgentCode`, such as `AgentName`, `IsLogin`, and `AgentStatus`.

## 📌 API Information

| Information      | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| **API URL**      | `https://lab-api.cpe-rmutl.net/team02/api/v1/postOnlineAgentStatus` |
| **Method**       | `POST`                                                              |
| **Content-Type** | `multipart/form-data`                                               |

## 📝 Headers Request

| Header            | Description  | Value            |
| ----------------- | ------------ | ---------------- |
| **Authorization** | Bearer Token | `Bearer {token}` |
| **x-auth-token**  | JWT Token    | `{token}`        |

_Replace `{token}` with the actual JWT token obtained during authentication._

## 📝 Body Request

| Parameter       | Type     | Description                                                              | Example Value |
| --------------- | -------- | ------------------------------------------------------------------------ | ------------- |
| **AgentCode**   | `string` | The unique code identifying the agent                                    | `9998`        |
| **AgentName**   | `string` | The display name of the agent                                            | `Dev2`        |
| **IsLogin**     | `string` | The login status of the agent (Refer to [Login Mode](#login-mode))       | `1`           |
| **AgentStatus** | `string` | The current status of the agent (Refer to [Agent Status](#agent-status)) | `1`           |

## 📥 **Response Example**

```json
{
  "error": false,
  "statusCode": 200,
  "data": "Agent was inserted or updated"
}
```

## 📊 Response Fields

| Field          | Type      | Description                                                     |
| -------------- | --------- | --------------------------------------------------------------- |
| **error**      | `boolean` | Indicates if the request was successful.                        |
| **statusCode** | `int`     | HTTP status code returned by the API.                           |
| **data**       | `string`  | A message indicating whether the agent was inserted or updated. |

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
