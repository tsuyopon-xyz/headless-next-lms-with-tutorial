import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/atoms/Card';

export const CourseCard: React.VFC = () => {
  return (
    <Card>
      <Link href={`#`}>
        <a className="flex flex-col">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src="https://source.unsplash.com/random/1920x1080"
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">初級</p>

              <p className="text-xl font-semibold text-gray-900 mt-2">
                WordPress基礎講座（非技術者向け）
              </p>

              <p className="mt-3 text-base text-gray-500">
                このコースを受講することで...。このコースを受講することで...。このコースを受講することで...。
              </p>
            </div>
            <div className="mt-6 flex items-center">
              <p className="text-md font-medium text-gray-900">
                レッスン数 3本・合計時間 30分
              </p>
            </div>
          </div>
        </a>
      </Link>
    </Card>
  );
};
