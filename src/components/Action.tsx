interface ActionItemProps {
  title: string;
  category: string;
  daysAgo: number;
}

const Action: React.FC<ActionItemProps> = ({ title, category, daysAgo }) => {
  return (
    <li className="p-4 rounded-md bg-gray-50 hover:bg-gray-200 transition">
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="text-sm text-gray-600">
        {category} • {daysAgo} days ago
      </p>
    </li>
  );
};

export default Action;
