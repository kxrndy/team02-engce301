# 📌 API Documentation - Logout

## 🚪 Logout Agent

Log out an agent from the system.

## 📌 API Information

| Information      | Value                                                     |
| ---------------- | --------------------------------------------------------- |
| **API URL**      | `https://lab-api.cpe-rmutl.net/team06/api/v1/auth/logout` |
| **Method**       | `GET`                                                     |
| **Content-Type** | `-` (No content type required)                            |

## 📝 Headers Request

| Header            | Description  | Value            |
| ----------------- | ------------ | ---------------- |
| **Authorization** | Bearer Token | `Bearer {token}` |
| **x-auth-token**  | JWT Token    | `{token}`        |

_Replace `{token}` with the actual JWT token obtained during authentication._

## 📥 Response Example

```json
{
  "statusCode": 200,
  "message": "Success",
  "data": null
}
```

## 📊 Response Fields

| Field          | Type       | Description                               |
| -------------- | ---------- | ----------------------------------------- |
| **statusCode** | `int`      | HTTP status code returned by the API.     |
| **message**    | `string`   | Message indicating success or failure     |
| **data**       | `nullable` | Response data (Always null for this API). |

## 📝 Headers Response

| Header           | Description                 | Value              |
| ---------------- | --------------------------- | ------------------ |
| **Content-Type** | Data response type received | `application/json` |
