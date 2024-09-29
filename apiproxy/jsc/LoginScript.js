// Sample login script
var username = context.getVariable("request.queryparam.username");
var password = context.getVariable("request.queryparam.password");

if (username === "librarian" && password === "secret123") {
    context.setVariable("response.header.X-Auth-Token", "valid-token-123");
    context.setVariable("response.content", '{"status": "success", "message": "Login successful"}');
} else {
    context.setVariable("response.status.code", 401);
    context.setVariable("response.content", '{"status": "error", "message": "Invalid credentials"}');
}