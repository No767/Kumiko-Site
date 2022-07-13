<div align="center">

# Kumiko-Site

<img src="https://raw.githubusercontent.com/No767/Kumiko/dev/assets/kumiko.jpg" width=200 height=200>

<br>

![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/No767/Kumiko-Site/next?filename=kumiko-next%2Fpackage.json&label=Next.js&logo=nextdotjs) ![Python Version](https://img.shields.io/badge/Python-3.10-blue?logo=python&logoColor=white) [![CodeQL (TypeScript)](https://github.com/No767/Kumiko-Site/actions/workflows/codeql-ts.yml/badge.svg?branch=dev)](https://github.com/No767/Kumiko-Site/actions/workflows/codeql-ts.yml) ![GitHub](https://img.shields.io/github/license/No767/Kumiko-Site?label=License&logo=github)

The Official Site for Kumiko


<div align="left">

# Info 
Kumiko, a Discord bot built on top of [Rin](https://github.com/No767/Rin), is designed to allow for maximum flexibility and freedom within its services. This includes a web dashboard feature, where you can create custom embeds, view stats, and do much more tasks. This repo contains both the frontend source code, along with the backend source code as well.

# Code Directory

`kumiko-next` - A Next.js app that contains the dashboard, and the landing site of Kumiko. This is built with TypeScript instead of JavaScript.

`Kumiko-API` - A FastAPI app, built with Python, that deals with the data processing, and the API layer for Kumiko. The actual bot will use this API to communicate with the web dashboard, therefore containing a way to sync data. This requires a PostgreSQL server to be running.

# Current tech stack

Frontend: Next.js + TypeScript

API / Backend: FastAPI + Python

DB: PostgreSQL + Redis (caching only)

# License

GPL-3.0

