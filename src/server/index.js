import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import App from "shared";

const app = express();

app.get("*", (req, res, next) => {
    const content = renderToString(<App />);
    const html = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Simple Server Side Rendering App</title>
            </head>
            <body>
                <div id="app">${content}</div>
            </body>
        </html>
    `;
    res.send(html);
});

app.listen(3000, () => {
    console.log("Server is listening on port: 3000");
});
