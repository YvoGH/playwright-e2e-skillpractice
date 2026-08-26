MÓJ SYLABUS - NAUKA:

Moduł 1: Podstawy automatyzacji i lokatory

Zrozumienie struktury testu (test, test.describe).

Nawigacja po stronach (page.goto).

Różnice między twardymi i miękkimi asercjami (expect vs expect.soft).

Praca z lokatorami ukierunkowanymi na dostępność (getByRole, getByPlaceholder, getByText).

Moduł 2: Scoping i asercje negatywne

Zawężanie obszaru poszukiwań elementów (np. szukanie przycisku tylko wewnątrz konkretnego modala).

Sprawdzanie, czy element zniknął z ekranu (expect(element).not.toBeVisible()).

Moduł 3: System kontroli wersji (Git & GitHub)

Podstawy pracy z terminalem systemowym.

Inicjalizacja repozytorium (git init).

Zabezpieczanie repozytorium plikiem .gitignore.

Konfiguracja poświadczeń i generowanie Personal Access Token (PAT) z zachowaniem Zasady Najmniejszego Uprzywilejowania.

Cykl commitowania: add, commit, push.

Moduł 4: Pułapki sieciowe (API Interception)

Rozumienie asynchroniczności aplikacji webowych (koniec z wymuszonym usypianiem testów - hard sleeps).

Zakładanie nasłuchu na żądania sieciowe używając page.waitForResponse(...).

Synchronizacja testu z odpowiedziami backendu.

Moduł 5: Page Object Model (POM)

Zrozumienie programowania obiektowego (Klasy, Konstruktory, Metody).

Definiowanie lokatorów z użyciem interfejsu Locator.

Hermetyzacja logiki (ukrywanie technicznych detali wyszukiwania elementów wewnątrz klasy POM).

Wzorcowa struktura plików projektu (rozdzielenie folderu tests i src/pages).

Moduł 6: Skalowalność i czysty kod

Data-Driven Testing (DDT): Używanie pętli for...of oraz tablic danych do dynamicznego generowania wielu przypadków testowych z jednego bloku kodu.

Interpolacja stringów za pomocą backticków (odwróconych apostrofów) i ${}.

Wykorzystywanie Hooków (test.beforeEach) do eliminacji powtarzalnego kodu (Zasada DRY - Don't Repeat Yourself).

Tworzenie metod pomocniczych do asercji wewnątrz klas POM (np. asercje komunikatów błędów).
