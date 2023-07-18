import React from "react";

export default function Loader() {
  return (
    <div className="text-center h-auto flex flex-col justify-center ">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-6 bg-gray-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-6 bg-gray-700 rounded col-span-2"></div>
              <div className="h-6 bg-gray-700 rounded col-span-1"></div>
            </div>
            <div className="h-6 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
