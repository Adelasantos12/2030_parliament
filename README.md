# RSI-Scanner (IHR-LatAm)

Aplicación Vue 3 + Vite para analizar documentos legales (PDF) y detectar su relación con el Reglamento Sanitario Internacional (2005).

## Features

-   **PDF Upload and Text Extraction**: Upload legal documents in PDF format for analysis.
-   **RSI Topic Classification**: Automatically tags text fragments with relevant RSI themes.
-   **Multi-country Support**: Adapts text parsing for different national legal document structures.
-   **Version Comparison (Diff)**: Compare two versions of a document to highlight changes related to RSI topics.
-   **Local Processing**: All analysis is done locally in the browser and with a lightweight backend, ensuring data privacy.

## Tech Stack

-   **Frontend**: Vue 3, Vite, Pinia
-   **Backend**: Node.js, Express
-   **PDF Parsing**: `pdf-parse`
-   **Text Comparison**: `jsdiff`

## Usage

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the frontend development server:**
    ```bash
    npm run dev
    ```
3.  **Run the local API server:**
    ```bash
    npm run api
    ```
4.  Open the application in your browser, upload your PDF documents, and review the detected RSI tags.