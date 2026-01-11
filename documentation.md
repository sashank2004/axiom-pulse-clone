# Axiom Pulse Clone – Technical Documentation

This document explains the **technical design decisions, architecture, and implementation details** behind the Axiom Pulse frontend assignment.

The goal of this project was to recreate the **token discovery experience** of https://axiom.trade/pulse with a strong focus on **UI accuracy, performance, and real-time behavior**, using modern frontend tooling.

---

## 🏗 Architecture Overview

The application is built using **Next.js 14 App Router**, following a **component-driven and layered architecture**.

### High-level flow:

- UI components render token data
- Initial token data is loaded from a mock REST-like service
- Real-time updates are simulated via a WebSocket-like stream
- State updates trigger efficient re-renders without layout shifts


---

## 📦 Data & State Management

### Token Data Model
All tokens follow a strongly typed `Token` interface:

- Identity (name, address, image)
- Metrics (market cap, volume, tx count)
- Meta information (age, derived labels)
- Stage (NEW, FINAL, MIGRATED)

This ensures:
- Type safety
- Predictable updates
- Easy extensibility

---

## 🔄 Real-Time Updates (Mock WebSocket)

A **mock WebSocket stream** is implemented using a time-based event loop:

- Updates run every **1 second**
- Token age increments consistently
- Metrics fluctuate to simulate live trading
- New tokens are injected dynamically into the “New Pairs” column

This approach was chosen to:
- Demonstrate real-time UI handling
- Avoid backend dependency
- Keep the project frontend-focused

---

## 🌐 REST-like Data Fetching

Initial token data is fetched through a simulated API layer:

- Mimics a REST API response
- Introduces artificial delay
- Enables skeleton loading states

This mirrors real-world frontend data flows without requiring a backend service.

---

## 🎨 UI & Interaction Design

### Pixel Accuracy
- Layout, spacing, typography, and interactions are closely matched to the original Axiom Pulse UI
- Columns are separated by dividers instead of gaps
- Scrollbars are constrained inside columns

### Hover Interactions
- Image hover shows a large preview that escapes table overflow
- Bonding percentage appears above the card on hover
- Contextual action button appears at the bottom-right
- All hover interactions are CSS-driven for performance

---

## 📱 Responsive Design

- Desktop: Three-column layout
- Mobile: Single-column layout with tab-based navigation
- Fully functional down to **320px width**

Responsive behavior is handled using Tailwind’s breakpoint utilities.

---

## ⚡ Performance Considerations

- No layout shift during updates
- Minimal state usage
- Memoized components where applicable
- CSS-based interactions instead of JavaScript where possible

The application is designed to maintain:
- Fast interactions (<100ms)
- Smooth real-time updates
- High Lighthouse scores (≥ 90)

---

## 🧪 Error Handling & Stability

- Safe client/server boundaries
- Defensive rendering against missing data
- Controlled update loops
- No reliance on browser-only APIs in server components

---

## 🧩 Why No Real Backend?

This project intentionally avoids a real backend because:
- The assignment focuses on frontend engineering
- Real-time behavior can be demonstrated with mocks
- Reviewers can run the project instantly without setup

The architecture allows a real backend or WebSocket server to be plugged in later with minimal changes.

---

## 🏁 Conclusion

This project demonstrates:
- Strong frontend architecture
- Real-time UI handling
- Pixel-perfect UI replication
- Clean, maintainable code structure

It is built to scale, easy to understand, and optimized for both performance and developer experience.
