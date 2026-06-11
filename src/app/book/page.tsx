// This is the booking page that displays the selected package details and includes the booking form.
import { notFound } from "next/navigation";
import { fetchServiceData } from "@/lib/queries";
import BookingForm from "@/components/BookingForm"; 
import Image from "next/image";

type BookPageProps = {
  searchParams: Promise<{ package?: string }>;
};

export default async function BookPage({ searchParams }: BookPageProps) {
  const params = await searchParams;
  const packageId = params.package;

  const service = await fetchServiceData(packageId?.split("-")[0] || "");
  const selectedPackage = service?.packages?.find((pkg) => pkg.id === packageId);

  if (!selectedPackage) {
    notFound();
  }

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-12">
        <div className="mb-8">
          <Image
          src={selectedPackage.image_url}
          alt={selectedPackage.title}
          className="w-50 h-auto object-cover rounded-lg mb-6"
          width={200}
          height={100}
          style={{ width: "auto", height: "auto" }}
          loading="eager"
        /> 
        </div>
         <div>
        <h1 className="text-3xl font-bold mb-2">Booking Request</h1>
        <h2 className="text-2xl font-semibold text-gray-900">{selectedPackage.title}</h2>
        <p className="text-gray-600 mt-2">{selectedPackage.description}</p>
        <p className="font-bold text-xl mt-4">Price: {selectedPackage.price}</p>
        <p className="text-gray-600">
          Duration: {selectedPackage.duration} {selectedPackage.duration === 1 ? "hour" : "hours"}
        </p>
      </div> 
      </div>
      <div className="max-w-7xl mx-auto px-8">
        <BookingForm selectedPackage={selectedPackage} />
      </div>
    </section>
  );
}