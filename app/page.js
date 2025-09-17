// This line tells Next.js to render this page on the client side,
// which is required for Chart.js
"use client";

// Import necessary libraries
import { useState, useEffect } from 'react';
import studentData from '../data/data.json';
import { Bar, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler);

// --- 1. Data Preparation ---
const students = studentData; // Use the imported data directly

const calculateAverages = (data) => {
    const comprehensionAvg = data.reduce((sum, s) => sum + s.comprehension, 0) / data.length;
    const attentionAvg = data.reduce((sum, s) => sum + s.attention, 0) / data.length;
    const focusAvg = data.reduce((sum, s) => sum + s.focus, 0) / data.length;
    const retentionAvg = data.reduce((sum, s) => sum + s.retention, 0) / data.length;

    return { comprehensionAvg, attentionAvg, focusAvg, retentionAvg };
};

const averages = calculateAverages(students);
const avgAssessmentScore = students.reduce((sum, s) => sum + s.assessment_score, 0) / students.length;

// --- 2. Chart Data and Options ---
const barChartData = {
    labels: ['Comprehension', 'Attention', 'Focus', 'Retention'],
    datasets: [{
        label: 'Average Score',
        data: [averages.comprehensionAvg, averages.attentionAvg, averages.focusAvg, averages.retentionAvg],
        backgroundColor: ['#4299e1', '#667eea', '#9f7aea', '#ed64a6'],
    }],
};

const radarChartData = {
    labels: ['Comprehension', 'Attention', 'Focus', 'Retention'],
    datasets: [{
        label: students[0].name,
        data: [students[0].comprehension, students[0].attention, students[0].focus, students[0].retention],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }],
};

// --- 3. The Dashboard Component ---
export default function DashboardPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.student_id.toString().includes(searchTerm)
    );

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
                    Student Performance Dashboard
                </h1>

                {/* Overview Stats */}
                <div className="bg-white p-6 rounded-xl shadow-lg text-center mb-8">
                    <p className="text-2xl font-semibold text-gray-700">Average Assessment Score</p>
                    <p className="text-5xl font-bold text-indigo-600">{Math.round(avgAssessmentScore)}</p>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Average Cognitive Skills</h2>
                        <Bar options={{ responsive: true, plugins: { legend: { display: false }, title: { display: true, text: 'Average Skills' } } }} data={barChartData} />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Student Profile (Example)</h2>
                        <Radar options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: students[0].name + "'s Skills" } } }} data={radarChartData} />
                    </div>
                </div>

                {/* Student Table */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Student Data</h2>
                    <input
                        type="text"
                        placeholder="Search by name or ID..."
                        className="w-full px-4 py-2 border rounded-md mb-4"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredStudents.map(student => (
                                    <tr key={student.student_id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.student_id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.class}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.assessment_score}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.engagement_time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}