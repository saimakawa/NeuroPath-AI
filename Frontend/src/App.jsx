import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://localhost:5000/api/skills", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setSkills(res.data));
  }, []);

  return (
    <div>
      <h1>FutureProof AI</h1>
      {skills.map((s) => (
        <p key={s._id}>
          {s.skillName} – {s.status}
        </p>
      ))}
    </div>
  );
}
