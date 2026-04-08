'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getTeamMembers, getEvents,
  adminGetContacts, adminCreateTeamMember, adminUpdateTeamMember, adminDeleteTeamMember,
  adminCreateEvent, adminUpdateEvent, adminDeleteEvent,
} from '@/lib/api';

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [secret, setSecret] = useState('');
  const [tab, setTab] = useState('team');

  const [team, setTeam] = useState([]);
  const [events, setEvents] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Team form state
  const [teamForm, setTeamForm] = useState({ name: '', role: '', image: '', linkedin: '', order: 0 });
  const [editingTeam, setEditingTeam] = useState(null);

  // Event form state
  const [eventForm, setEventForm] = useState({ title: '', description: '', date: '', location: '', category: 'workshop', isUpcoming: true });
  const [editingEvent, setEditingEvent] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (secret === process.env.NEXT_PUBLIC_ADMIN_SECRET) {
      setAuthed(true);
      loadData();
    } else {
      alert('Invalid admin secret');
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [t, ev, c] = await Promise.all([getTeamMembers(), getEvents(), adminGetContacts()]);
      setTeam(t.data || []);
      setEvents(ev.data || []);
      setContacts(c.data || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // Team CRUD
  const handleTeamSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTeam) {
        await adminUpdateTeamMember(editingTeam, teamForm);
      } else {
        await adminCreateTeamMember(teamForm);
      }
      setTeamForm({ name: '', role: '', image: '', linkedin: '', order: 0 });
      setEditingTeam(null);
      loadData();
    } catch (err) { alert(err.message); }
  };

  const editTeam = (m) => {
    setEditingTeam(m._id);
    setTeamForm({ name: m.name, role: m.role, image: m.image, linkedin: m.linkedin, order: m.order });
  };

  const deleteTeam = async (id) => {
    if (!confirm('Delete this team member?')) return;
    try { await adminDeleteTeamMember(id); loadData(); } catch (err) { alert(err.message); }
  };

  // Event CRUD
  const handleEventSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingEvent) {
        await adminUpdateEvent(editingEvent, eventForm);
      } else {
        await adminCreateEvent(eventForm);
      }
      setEventForm({ title: '', description: '', date: '', location: '', category: 'workshop', isUpcoming: true });
      setEditingEvent(null);
      loadData();
    } catch (err) { alert(err.message); }
  };

  const editEvent = (ev) => {
    setEditingEvent(ev._id);
    setEventForm({
      title: ev.title, description: ev.description,
      date: ev.date ? new Date(ev.date).toISOString().split('T')[0] : '',
      location: ev.location, category: ev.category, isUpcoming: ev.isUpcoming,
    });
  };

  const deleteEvent = async (id) => {
    if (!confirm('Delete this event?')) return;
    try { await adminDeleteEvent(id); loadData(); } catch (err) { alert(err.message); }
  };

  // Login screen
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-mesh px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 w-full max-w-sm"
        >
          <h1 className="font-display font-bold text-2xl text-white mb-2 text-center">Admin Panel</h1>
          <p className="text-[#8888aa] text-sm text-center mb-6">Enter admin secret to continue</p>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Admin Secret"
              className="input-dark"
              required
            />
            <button type="submit" className="btn-solid text-sm w-full">Login</button>
          </form>
        </motion.div>
      </div>
    );
  }

  const tabs = ['team', 'events', 'contacts'];

  return (
    <div className="min-h-screen bg-mesh pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display font-bold text-3xl text-white mb-8">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                tab === t
                  ? 'bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.2)] text-[#00f0ff]'
                  : 'text-[#8888aa] hover:text-white border border-transparent'
              }`}
            >
              {t} ({t === 'team' ? team.length : t === 'events' ? events.length : contacts.length})
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center py-10">
            <div className="w-8 h-8 rounded-full border-2 border-[rgba(0,240,255,0.2)] border-t-[#00f0ff] animate-spin" />
          </div>
        )}

        {/* Team Tab */}
        {tab === 'team' && !loading && (
          <div>
            <form onSubmit={handleTeamSubmit} className="glass-card p-6 mb-8">
              <h3 className="font-display font-semibold text-white mb-4">
                {editingTeam ? 'Edit Member' : 'Add Member'}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input name="name" value={teamForm.name} onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                  placeholder="Name" className="input-dark" required />
                <input name="role" value={teamForm.role} onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })}
                  placeholder="Role" className="input-dark" required />
                <input name="image" value={teamForm.image} onChange={(e) => setTeamForm({ ...teamForm, image: e.target.value })}
                  placeholder="Image path (e.g. /team/name.jpeg)" className="input-dark" required />
                <input name="linkedin" value={teamForm.linkedin} onChange={(e) => setTeamForm({ ...teamForm, linkedin: e.target.value })}
                  placeholder="LinkedIn URL" className="input-dark" required />
                <input name="order" type="number" value={teamForm.order} onChange={(e) => setTeamForm({ ...teamForm, order: parseInt(e.target.value) || 0 })}
                  placeholder="Order" className="input-dark" />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="btn-solid text-sm">{editingTeam ? 'Update' : 'Add'}</button>
                {editingTeam && (
                  <button type="button" onClick={() => { setEditingTeam(null); setTeamForm({ name: '', role: '', image: '', linkedin: '', order: 0 }); }}
                    className="btn-glow text-sm">Cancel</button>
                )}
              </div>
            </form>

            <div className="space-y-3">
              {team.map((m) => (
                <div key={m._id} className="glass-card p-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-white font-medium">{m.name}</span>
                    <span className="text-[#8888aa] text-sm ml-2">— {m.role}</span>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => editTeam(m)} className="px-3 py-1 text-xs rounded-lg bg-[rgba(0,240,255,0.06)] text-[#00f0ff] border border-[rgba(0,240,255,0.1)] hover:bg-[rgba(0,240,255,0.12)] transition-all">Edit</button>
                    <button onClick={() => deleteTeam(m._id)} className="px-3 py-1 text-xs rounded-lg bg-[rgba(239,68,68,0.06)] text-red-400 border border-[rgba(239,68,68,0.1)] hover:bg-[rgba(239,68,68,0.12)] transition-all">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {tab === 'events' && !loading && (
          <div>
            <form onSubmit={handleEventSubmit} className="glass-card p-6 mb-8">
              <h3 className="font-display font-semibold text-white mb-4">
                {editingEvent ? 'Edit Event' : 'Add Event'}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input value={eventForm.title} onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  placeholder="Title" className="input-dark" required />
                <input type="date" value={eventForm.date} onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                  className="input-dark" required />
                <input value={eventForm.location} onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                  placeholder="Location" className="input-dark" required />
                <select value={eventForm.category} onChange={(e) => setEventForm({ ...eventForm, category: e.target.value })}
                  className="input-dark">
                  {['workshop', 'hackathon', 'seminar', 'competition', 'networking', 'other'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <textarea value={eventForm.description} onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                placeholder="Description" rows={3} className="input-dark mb-4" required />
              <div className="flex items-center gap-3 mb-4">
                <label className="flex items-center gap-2 text-sm text-[#8888aa] cursor-pointer">
                  <input type="checkbox" checked={eventForm.isUpcoming} onChange={(e) => setEventForm({ ...eventForm, isUpcoming: e.target.checked })}
                    className="w-4 h-4 accent-[#00f0ff]" />
                  Upcoming
                </label>
              </div>
              <div className="flex gap-3">
                <button type="submit" className="btn-solid text-sm">{editingEvent ? 'Update' : 'Add'}</button>
                {editingEvent && (
                  <button type="button" onClick={() => { setEditingEvent(null); setEventForm({ title: '', description: '', date: '', location: '', category: 'workshop', isUpcoming: true }); }}
                    className="btn-glow text-sm">Cancel</button>
                )}
              </div>
            </form>

            <div className="space-y-3">
              {events.map((ev) => (
                <div key={ev._id} className="glass-card p-4 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <span className="text-white font-medium">{ev.title}</span>
                    <span className="text-[#8888aa] text-sm ml-2">— {new Date(ev.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button onClick={() => editEvent(ev)} className="px-3 py-1 text-xs rounded-lg bg-[rgba(0,240,255,0.06)] text-[#00f0ff] border border-[rgba(0,240,255,0.1)] hover:bg-[rgba(0,240,255,0.12)] transition-all">Edit</button>
                    <button onClick={() => deleteEvent(ev._id)} className="px-3 py-1 text-xs rounded-lg bg-[rgba(239,68,68,0.06)] text-red-400 border border-[rgba(239,68,68,0.1)] hover:bg-[rgba(239,68,68,0.12)] transition-all">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contacts Tab */}
        {tab === 'contacts' && !loading && (
          <div className="space-y-3">
            {contacts.length === 0 && (
              <p className="text-[#555570] text-center py-10">No messages yet.</p>
            )}
            {contacts.map((c) => (
              <div key={c._id} className={`glass-card p-5 ${c.isRead ? 'opacity-60' : ''}`}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <span className="text-white font-medium">{c.name}</span>
                    <span className="text-[#8888aa] text-sm ml-2">&lt;{c.email}&gt;</span>
                  </div>
                  <span className="text-[#555570] text-xs flex-shrink-0">{new Date(c.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-[#00f0ff] text-sm font-medium mb-1">{c.subject}</p>
                <p className="text-[#8888aa] text-sm leading-relaxed">{c.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
