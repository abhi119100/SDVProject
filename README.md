# NBA Player Value: Performance Metrics & Salary Efficiency

[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-orange?style=for-the-badge)](https://abhi119100.github.io/SDVProject/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat-square&logo=python&logoColor=white)](https://colab.research.google.com/drive/120LIrDY7E4Rv74QtGQCaO8xlsG3Kqzvd)
[![Tableau](https://img.shields.io/badge/Tableau-Public-E97627?style=flat-square&logo=tableau&logoColor=white)](https://public.tableau.com/app/profile/abhijit.sappidi/viz/Project2-1_17762938665760/Dashboard1)
[![Pandas](https://img.shields.io/badge/Pandas-Data_Analysis-150458?style=flat-square&logo=pandas&logoColor=white)]()
[![Scikit-learn](https://img.shields.io/badge/Scikit--learn-Regression-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)]()
[![Plotly](https://img.shields.io/badge/Plotly-Interactive_Charts-3F4F75?style=flat-square&logo=plotly&logoColor=white)]()

> Do NBA teams get what they pay for? An analytical deep-dive into the 2024-25 season exploring player efficiency, salary distribution, and contract value across 590 players.

**[View the Live Storyboard →](https://abhi119100.github.io/SDVProject/)**

---

## What I Built

A two-phase data visualization project analyzing the relationship between NBA player salaries and on-court performance. Phase 1 explores the performance landscape (scoring distributions, positional profiles, correlation analysis). Phase 2 overlays salary data to identify undervalued and overpaid players using a polynomial regression model that computes **Efficiency Surplus** — the gap between actual and expected PER for a given salary.

The project culminates in an interactive storytelling webpage with embedded Tableau dashboards, Plotly visualizations, and player spotlight cards featuring NBA headshots and team logos.

## Key Findings

- **Shai Gilgeous-Alexander** has the highest Efficiency Surplus (+12.01) — the league's best contract value
- **7 of the top 10 value players are centers** — the most efficient position investment
- **OKC Thunder** lead all teams with +2.22 average surplus — the smartest spenders
- **75% of player efficiency is NOT explained by salary** (R² ≈ 0.25), meaning contract value is mostly determined by scouting, not spending

## Tech Stack

| Layer | Tools |
|-------|-------|
| **Data Engineering** | Python, Pandas, NumPy, Scikit-learn (Google Colab) |
| **Static Visualization** | Matplotlib, Seaborn |
| **Interactive Dashboards** | Tableau Public, Microsoft Power BI, Plotly |
| **Frontend** | React 19, Vite, JavaScript (custom hooks, component architecture) |
| **Hosting** | GitHub Pages (via `gh-pages`) |

## Project Structure

```
├── index.html                          # Vite entry point
├── vite.config.js                      # Vite config (base path for GitHub Pages)
├── package.json                        # Dependencies & scripts
├── src/
│   ├── main.jsx                        # React entry
│   ├── App.jsx                         # Root component (assembles all sections)
│   ├── App.css                         # Global styles & design tokens
│   ├── components/                     # 15 React components
│   │   ├── Navbar.jsx                  # Fixed nav with scroll-spy
│   │   ├── Hero.jsx                    # Animated hero section
│   │   ├── Ticker.jsx                  # Scrolling stats ticker
│   │   ├── Section.jsx                 # Reusable section wrapper
│   │   ├── PlayerCard.jsx              # Reusable player spotlight card
│   │   ├── PlayerComparison.jsx        # Interactive comparison tool (React state)
│   │   └── ...                         # ProblemSection, DataSection, etc.
│   ├── hooks/
│   │   ├── useInView.js                # IntersectionObserver hook for animations
│   │   ├── useScrollSpy.js             # Active section tracking
│   │   └── useCounter.js               # Animated number counting
│   └── data/
│       └── players.json                # Player data for comparison tool
├── public/
│   ├── assets/                         # Static images (Plotly screenshots)
│   └── nba_salary_dashboard.html       # Plotly interactive dashboard
├── part_2.py                           # Python pipeline (data merging, regression)
├── *.csv                               # Datasets
├── *.twb / *.pbix                      # Tableau & Power BI workbooks
└── *.pptx / *.pdf                      # Presentations & proposal
```

## Live Dashboards

- [Tableau — Performance Analysis (Project 1)](https://public.tableau.com/app/profile/abhijit.sappidi/viz/Project1SDV/NBAPlayerPerformanceDashboard2024-25)
- [Tableau — Salary Efficiency (Project 2)](https://public.tableau.com/app/profile/abhijit.sappidi/viz/Project2-1_17762938665760/Dashboard1)
- [Google Colab Notebook — Full Python Pipeline](https://colab.research.google.com/drive/120LIrDY7E4Rv74QtGQCaO8xlsG3Kqzvd)

## Datasets

| Dataset | Source | Size |
|---------|--------|------|
| [NBA Player Stats 2024-25](https://www.kaggle.com/datasets/ratin21/nba-player-stats-2024-25-per-game) | Kaggle (ratin21) | 735 rows × 30+ columns |
| [NBA Player Salaries 2024-25](https://www.kaggle.com/datasets/ratin21/nba-player-salaries-2024-25) | Kaggle (ratin21) | ~500 rows × 5 columns |

## Methodology

1. **Data Cleaning** — Handled traded players, filtered for statistical significance (≥15 games), standardized positions
2. **Merging** — Normalized player names, mapped team abbreviations, inner-joined on player + team
3. **Filtering** — Rotation-level contributors only (≥40 games, ≥20 MPG, ≥$0.5M salary)
4. **Regression** — Degree-2 polynomial model predicts Expected PER from salary
5. **Value Metrics** — Efficiency Surplus (Actual PER − Expected PER) and Performance Value Index (PVI)
6. **Classification** — Players labeled as STEAL, Undervalued, Fair Value, Overpaid, or WAY Overpaid

---

*CSCE 5320 — Scientific Data Visualization | University of North Texas*
