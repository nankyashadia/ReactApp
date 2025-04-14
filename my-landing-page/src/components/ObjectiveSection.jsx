const ObjectiveSection = ({ objectives }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-[#E05C2A] mb-2">Our Objectives</h2>
    <ul className="list-disc ml-6">
      {objectives.map((obj, index) => (
        <li key={index}>{obj}</li>
      ))}
    </ul>
  </div>
);

export default ObjectiveSection;
