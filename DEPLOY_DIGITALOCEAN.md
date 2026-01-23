# Guía de Despliegue en DigitalOcean

Esta guía te ayudará a desplegar tu aplicación Next.js en DigitalOcean App Platform.

## Opción 1: Despliegue desde GitHub (Recomendado)

### Paso 1: Preparar el repositorio
1. Asegúrate de que tu código esté en GitHub en el repositorio `sasegura/codercrack`
2. Verifica que la rama principal sea `main` o `master`

### Paso 2: Crear la App en DigitalOcean
1. Ve a [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Haz clic en **"Create App"**
3. Selecciona **"GitHub"** como fuente
4. Autoriza DigitalOcean a acceder a tu cuenta de GitHub si es necesario
5. Selecciona el repositorio `sasegura/codercrack`
6. Selecciona la rama `main`

### Paso 3: Configurar la aplicación
DigitalOcean detectará automáticamente que es una aplicación Next.js. Si no lo hace:

1. **Tipo de App**: Selecciona "Web Service"
2. **Build Command**: `npm install && npm run build`
3. **Run Command**: `npm start`
4. **HTTP Port**: `3000`
5. **Environment Variables**:
   - `NODE_ENV`: `production`

### Paso 4: Configurar el plan
- **Plan**: Elige el plan básico (Basic) con el tamaño más pequeño (Basic $5/mes) para empezar
- Puedes escalar más tarde si es necesario

### Paso 5: Desplegar
1. Haz clic en **"Create Resources"** o **"Deploy"**
2. DigitalOcean comenzará a construir y desplegar tu aplicación
3. El proceso tomará unos minutos
4. Una vez completado, recibirás una URL como: `https://codercrack-xxxxx.ondigitalocean.app`

## Opción 2: Despliegue usando el archivo de configuración

Si prefieres usar el archivo `.do/app.yaml` que ya está configurado:

1. Ve a [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Haz clic en **"Create App"**
3. Selecciona **"GitHub"** y tu repositorio
4. DigitalOcean detectará automáticamente el archivo `.do/app.yaml`
5. Revisa la configuración y haz clic en **"Create Resources"**

## Variables de Entorno

Si tu aplicación necesita variables de entorno (como claves de API, URLs de base de datos, etc.):

1. Ve a tu app en DigitalOcean
2. Navega a **Settings** → **App-Level Environment Variables**
3. Agrega las variables necesarias
4. Haz clic en **"Save"** y la app se redesplegará automáticamente

## Actualizaciones Automáticas

Con la configuración actual, cada vez que hagas push a la rama `main` en GitHub, DigitalOcean desplegará automáticamente los cambios.

## Monitoreo y Logs

- **Logs**: Ve a tu app → **Runtime Logs** para ver los logs en tiempo real
- **Métricas**: Ve a **Insights** para ver el uso de recursos y rendimiento

## Costos

- **Plan Básico**: Desde $5/mes
- El plan incluye:
  - 512 MB RAM
  - 1 GB de almacenamiento
  - 1 vCPU compartido
  - 100 GB de transferencia de datos

## Solución de Problemas

### La aplicación no inicia
- Verifica los logs en **Runtime Logs**
- Asegúrate de que `NODE_ENV=production` esté configurado
- Verifica que el puerto sea 3000

### Error de build
- Revisa los **Build Logs**
- Asegúrate de que todas las dependencias estén en `package.json`
- Verifica que no haya errores de TypeScript o ESLint que bloqueen el build

### El diseño se ve distorsionado
- Verifica que las rutas de assets sean relativas
- Asegúrate de que `next.config.ts` esté configurado correctamente
- Revisa que las imágenes y estilos se carguen correctamente

## Personalizar el Dominio

1. Ve a **Settings** → **Domains**
2. Agrega tu dominio personalizado
3. Configura los registros DNS según las instrucciones de DigitalOcean
