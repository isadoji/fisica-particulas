# Física de Partículas — Fenomenología y Métodos Experimentales

Sitio web del curso de física de partículas para estudiantes de mitad de carrera en física, con orientación fenomenológica y experimental.

## Estructura

```
fisica-particulas/
├── index.html          ← Sitio completo (una sola página con navegación JS)
├── css/
│   └── style.css       ← Estilos
├── js/
│   └── main.js         ← Navegación e interactividad
└── README.md
```

## Publicar en GitHub Pages

### 1. Crear el repositorio

```bash
git init
git add .
git commit -m "primer commit: sitio del curso"
```

Ve a github.com → New repository → nombre: `fisica-particulas` → Create.

```bash
git remote add origin https://github.com/TU-USUARIO/fisica-particulas.git
git branch -M main
git push -u origin main
```

### 2. Activar GitHub Pages

1. En el repositorio, ve a **Settings → Pages**
2. En "Source", selecciona la rama **main** y carpeta **/ (root)**
3. Haz clic en **Save**

En 1–2 minutos tu sitio estará disponible en:

```
https://TU-USUARIO.github.io/fisica-particulas/
```

### 3. Pegar el link en Moodle

En Moodle → tu curso → "Añadir actividad o recurso" → **URL** → pega la dirección de arriba.

## Actualizar el sitio

Cualquier cambio que hagas y subas a GitHub se publica automáticamente:

```bash
git add .
git commit -m "actualización semana X"
git push
```

## Secciones del sitio

- **Inicio** — Descripción general, estructura por bloques, metodología
- **Programa** — Calendario semanal interactivo con acordeón y filtros por bloque
- **Bibliografía** — Textos anotados con rol en el curso y nivel de exigencia
- **Recursos** — PDG, CERN Open Data, arXiv, ROOT, HEPData, papers clave
