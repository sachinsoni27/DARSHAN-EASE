import { API_BASE_URL } from '../config';

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
  }
  return response.json();
};

const handleError = (error: any) => {
  console.error('API Error:', error);
  throw error;
};

export const apiService = {
  // Temple APIs
  async getTemples() {
    try {
      const response = await fetch(`${API_BASE_URL}/temples`);
      return await handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  async getTemple(id: string) {
    const response = await fetch(`${API_BASE_URL}/temples/${id}`);
    if (!response.ok) throw new Error('Failed to fetch temple');
    return response.json();
  },

  async createTemple(templeData: any) {
    const response = await fetch(`${API_BASE_URL}/temples`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(templeData),
    });
    if (!response.ok) throw new Error('Failed to create temple');
    return response.json();
  },

  // Food APIs
  async getFoodPlaces() {
    const response = await fetch(`${API_BASE_URL}/food`);
    if (!response.ok) throw new Error('Failed to fetch food places');
    return response.json();
  },

  async getFoodByLocation(location: string) {
    const response = await fetch(`${API_BASE_URL}/food/location/${location}`);
    if (!response.ok) throw new Error('Failed to fetch food places');
    return response.json();
  },

  async getFood(id: string) {
    const response = await fetch(`${API_BASE_URL}/food/${id}`);
    if (!response.ok) throw new Error('Failed to fetch food place');
    return response.json();
  },

  async createFood(foodData: any) {
    const response = await fetch(`${API_BASE_URL}/food`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(foodData),
    });
    if (!response.ok) throw new Error('Failed to create food place');
    return response.json();
  },

  // Hotel APIs
  async getHotels() {
    const response = await fetch(`${API_BASE_URL}/hotels`);
    if (!response.ok) throw new Error('Failed to fetch hotels');
    return response.json();
  },

  async getHotelsByLocation(location: string) {
    const response = await fetch(`${API_BASE_URL}/hotels/location/${location}`);
    if (!response.ok) throw new Error('Failed to fetch hotels');
    return response.json();
  },

  async getHotel(id: string) {
    const response = await fetch(`${API_BASE_URL}/hotels/${id}`);
    if (!response.ok) throw new Error('Failed to fetch hotel');
    return response.json();
  },

  async createHotel(hotelData: any) {
    const response = await fetch(`${API_BASE_URL}/hotels`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hotelData),
    });
    if (!response.ok) throw new Error('Failed to create hotel');
    return response.json();
  },

  // Seed APIs
  async seedTemples() {
    const response = await fetch(`${API_BASE_URL}/seed/temples`, {
      method: 'POST',
    });
    if (!response.ok) throw new Error('Failed to seed temples');
    return response.json();
  },

  async seedFood() {
    const response = await fetch(`${API_BASE_URL}/seed/food`, {
      method: 'POST',
    });
    if (!response.ok) throw new Error('Failed to seed food places');
    return response.json();
  },

  async seedHotels() {
    const response = await fetch(`${API_BASE_URL}/seed/hotels`, {
      method: 'POST',
    });
    if (!response.ok) throw new Error('Failed to seed hotels');
    return response.json();
  },

  async getSeedStatus() {
    const response = await fetch(`${API_BASE_URL}/seed/status`);
    if (!response.ok) throw new Error('Failed to get seed status');
    return response.json();
  },
};
