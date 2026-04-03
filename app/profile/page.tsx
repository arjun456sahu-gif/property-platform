"use client";

import { useState } from "react";
import { Camera, User, Lock, Bell, Shield, Save } from "lucide-react";
import { cn } from "../../src/lib/utils";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Account Settings</h1>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <nav className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
              <button 
                onClick={() => setActiveTab("profile")}
                className={cn("flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-left whitespace-nowrap", activeTab === "profile" ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100")}
              >
                <User className="h-5 w-5" /> Profile Info
              </button>
              <button 
                onClick={() => setActiveTab("privacy")}
                className={cn("flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-left whitespace-nowrap", activeTab === "privacy" ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100")}
              >
                <Shield className="h-5 w-5" /> Privacy & Security
              </button>
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-100 text-left whitespace-nowrap">
                <Bell className="h-5 w-5" /> Notifications
              </button>
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200">
            
            {/* --- PROFILE TAB --- */}
            {activeTab === "profile" && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Personal Information</h2>
                
                {/* Photo Upload Section */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
                  {/* Added shrink-0 so the circle never squishes on small screens */}
                  <div className="relative h-24 w-24 shrink-0 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-md">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="h-full w-full object-cover" />
                    <label className="absolute bottom-0 left-0 w-full bg-black/50 py-1 text-center cursor-pointer hover:bg-black/70 transition-colors">
                      <Camera className="h-4 w-4 text-white mx-auto" />
                      <input type="file" className="hidden" accept="image/*" />
                    </label>
                  </div>
                  <div className="flex flex-col justify-center pt-1 sm:pt-2">
                    <h3 className="text-lg font-semibold text-gray-900">Profile Photo</h3>
                    <p className="text-sm text-gray-500 mt-1">Upload a new photo (JPG, PNG max 2MB)</p>
                  </div>
                </div>
                
                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input type="text" defaultValue="Arjun Singh" className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input type="email" defaultValue="arjun@example.com" disabled className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-500" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input type="tel" defaultValue="+91 98765 43210" className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100" />
                  </div>
                </div>
              </div>
            )}

            {/* --- PRIVACY TAB --- */}
            {activeTab === "privacy" && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Privacy Preferences</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Hide my contact number</h3>
                      <p className="text-sm text-gray-500">Agents will only be able to message you via the app.</p>
                    </div>
                    {/* Tailwind Toggle Switch */}
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between border-t pt-6">
                    <div>
                      <h3 className="font-semibold text-gray-900">Private Profile</h3>
                      <p className="text-sm text-gray-500">Your profile will not be visible to public search.</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                    </label>
                  </div>
                </div>

                <div className="mt-8 border-t pt-6">
                  <button className="flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors">
                    <Save className="h-5 w-5" /> Save Changes
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </main>
  );
}