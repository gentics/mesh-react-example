#!/bin/bash

npm run build
docker build -t gentics/mesh-react-demo:latest .
