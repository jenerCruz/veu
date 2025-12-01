Genera una Aplicación de Página Única (SPA) tipo PWA para la Gestión Integral de Promotores.

**Tecnología y Estructura:**
1.  **Frontend:** HTML5, **Vanilla JavaScript (ES6+)**.
2.  **Estilos:** Utilizar **Tailwind CSS** para un diseño responsivo y moderno.
3.  **Almacenamiento:** Implementar una única base de datos local con **IndexedDB** (Ej. `PromoterSuiteDB`) que consolide los datos de los 3 módulos (ventas, asistencias, tiempo).
4.  **Identidad:** Usar un **ID de Usuario (UUID)** único y persistente (almacenado en `localStorage`) para relacionar todos los registros.
5.  **Navegación:** Un sistema de navegación simple (ej. barra de navegación inferior) para alternar entre las tres vistas/módulos.

**Módulos de Funcionalidad:**

1.  **Módulo de Ventas y Metas (Dashboard):**
    * CRUD para registrar `Metas Mensuales` por producto/sucursal.
    * CRUD para registrar `Ventas`.
    * Dashboard que calcule el **Avance** y muestre gráficos (barras y dona) comparando ventas contra metas.

2.  **Módulo de Evidencia / Asistencia (Check-in/Check-out):**
    * Interfaz para captura de fotos de evidencia.
    * Integración con **Tesseract.js (OCR)** para extraer texto de la imagen (ej. una fecha o código).
    * Lógica de **Validación Estricta** que compare la fecha extraída por OCR con la fecha de registro.
    * Almacenamiento de la imagen en Base64 junto con los metadatos de validación.

3.  **Módulo de Registro de Tiempo:**
    * Funcionalidad simple de **Clock-In** y **Clock-Out**.
    * Lógica para calcular la **Duración de la Jornada** y el **Tiempo Total Trabajado** acumulado por el usuario.

**Requisito de Código:** La estructura de código debe ser modular, con funciones separadas para la lógica de cada módulo y una capa de abstracción para IndexedDB