# 📊 Student Performance & Cognitive Skills Dashboard  

A **data-driven interactive dashboard** designed to analyze and visualize the relationship between **student cognitive skills** and **academic performance**. This project combines **machine learning, data analysis, and web development** to provide actionable insights for educators, learners, and researchers.  

---

## 🚀 Project Overview  
This project is built in **two main parts**:  

1. **🔬 Data Analysis & Machine Learning (Jupyter Notebook)**  
   - Python-based analysis of synthetic student data.  
   - Correlation study between cognitive skills (**attention, comprehension, focus, retention**) and academic performance.  
   - Includes:
     - **Linear Regression** for performance prediction.  
     - **K-Means clustering** to identify learning personas.  

2. **🌐 Interactive Web Dashboard (Next.js)**  
   - A dynamic, single-page app for exploring insights.  
   - Features **interactive charts**, **student profiles**, and a **searchable data table**.  
   - Deployed on **Vercel** for live access.  

---

## ✨ Features  

- 📈 **Correlational Analysis** – Identify which skills influence scores the most.  
- 🤖 **Performance Prediction** – Predict academic scores using regression.  
- 🧑‍🏫 **Learning Personas** – Cluster students into groups with unique profiles.  
- 📊 **Interactive Visualizations**  
  - **Bar Chart** – Average scores for each cognitive skill.  
  - **Radar Chart** – Visualize individual student profiles.  
  - **Student Table** – Searchable & sortable student data.  
- 🚀 **Live Deployment** – Accessible online via Vercel.  

---

## 🛠️ Technologies Used  

| Category         | Technology                 | Description |
|------------------|----------------------------|-------------|
| **Data & ML**    | Python, Pandas, NumPy, Scikit-learn | Data analysis, regression, clustering |
| **Visualization**| Matplotlib, Seaborn        | Data plots in Jupyter |
| **Web**          | Next.js, React, Chart.js (via React-Chartjs-2) | Frontend dashboard |
| **Styling**      | Tailwind CSS               | Rapid UI styling |
| **Tools**        | Git, GitHub, Vercel        | Version control & deployment |

---

## ⚙️ How to Run Locally  

### ✅ Prerequisites  
- Node.js (v18 or higher)  
- Python 3.x  
- Git  

### 📥 Installation  

```bash
# Clone the repository
git clone https://github.com/Yatheesh73999/Student-Dashboard.git
cd Student-Dashboard

# Generate synthetic data
# (Run all cells in Jupyter Notebook)
jupyter notebook analysis.ipynb  

# Install frontend dependencies
npm install  

# Run development server
npm run dev  
```

Open your browser at 👉 **http://localhost:3000**  

---

## 🔑 Key Findings & Insights  

- **📌 Strongest Correlation**:  
  - **Comprehension** & **Attention** had the highest positive correlation with assessment scores.  

- **👥 Clustering Results (Learning Personas):**  
  1. **High Achievers** – Strong across all skills.  
  2. **Retention Strugglers** – Need reinforcement strategies.  
  3. **Highly Engaged, Moderate Scores** – High effort but need better study methods.  

---

## 🌍 Live Demo  

🔗 [**View Dashboard on Vercel**](http://student-dashboard-n41t-lt0get45u-yatheesh-s-projects.vercel.app))  

---

## 📌 Project Status  

✅ Completed – Fully functional dashboard with ML insights.  
📅 Future Enhancements – Add real student datasets, personalization, and adaptive learning recommendations.  

---

## 💡 Inspiration  

This project bridges the gap between **educational data science** and **practical learning support**, helping teachers identify areas of improvement and guiding students toward better study strategies.  
