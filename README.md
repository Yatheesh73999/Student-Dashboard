Student Performance & Cognitive Skills Dashboard
This project is a comprehensive, data-driven dashboard designed to analyze and visualize the relationship between student cognitive skills and academic performance. It combines data analysis, machine learning, and web development to provide actionable insights for educators and students.

Project Overview
The project is built in two main parts:

Data Analysis & Machine Learning (Jupyter Notebook): A Python-based analysis of synthetic student data to uncover correlations between cognitive skills (attention, comprehension, focus, retention) and academic scores. It also includes a simple machine learning model to predict performance and a clustering model to group students into learning personas.

Interactive Web Dashboard (Next.js): A dynamic, single-page application that visualizes the findings from the analysis. The dashboard provides an intuitive interface to explore key metrics, individual student profiles, and a searchable table of student data.

Features
Correlational Analysis: Identify which cognitive skills have the strongest impact on assessment scores.

Performance Prediction: A linear regression model to predict student assessment scores.

Learning Personas: Students are clustered into distinct groups based on their cognitive skill profiles.

Interactive Visualizations:

Bar Chart: Displays average scores for each cognitive skill.

Radar Chart: Visualizes a single student's cognitive profile.

Student Table: A searchable and sortable table of all student data.

Live Deployment: The dashboard is deployed publicly on Vercel.

Technologies Used
Category	Technology	Description
Data & ML	Python	Primary language for data analysis.
Pandas, NumPy	Data manipulation and numerical operations.
Scikit-learn	Used for the Linear Regression and K-Means clustering models.
Matplotlib, Seaborn	Data visualization in the Jupyter Notebook.
Web Development	Next.js	A React framework for building the front-end dashboard.
React	The JavaScript library for building UI components.
Chart.js, React-Chartjs-2	For creating the interactive charts.
Tailwind CSS	A utility-first CSS framework for rapid styling.
Tools & Platforms	Git, GitHub	Version control and code hosting.
Vercel	Platform for continuous deployment of the dashboard.

Export to Sheets
How to Run Locally
To get a local copy of the project up and running, follow these simple steps.

Prerequisites
Node.js (v18 or higher)

Python 3.x

Git

Installation
Clone the repository:

Bash

git clone https://github.com/Yatheesh73999/Student-Dashboard.git
cd Student-Dashboard
Generate the data:

Open the Jupyter Notebook (analysis.ipynb).

Run all cells to generate the data.json file.

Install Next.js dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
Open your browser and navigate to http://localhost:3000 to view the dashboard.

Key Findings & Insights
Based on the data analysis, here are some key findings:

Strongest Correlation: Comprehension and attention skills showed the highest positive correlation with a student's final assessment score, indicating their significant impact on academic performance.

Clustering: The K-Means clustering model successfully grouped students into three distinct personas:

High Achievers: Students with consistently high scores across all cognitive skills.

Struggling with Retention: Students with lower retention scores, suggesting they may need focused review and repetition strategies.

Highly Engaged, Lower Scores: Students with high engagement time but moderate scores, possibly indicating a need for more effective study techniques.

Live Demo
You can view a live version of the dashboard here:
[Vercel Deployed Link]
