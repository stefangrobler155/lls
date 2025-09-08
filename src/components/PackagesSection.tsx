import Image from "next/image";
import {  PackagesSectionProps } from "../lib/types"
import Link from "next/link";


export default function PackagesSection({ packages }: PackagesSectionProps) {
  if (!packages || packages.length === 0) return null;

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => {
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.06] transition"
              >

                <Image
                  src={pkg.image_url}
                  alt={pkg.title}
                  className="w-full h-[400px] object-cover"
                  width={400}
                  height={400}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>

                  <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
                    {packages.map((item, i) => (
                      <li key={i}>{item.title}</li>
                    ))}
                  </ul>

                  <p className="text-lg font-bold text-gray-900">{pkg.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-8 flex justify-end">
          <Link href={"/services"} className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-900 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" >
          Back
          </ Link>
        </div>
        
      </div>
    </div>
  );
}
