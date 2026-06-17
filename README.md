# Playwright E2E Test Automation Framework 🎭🚀

A scalable, full-stack end-to-end automation test suite built to validate application layers across multiple cross-browser platforms. This framework serves as a core piece of my engineering portfolio, demonstrating production-grade software quality assurance architectures.

---

## 🏗️ Framework Architecture & Engineering Design

This project avoids generic boilerplate test scripts and instead implements strict corporate engineering patterns:

* **Architecture & Design:** Engineered a highly maintainable **Page Object Model (POM)** framework using **Playwright** and **TypeScript** to strictly isolate UI locator elements from underlying execution logic.
* **Data-Driven Testing (DDT):** Implemented clean data-driven testing configurations using dynamic data injection schemas, entirely decoupling target runtime test environments from static test inputs.
* **CI/CD Orchestration:** Configured and deployed an automated testing execution pipeline utilizing **GitHub Actions** to automatically trigger headless execution on multi-browser targets (**Chromium, WebKit, Firefox**) upon every pull request.
* **Flakiness Mitigation:** Optimized execution workflows by integrating native web-first assertions, configuring parallel worker isolation management, and embedding automated trace, video, and screenshot captures on cloud pipeline failures.

---

## 📂 Project Directory Layout

```text
playwright-e2e-automation-framework/
│
├── .github/workflows/
│   └── playwright.yml         # GitHub Actions CI/CD automation pipeline
│
├── data/
│   └── testData.json          # Decoupled test parameters and JSON data vectors
│
├── pages/
│   └── LoginPage.ts           # Page Object Model component (Encapsulated UI)
│
├── tests/
│   └── checkout.spec.ts       # Core E2E automated test suite execution layer
│
├── playwright.config.ts       # Global cross-browser test runner engine config
├── package.json               # Node.js dependencies and script mappings
└── README.md                  # Framework architecture documentation
