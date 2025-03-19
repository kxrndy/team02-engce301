# 📌 API Documentation - Send Message to Another Agent

## 📝 Purpose

This API endpoint allows sending a message to another agent by specifying the destination `AgentCode`.

## 📌 API Information

| Information      | Value                                                         |
| ---------------- | ------------------------------------------------------------- |
| **API URL**      | `https://lab-api.cpe-rmutl.net/team02/api/v1/postSendMessage` |
| **Method**       | `POST`                                                        |
| **Content-Type** | `multipart/form-data`                                         |

## 📝 Headers Request

| Header            | Description  | Value            |
| ----------------- | ------------ | ---------------- |
| **Authorization** | Bearer Token | `Bearer {token}` |
| **x-auth-token**  | JWT Token    | `{token}`        |

_Replace `{token}` with the actual JWT token obtained during authentication._

## 📝 Body Request

| Parameter       | Type     | Description                         | Example Value |
| --------------- | -------- | ----------------------------------- | ------------- |
| **ToAgentCode** | `string` | The destination agent's unique code | `9999`        |
| **Message**     | `string` | The message to be sent              | `Hello`       |

## 📥 Response Example

```json
{
  "error": false,
  "statusCode": 200,
  "data": "Message has been sented"
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
