# Guía de Despliegue en DigitalOcean (Static Site)

Esta guía te ayudará a desplegar tu aplicación Next.js como sitio estático en DigitalOcean App Platform.

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
DigitalOcean detectará automáticamente que es un sitio estático. Si no lo hace:

1. **Tipo de App**: Selecciona "Static Site"
2. **Build Command**: `npm install && npm run build`
3. **Output Directory**: `out` (esta es la carpeta donde Next.js exporta los archivos estáticos)
4. **Index Document**: `index.html`
5. **Error Document**: `404.html` (opcional, Next.js lo genera automáticamente)

### Paso 4: Configurar el plan
- **Plan**: Para sitios estáticos, DigitalOcean ofrece un plan gratuito con límites generosos
- Los sitios estáticos son más económicos ya que no requieren servidor

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

**Nota importante**: Para sitios estáticos, las variables de entorno se incrustan en el código durante el build. Si necesitas variables de entorno:

1. Ve a tu app en DigitalOcean
2. Navega a **Settings** → **App-Level Environment Variables**
3. Agrega las variables necesarias (se usarán durante el build)
4. Haz clic en **"Save"** y la app se redesplegará automáticamente

**Importante**: Las variables de entorno deben comenzar con `NEXT_PUBLIC_` para que estén disponibles en el cliente en sitios estáticos.

## Actualizaciones Automáticas

Con la configuración actual, cada vez que hagas push a la rama `main` en GitHub, DigitalOcean desplegará automáticamente los cambios.

## Monitoreo y Logs

- **Logs**: Ve a tu app → **Runtime Logs** para ver los logs en tiempo real
- **Métricas**: Ve a **Insights** para ver el uso de recursos y rendimiento

## Costos

- **Sitios Estáticos**: Plan gratuito disponible con límites generosos
- Incluye:
  - Hosting de archivos estáticos
  - CDN global
  - SSL automático
  - 100 GB de transferencia de datos/mes (plan gratuito)
  - Sin límite de ancho de banda en planes de pago

## Solución de Problemas

### La aplicación no se despliega
- Verifica los logs de build en **Build Logs**
- Asegúrate de que el **Output Directory** sea `out`
- Verifica que el build se complete exitosamente

### Error de build
- Revisa los **Build Logs**
- Asegúrate de que todas las dependencias estén en `package.json`
- Verifica que no haya errores de TypeScript o ESLint que bloqueen el build

### El diseño se ve distorsionado
- Verifica que `next.config.ts` tenga `output: 'export'` y `images: { unoptimized: true }`
- Asegúrate de que las rutas sean relativas (Next.js lo hace automáticamente con static export)
- Revisa que las imágenes y estilos se carguen correctamente
- Verifica la consola del navegador para errores de carga de recursos

## Personalizar el Dominio

1. Ve a **Settings** → **Domains**
2. Agrega tu dominio personalizado
3. Configura los registros DNS según las instrucciones de DigitalOcean
