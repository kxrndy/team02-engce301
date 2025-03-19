# 📌 Parse Server Function - Hello

## 📝 Purpose

This function is used for testing the Parse Server functionality. It returns a simple message confirming that the Parse server is operational.

## 📌 API Information

| Information      | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| **Function URL** | `https://lab-parse-server.cpe-rmutl.net/team02/api/functions/hello` |
| **Method**       | `POST`                                                              |
| **Content-Type** | `application/json`                                                  |

## 📝 Headers Request

| Header                     | Description          | Value          |
| -------------------------- | -------------------- | -------------- |
| **X-Parse-Application-Id** | Parse application ID | `wallboardapi` |
| **X-Parse-Master-Key**     | Parse master key     | `wallboardapi` |

## 📥 Response Example

```json
{
  "result": "Hi from Parse Server"
}
```

## 📊 Response Fields

| Field      | Type     | Description  |
| ---------- | -------- | ------------ |
| **result** | `string` | Result data. |

## 📝 Headers Response

| Header           | Description                 | Value              |
| ---------------- | --------------------------- | ------------------ |
| **Content-Type** | Data response type received | `application/json` |
