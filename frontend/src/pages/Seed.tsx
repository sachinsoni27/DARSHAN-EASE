import { useEffect, useState } from 'react';
import { seedTemples } from '../utils/seedTemples';
import { apiService } from '../services/apiService';

const Seed = () => {
    const [status, setStatus] = useState('Initializing...');
    const [seedStatus, setSeedStatus] = useState<any>(null);

    useEffect(() => {
        const runSeed = async () => {
            try {
                setStatus('Checking API status...');
                const currentStatus = await apiService.getSeedStatus();
                setSeedStatus(currentStatus);

                setStatus('Seeding Firebase data...');
                await seedTemples();

                setStatus('Seeding backend data...');
                await apiService.seedTemples();
                setStatus('Temples seeded');

                await apiService.seedFood();
                setStatus('Food data seeded');

                await apiService.seedHotels();
                setStatus('Hotels seeded');

                const finalStatus = await apiService.getSeedStatus();
                setSeedStatus(finalStatus);
                setStatus('✅ Seeding complete! All data loaded successfully.');
            } catch (err) {
                setStatus('❌ Error during seeding. Check console for details.');
                console.error('Seed error:', err);
            }
        };
        runSeed();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold text-saffron-dark mb-4">🕉️ DARSHAN EASE Seeding</h1>
                <p className="text-xl font-semibold text-saffron-dark mb-6">{status}</p>
                
                {seedStatus && (
                    <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4 text-saffron-dark">Current Seed Status:</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded">
                                <p className="text-sm text-gray-600">Temples</p>
                                <p className="text-2xl font-bold text-saffron-dark">{seedStatus.temples}</p>
                            </div>
                            <div className="bg-white p-4 rounded">
                                <p className="text-sm text-gray-600">Food Places</p>
                                <p className="text-2xl font-bold text-saffron-dark">{seedStatus.foodPlaces}</p>
                            </div>
                            <div className="bg-white p-4 rounded">
                                <p className="text-sm text-gray-600">Hotels</p>
                                <p className="text-2xl font-bold text-saffron-dark">{seedStatus.hotels}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Seed;
