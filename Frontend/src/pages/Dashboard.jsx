import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [skills, setSkills] = useState([]);
  const [ideas, setIdeas] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/skills", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setSkills(res.data));

    axios
      .get("http://localhost:5000/api/ideas", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setIdeas(res.data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">FutureProof AI Dashboard</h1>

      <h2 className="font-semibold mb-2">Skills</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {skills.map((s) => (
          <div key={s._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{s.skillName}</h3>
            <p>{s.status}</p>
            <div className="bg-gray-200 h-2 rounded">
              <div
                className={`h-2 rounded ${
                  s.status === "Healthy"
                    ? "bg-green-500"
                    : s.status === "Decaying"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                }`}
                style={{ width: `${s.decayPercent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-semibold mb-2">Ideas</h2>
      <div className="grid grid-cols-3 gap-4">
        {ideas.map((i) => (
          <div key={i._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{i.title}</h3>
            <p>{i.category}</p>
            <p className="text-sm">Score: {i.longevityScore}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
