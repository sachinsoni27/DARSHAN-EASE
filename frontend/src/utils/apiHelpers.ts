// API utility helper functions

export const fetchWithErrorHandling = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const createApiUrl = (baseUrl: string, endpoint: string, params?: Record<string, string>) => {
  const url = new URL(`${baseUrl}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  return url.toString();
};

export const handleApiError = (error: any): string => {
  if (error instanceof TypeError) {
    return 'Network error. Please check your connection.';
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred.';
};

export const isValidId = (id: any): boolean => {
  return typeof id === 'string' && id.length > 0;
};
