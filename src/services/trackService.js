const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const getTracks = async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch tracks');
    return response.json();
  };

  const createTrack = async (track) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(track),
    });
    if (!response.ok) throw new Error('Failed to create track');
    return response.json();
  };

  const updateTrack = async (id, track) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(track),
    });
    if (!response.ok) throw new Error('Failed to update track');
    return response.json();
  };

  const deleteTrack = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete track');
    return response.json();
  };

  export { getTracks, createTrack, updateTrack, deleteTrack };
