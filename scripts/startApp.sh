#!/bin/bash
INDEX_PATH="./dist/main.js"
if [ ! -f "$INDEX_PATH" ]; then
  INDEX_PATH="../dist/main.js"
  echo "Index not in current directory. Trying $INDEX_PATH"

  if [ ! -f "$INDEX_PATH" ]; then
    echo "Index folder couldn't be found. The app will not start!"
    exit 1
  fi

  echo "Index found!"
fi

# Actual logic
echo "Running migration"
if [ -f "./prisma/migrations" ]; then
  echo "Migrations folder found. Running migration"
  npx prisma migrate deploy
else
  echo "Migrations folder not found. Running init migration"
  npx prisma migrate dev --name initMigration
fi

echo "Starting..."
node $INDEX_PATH