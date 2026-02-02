#!/bin/bash

echo "==================================="
echo "HCA Portfolio - Starting Server"
echo "==================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

echo "Starting development server..."
echo "Open http://localhost:5173 in your browser"
echo ""

npm run dev
