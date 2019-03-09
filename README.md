# jaystorm (JSON Testing Form Utility)
A widget that lets you automaticly input your web app input fields by just inserting your JSON receipe

Demo : https://stackblitz.com/edit/jaystormv2

### Supported Input Tags

- `<input>` (text,email,date,radio)
- `<textarea>`
- `<select>`

### JSON Recipe Format

```json
{
"name-of-the-field" : "value-of-the-field"
}
```

Example :

```json
{
  "username": "myusername",
  "email": "my@email.net",
  "motto": "mymotto",
  "gender": "f",
  "pet": "elephant",
  "address": "United St.",
  "birth": "2019-03-06"
}
```
