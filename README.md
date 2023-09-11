# ⚠ In progress ⚠


# 🚧 API Routes 🚧

## `[GET] /`

### Response

- ✅ Status: **200**

```javascript
message: "It works! ^^",
```

## `[POST] /login`

### Request

```javascript
{
  username: string;
  password: string;
  apiKey: string;
}
```

### Response

- ✅ Status: **200**

```javascript
message: "Logged In",
```

- ❌ Status: **401**

```javascript
message: "Invalid data",
```

- ❌ Status: **404**

```javascript
message: "User not found",
```

## `[POST] /register`

### Request

```javascript
{
  username: string;
  password: string;
  key: string;
  apiKey: string;
}
```

### Response

- ✅ Status: **201**

```javascript
message: "User created",
```

- ❌ Status: **409**

```javascript
message: "Key already used",
```

- ❌ Status: **404**

```javascript
message: "Key not found",
```

- ❌ Status: **405**

```javascript
message: "User already exists",
```

- ❌ Status: **401**

```javascript
message: "Invalid API Key",
```

- ❌ Status: **400**

```javascript
message: "Missing fields",
```
