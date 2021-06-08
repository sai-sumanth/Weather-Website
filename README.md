# Weather-Website
<h3>Requirements</h3> 
<hr>
<p>
  1. Install node js on ur machine https://nodejs.org/en/download/ <br>
  2. Install hyper terminal https://hyper.is/ <br>
</p>
<h3>Execution</h3>
<hr>
<p>
  open the new project in your editor(sublime text,visual studio code etc) and import above two files into your project,
  open hyper terminal, then change the path to your project location, <br>
  for example your project presents on DESKTOP, 
  file name as Weatherproject,<br>
  Then type commands in hyper terminal as "cd desktop" press enter then "cd Weatherproject" <br><br>
  (base) saisumanth@Sais-Air ~ % cd desktop<br>
  (base) saisumanth@Sais-Air desktop % cd nodejs<br>
  (base) saisumanth@Sais-Air nodejs % cd WeatherProject<br>
  (base) saisumanth@Sais-Air WeatherProject %<br><br>
  Then type command as "npm init" <br>
  <pre>
(base) saisumanth@Sais-Air WeatherProject % npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (weatherproject) 
version: (1.0.0) 
description: Weather project
git repository: 
keywords: 
license: (ISC) 
About to write to /Users/saisumanth/Desktop/nodejs/WeatherProject/package.json:

{
  "name": "weatherproject",
  "version": "1.0.0",
  "description": "Weather project",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "sumanth",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1"
  },
  "devDependencies": {}
}</pre>
<br>
Then type command as "npm install express" and "npm install body parser"
<pre>
(base) saisumanth@Sais-Air WeatherProject % npm install express
npm WARN weatherproject@1.0.0 No repository field.

+ express@4.17.1
updated 1 package and audited 50 packages in 2.047s
found 0 vulnerabilities

(base) saisumanth@Sais-Air WeatherProject % npm install body-parser
npm WARN weatherproject@1.0.0 No repository field.

+ body-parser@1.19.0
updated 1 package and audited 50 packages in 1.453s
found 0 vulnerabilities

(base) saisumanth@Sais-Air WeatherProject % </pre>
<br>
Almost done !
<br>
Then type command as "node app.js" <br>
<pre>
(base) saisumanth@Sais-Air WeatherProject % node app.js
server activated </pre>
<br>
Open your browser and then type url as <b>"localhost:100"</b>

  
  
