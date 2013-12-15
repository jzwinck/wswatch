# wswatch

*Unix watch(1) in the browser.*

The Unix/Linux program "watch" runs a program of your choosing repeatedly,
displaying its output on the screen each time.  wswatch is like that, but it
renders the output in any number of connected web browers via WebSockets (or
a fallback mechanism if necessary).

For example, try:

    ./wswatch -p 8080 date

Then visit [http://localhost:8080](http://localhost:8080) and you should see the time updating.
