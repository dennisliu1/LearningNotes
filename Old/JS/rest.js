
Uniform interface
stateless
cacheable
client-server
layered system
code on demand (optional)

HTTP Request methods
	GET - read
	PUT - update/replace
	PATCH - update/modify
	DELETE - delete
	POST - create / etc

sensible resource names
	URL should have proper identifiers = good resource names
	build hierarchy so its intuitive
HTTP Response codes for status
Support JSON and XML
make sure REST calls do the exact same thing every time (state may change, query should not)

send: [HTTP Request Method] + URL + Query(JSON or XML)
server:
	request method = type of operation
	URL = resource
	query = modifiers on operation
recv: result(JSON or XML)