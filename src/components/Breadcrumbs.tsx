import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="sr-only">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600 hover:underline"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-gray-400">/</span>
            {item.path && index < items.length - 1 ? (
              <Link
                to={item.path}
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
