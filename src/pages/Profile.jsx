import { useState, useEffect } from 'react';
import { User, Mail, Edit2, Save, X } from 'lucide-react';
import { SelledProducts } from '../components/selledPoducts';

export default function UserProfile() {
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState({ name: false, email: false });
  const [tempValues, setTempValues] = useState({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || ""
  });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleEdit = (field) => {
    setEditMode({ ...editMode, [field]: true });
  };

  const handleSave = (field) => {
    localStorage.setItem(field, tempValues[field]);
    setEditMode({ ...editMode, [field]: false });
    console.log(`Saved ${field}: ${tempValues[field]} to localStorage`);
  };

  const handleCancel = (field) => {
    setTempValues({ ...tempValues, [field]: localStorage.getItem(field) || "" });
    setEditMode({ ...editMode, [field]: false });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Go Back */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Go Back
        </button>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <User className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        </div>

        {/* Name Field */}
        <ProfileField
          icon={<User className="w-5 h-5 text-gray-500 mr-3" />}
          label="Name"
          field="name"
          value={tempValues.name}
          editing={editMode.name}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
          onChange={(val) => setTempValues({ ...tempValues, name: val })}
        />

        {/* Email Field */}
        <ProfileField
          icon={<Mail className="w-5 h-5 text-gray-500 mr-3" />}
          label="Email"
          field="email"
          value={tempValues.email}
          editing={editMode.email}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
          onChange={(val) => setTempValues({ ...tempValues, email: val })}
        />
      </div>

      {/* Sold Items */}
      <SelledProducts Items={products} />

      {/* Info Note */}
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> Name, email, and product data are managed using localStorage.
        </p>
      </div>
    </div>
  );
}

// Reusable component for profile fields
function ProfileField({ icon, label, field, value, editing, onEdit, onSave, onCancel, onChange }) {
  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          {icon}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            {editing ? (
              <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter your ${label.toLowerCase()}`}
              />
            ) : (
              <p className="text-gray-900">{value}</p>
            )}
          </div>
        </div>
        <div className="flex items-center ml-4">
          {editing ? (
            <div className="flex space-x-2">
              <button onClick={() => onSave(field)} className="p-2 text-green-600 hover:bg-green-50 rounded-md">
                <Save className="w-4 h-4" />
              </button>
              <button onClick={() => onCancel(field)} className="p-2 text-red-600 hover:bg-red-50 rounded-md">
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button onClick={() => onEdit(field)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
              <Edit2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
