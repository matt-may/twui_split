from http.server import HTTPServer, SimpleHTTPRequestHandler

class CustomHandler(SimpleHTTPRequestHandler):
    def guess_type(self, path):
        # Handle .jsx files as text/plain to display in browser
        if path.endswith('.jsx'):
            return 'text/plain'
        return super().guess_type(path)

httpd = HTTPServer(('localhost', 8000), CustomHandler)
print("Serving at http://localhost:8000")
httpd.serve_forever()