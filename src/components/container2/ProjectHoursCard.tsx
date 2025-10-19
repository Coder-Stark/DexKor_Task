import Card from '../layout/Card';

function ProjectHoursCard() {
  return (
    <Card title="Project hours" description='Only visible to dextor'>
      {/* Wrapper without overflow hidden */}
      <div className="relative w-full mb-6">
        {/* Bar background (with overflow hidden) */}
        <div className="relative w-full h-7 bg-gray-100 rounded-md overflow-hidden">
          {/* Light blue base */}
          <div className="absolute inset-0 bg-blue-50" />
          {/* 50% Marker */}
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gray-300" />
          {/* 80% Marker */}
          <div className="absolute top-0 left-[80%] w-[1px] h-full bg-gray-300" />
        </div>

        {/* Labels under markers */}
        <div className="relative w-full text-xs text-gray-500 mt-1">
          <span className="absolute left-1/2 -translate-x-1/2">50%</span>
          <span className="absolute left-[80%] -translate-x-1/2">80%</span>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm">
          <tbody className="text-xs">
            <tr className="border-b border-gray-100">
              <td className="py-2 px-2 text-gray-600">Tracked Time</td>
              <td className="py-2 px-2 text-gray-600">Remaining</td>
              <td className="py-2 px-2 text-gray-600 text-center">Budgeted</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 px-2 text-gray-700">-</td>
              <td className="py-2 px-2 text-gray-700">0m</td>
              <td className="py-2 px-2 text-gray-700 text-center">0m</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 px-2 text-gray-600">Allocated</td>
              <td className="py-2 px-2 text-gray-600">ETC</td>
              <td className="py-2 px-2 text-gray-600 text-center">EAC</td>
            </tr>
            <tr>
              <td className="py-2 px-2 text-gray-700">-</td>
              <td className="py-2 px-2 text-gray-700">0m</td>
              <td className="py-2 px-2 text-gray-700 text-center">0m</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default ProjectHoursCard;
