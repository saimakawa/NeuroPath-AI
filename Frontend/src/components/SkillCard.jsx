export default function SkillCard({ skill }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold">{skill.skillName}</h3>
      <div className="w-full bg-gray-200 rounded">
        <div
          className={`h-2 rounded ${
            skill.status === "Healthy"
              ? "bg-green-500"
              : skill.status === "Decaying"
                ? "bg-yellow-500"
                : "bg-red-500"
          }`}
          style={{ width: `${skill.decayPercent}%` }}
        />
      </div>
      <p className="text-sm">{skill.status}</p>
    </div>
  );
}
