#!/usr/bin/env node

import express from 'express';
import { appendFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const server = express();
const PORT = 8080;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

server.listen(PORT, () => console.log(`started on port ${PORT}`));