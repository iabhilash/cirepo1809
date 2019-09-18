from node
add node.js /code/node.js
add data.json /code/data.json
RUN npm install -y express
RUN npm install -y body-parser
expose 9000
run chmod +x /code/node.js
cmd node /code/node.js
