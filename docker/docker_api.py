#!/usr/bin/python3

import cgi , subprocess

print("content-type: text/html")
print()


data = cgi.FieldStorage()
cmd = data.getvalue("x")

output = subprocess.getoutput("sudo " + cmd)
print(output)
