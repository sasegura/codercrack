#!/bin/bash

# Script para desplegar en GitHub Pages
# Uso: ./scripts/deploy.sh

set -e

echo "🚀 Iniciando despliegue en GitHub Pages..."

# Verificar que estamos en la rama main
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Advertencia: No estás en la rama main. Rama actual: $CURRENT_BRANCH"
    read -p "¿Continuar de todos modos? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Despliegue cancelado."
        exit 1
    fi
fi

# Verificar que no hay cambios sin commitear
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ Error: Hay cambios sin commitear. Por favor, haz commit de todos los cambios antes de desplegar."
    git status --short
    exit 1
fi

# Instalar dependencias si es necesario
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Construir el proyecto para GitHub Pages
echo "🔨 Construyendo el proyecto para GitHub Pages..."
REPOSITORY_NAME=$(basename $(git remote get-url origin) .git) npm run build:gh-pages

# Verificar que la carpeta out existe
if [ ! -d "out" ]; then
    echo "❌ Error: La carpeta 'out' no existe. El build falló."
    exit 1
fi

# Crear archivo .nojekyll si no existe
touch out/.nojekyll
echo "📄 Archivo .nojekyll creado"

# Desplegar a GitHub Pages
echo "🌐 Desplegando a GitHub Pages..."
npx gh-pages -d out

echo "✅ ¡Despliegue completado exitosamente!"
echo "🔗 Tu sitio estará disponible en: https://[tu-usuario].github.io/[nombre-del-repo]"
