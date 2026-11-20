# Pita Greek Street Food

Statischer Website-Prototyp für den Freiburger Foodtruck. Die Seite verwendet nur HTML, CSS und JavaScript, hat keine Laufzeit-Abhängigkeiten und ist für GitHub Pages vorbereitet.

**Website:** [Pita Greek Street Food](https://pitavan.github.io/pitavan/)

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

Standorte, Öffnungszeiten, Menü, Kontaktdaten, WhatsApp- und Google-Rezensionslink werden zentral in `data/site.js` gepflegt. Originalfotos liegen unter `assets/pics/`; die kuratierte Auswahl wird in `index.html` eingebunden.

`contact.reviewUrl` verweist zentral auf den einzigen Google-Unternehmenseintrag. Falls später ein direkter Link zum Schreibformular bereitgestellt wird, muss nur dieser Wert ersetzt werden. Solange der Wert leer ist, bleibt der Button sichtbar, aber deaktiviert.

## GitHub Pages

Der Workflow `.github/workflows/deploy-pages.yml` veröffentlicht Änderungen an `main` automatisch und kann zusätzlich manuell über `workflow_dispatch` gestartet werden.

Nach Freigabe:

1. In den Repository-Einstellungen unter **Pages** als Quelle **GitHub Actions** wählen.
2. Unter **Actions** den Workflow **Deploy to GitHub Pages** manuell starten.
3. Den erzeugten Link und alle Inhalte auf Smartphone und Desktop prüfen.

## Vor Veröffentlichung erforderlich

- Bildrechte und finale Fotoauswahl bestätigen.
- Allergenhinweise bestätigen.
- Optional den aktuellen Maps-Link durch einen direkten Link zum Google-Schreibformular ersetzen.
- Betreibername, Rechtsform und ladungsfähige Anschrift für das Impressum liefern.
- Datenschutzangaben an das tatsächlich verwendete Hosting anpassen und Rechtstexte prüfen lassen.
- Catering-Ablauf und gewünschte Kontaktmöglichkeit bestätigen.

## Eigene Domain

GitHub Pages unterstützt die frühere Domain `www.pitagreekstreetfood.de` über eine `CNAME`-Datei und passende DNS-Einträge. Beides wird erst eingerichtet, wenn Domainbesitz und Freigabe bestätigt sind. Die aktuelle GitHub-Pages-Konfiguration bleibt unverändert nutzbar.

## Datenquellen im Prototyp

Der Name, das Einsatzgebiet Freiburg, das Instagram-Profil und der Catering-Schwerpunkt sind öffentlich auffindbar. Die Telefonnummer und die aufgeführten Speisevarianten stammen aus öffentlich zugänglichen Verzeichniseinträgen und müssen vor Veröffentlichung vom Betreiber bestätigt werden. Öffnungszeiten und Wochenstandorte wurden vom Auftraggeber bereitgestellt. Nicht bestätigte Angaben sind auf der Website sichtbar als offen markiert.
