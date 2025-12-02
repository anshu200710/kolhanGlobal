import { Truck, Package, Globe, Clock } from 'lucide-react';

const services = [
    {
        icon: Truck,
        title: 'Ground Shipping',
        description: 'Reliable nationwide ground transportation for your packages',
    },
    {
        icon: Globe,
        title: 'International',
        description: 'Fast and secure international shipping to over 200 countries',
    },
    {
        icon: Package,
        title: 'Warehousing',
        description: 'Secure storage and fulfillment solutions for your inventory',
    },
    {
        icon: Clock,
        title: 'Express Delivery',
        description: 'Same-day and next-day delivery options available',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
                <p className="text-lg text-gray-600 mb-16">A complete logistics ecosystem for your business</p>


                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div key={i} className="bg-white p-8 rounded-2xl border hover:shadow-xl transition">
                                <Icon size={42} className="text-blue-600 mb-5" />
                                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                                <p className="text-gray-600">{s.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

