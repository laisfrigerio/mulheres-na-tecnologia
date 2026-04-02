#!/bin/bash
# Copiar 404.html para a raiz do dist se não existir
if [ ! -f "./dist/404.html" ]; then
  cp ./404.html ./dist/404.html
fi

# Garantir que .nojekyll existe no dist
touch ./dist/.nojekyll

echo "✅ Build configuration complete"
