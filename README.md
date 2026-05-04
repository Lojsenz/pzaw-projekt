# Notes App

Prosta aplikacja do zarządzania notatkami z logowaniem użytkowników.

## Jak uruchomić

### 1. Zainstaluj Node.js

Pobierz i zainstaluj Node.js ze strony https://nodejs.org 

### 2. Zainstaluj zależności

```bash
npm install
```

### 3. Skonfiguruj zmienne środowiskowe

```bash
npm run build
```

Poniżej znajduje sie szablon oraz opis pliku, który sie utworzy:

```env
PORT=8000 - ustawienie protu na ktorym chcemy hostowac aplikacje
ADMIN_LOGIN=admin - ustawienie nazwy administratora 
ADMIN_PASS=admin - ustawienie hasla administratora
SESSION_SECRET=twoj_tajny_klucz - ustawienie klucza do szyfrowania sesji
```

### 4. Uruchom aplikację

```bash
node index.js 
```

lub 

```bash
npm start
```

Aplikacja uruchomi sie pod adresem `http://localhost:8000`
