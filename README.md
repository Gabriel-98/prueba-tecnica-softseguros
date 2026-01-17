# Prueba Técnica - Softseguros

## Descripción

Este repositorio corresponde a la **prueba técnica para Softseguros**.

---

### Backend
- Python
- Django
- SQLite

### Frontend
- Node.js
- React
- TypeScript

---

## Requisitos

- Python 3.12.12
- pip
- Node.js v22
- npm

---

## Ejecución del proyecto

### 1. Clonar el repositorio y acceder a la carpeta del proyecto

```bash
git clone https://github.com/Gabriel-98/prueba-tecnica-softseguros
cd prueba-tecnica-softseguros/
```

### Ejecución del Backend

#### Paso 1: Acceder a la carpeta del backend

```bash
cd backend
```

#### Paso 2: Crear y activar el entorno virtual

Crear el entorno virtual:

```bash
python -m venv venv
```

Activar el entorno virtual:

- En Linux/macOS:

```bash
source venv/bin/activate
```

- En Windows:

```bash
venv\Scripts\activate
```

#### Paso 3: Instalar dependencias

```bash
pip install -r requirements.txt
```

#### Paso 4: Ejecutar el servidor de desarrollo

```bash
python api/manage.py runserver
```

El backend quedará disponible en:

```
http://localhost:8000/
```

---

### Ejecución del frontend

#### Paso 1: Acceder a la carpeta del frontend

```bash
cd frontend
```

#### Pase 2: Seleccionar la versión de Node.js

Este proyecto utiliza Node.js v22:

```bash
nvm use 22
```

#### Paso 3: Instalar dependencias

```bash
npm install
```

#### Paso 4: Ejecutar la aplicación

```bash
npm run dev
```

El frontend estará disponible en:

```
http://localhost:5173/
```