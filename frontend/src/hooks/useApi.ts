import { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export const useTemples = (): UseApiState<any[]> => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const temples = await apiService.getTemples();
      setData(temples);
      setError(null);
    } catch (err: any) {
      setError(err);
      console.error('Error fetching temples:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};

export const useFoodPlaces = (location?: string): UseApiState<any[]> => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      let foodPlaces;
      if (location) {
        foodPlaces = await apiService.getFoodByLocation(location);
      } else {
        foodPlaces = await apiService.getFoodPlaces();
      }
      setData(foodPlaces);
      setError(null);
    } catch (err: any) {
      setError(err);
      console.error('Error fetching food places:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  return { data, loading, error, refetch: fetchData };
};

export const useHotels = (location?: string): UseApiState<any[]> => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      let hotels;
      if (location) {
        hotels = await apiService.getHotelsByLocation(location);
      } else {
        hotels = await apiService.getHotels();
      }
      setData(hotels);
      setError(null);
    } catch (err: any) {
      setError(err);
      console.error('Error fetching hotels:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  return { data, loading, error, refetch: fetchData };
};
