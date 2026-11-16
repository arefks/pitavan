# Pita Greek Street Food

Statischer Website-Prototyp für den Freiburger Foodtruck. Die Seite verwendet nur HTML, CSS und JavaScript, hat keine Laufzeit-Abhängigkeiten und ist für GitHub Pages vorbereitet.

**Website:** [Pita Greek Street Food](https://arefks.github.io/pitavan/)

## Lokal ansehen

Die Seite kann direkt über `index.html` geöffnet werden. Für einen lokalen Webserver:

```bash
npx serve .
```

## Build

```bash
npm run build
```

Der Build kopiert alle benötigten Dateien nach `dist/` und prüft die drei HTML-Dokumente auf eine vollständige Grundstruktur.

## Inhalte bearbeiten

Standorte, Öffnungszeiten, Menü und Kontaktdaten werden zentral in `data/site.js` gepflegt. Originalfotos können unter `assets/` abgelegt und in `index.html` anstelle der beiden Platzhalter eingebunden werden.

## GitHub Pages

Der Workflow `.github/workflows/deploy-pages.yml` ist absichtlich nur manuell über `workflow_dispatch` startbar. Dadurch findet ohne ausdrückliche Freigabe keine Veröffentlichung statt.

Nach Freigabe:

1. In den Repository-Einstellungen unter **Pages** als Quelle **GitHub Actions** wählen.
2. Unter **Actions** den Workflow **Deploy to GitHub Pages** manuell starten.
3. Den erzeugten Link und alle Inhalte auf Smartphone und Desktop prüfen.

## Vor Veröffentlichung erforderlich

- Echte Originalfotos des Foodtrucks und der Speisen bereitstellen.
- Wochenstandorte samt vollständigen Adressen und Google-Maps-Links bestätigen.
- Alle Menüpositionen, Beschreibungen, Preise und Allergenhinweise bestätigen.
- E-Mail-Adresse ergänzen und Telefonnummer bestätigen.
- Betreibername, Rechtsform und ladungsfähige Anschrift für das Impressum liefern.
- Datenschutzangaben an das tatsächlich verwendete Hosting anpassen und Rechtstexte prüfen lassen.
- Logo beziehungsweise finale Wortmarke als Datei bereitstellen, falls vorhanden.
- Catering-Ablauf und gewünschte Kontaktmöglichkeit bestätigen.

## Datenquellen im Prototyp

Der Name, das Einsatzgebiet Freiburg, das Instagram-Profil und der Catering-Schwerpunkt sind öffentlich auffindbar. Die Telefonnummer und die aufgeführten Speisevarianten stammen aus öffentlich zugänglichen Verzeichniseinträgen und müssen vor Veröffentlichung vom Betreiber bestätigt werden. Die Öffnungszeit `10:00–13:30 Uhr` wurde aus dem Projektauftrag übernommen. Nicht bestätigte Angaben sind auf der Website sichtbar als offen markiert.
