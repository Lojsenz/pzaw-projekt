# Notes App

Prosta aplikacja do zarządzania notatkami z logowaniem użytkowników.

## Jak uruchomić

### 1. Zainstaluj Node.js

Pobierz i zainstaluj Node.js ze strony https://nodejs.org (wersja 18 lub nowsza).

### 2. Zainstaluj zależności

```bash
npm install
```

### 3. Skonfiguruj zmienne środowiskowe

Utwórz plik `.env` w głównym folderze projektu:

```env
PORT=8000 - ustawienie protu na ktorym chcemy hostowac aplikacje
ADMIN_LOGIN=admin - ustawienie nazwy administratora 
ADMIN_PASS=admin - ustawienie hasla administratora
SESSION_SECRET=twoj_tajny_klucz
```

### 4. Uruchom aplikację

```bash
node index.js
```

Aplikacja będzie dostępna pod adresem `http://localhost:8000`
