const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Generic fetch wrapper
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'API request failed');
  return data;
}

// Team
export async function getTeamMembers() {
  return fetchAPI('/team');
}

// Events
export async function getEvents(upcoming) {
  const query = typeof upcoming === 'boolean' ? `?upcoming=${upcoming}` : '';
  return fetchAPI(`/events${query}`);
}

// Contact
export async function submitContact(formData) {
  return fetchAPI('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

// Admin helpers
function adminHeaders() {
  return { 'x-admin-secret': process.env.NEXT_PUBLIC_ADMIN_SECRET || '' };
}

export async function adminGetContacts() {
  return fetchAPI('/contact', { headers: adminHeaders() });
}

export async function adminCreateTeamMember(data) {
  return fetchAPI('/team', { method: 'POST', headers: adminHeaders(), body: JSON.stringify(data) });
}

export async function adminUpdateTeamMember(id, data) {
  return fetchAPI(`/team/${id}`, { method: 'PUT', headers: adminHeaders(), body: JSON.stringify(data) });
}

export async function adminDeleteTeamMember(id) {
  return fetchAPI(`/team/${id}`, { method: 'DELETE', headers: adminHeaders() });
}

export async function adminCreateEvent(data) {
  return fetchAPI('/events', { method: 'POST', headers: adminHeaders(), body: JSON.stringify(data) });
}

export async function adminUpdateEvent(id, data) {
  return fetchAPI(`/events/${id}`, { method: 'PUT', headers: adminHeaders(), body: JSON.stringify(data) });
}

export async function adminDeleteEvent(id) {
  return fetchAPI(`/events/${id}`, { method: 'DELETE', headers: adminHeaders() });
}
