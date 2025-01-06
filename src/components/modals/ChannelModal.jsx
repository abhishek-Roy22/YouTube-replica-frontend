import React, { useState } from 'react';
import { User, X } from 'lucide-react';
import Modal from './Modal';

function ChannelModal({ isOpen, onClose }) {
  const [channelName, setChannelName] = useState('');
  const [handleName, setHandleName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle channel creation logic here
    console.log({ channelName, handleName });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative w-[800px] max-w-4xl min-h-[500px] bg-slate-900 rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-slate-400">
            Create Channel
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-800 rounded-full"
          >
            <X className="w-5 h-5 text-slate-200" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4 w-full flex flex-col items-center gap-5">
            <div className="bg-slate-500 w-40 h-40 rounded-full place-content-center place-items-center flex self-center cursor-pointer">
              <User size={100} />
            </div>
            <div>
              <label
                htmlFor="channelName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Channel Name
              </label>
              <input
                type="text"
                id="channelName"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent caret-slate-500 text-slate-400"
                placeholder="Enter channel name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="handleName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Handle Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  @
                </span>
                <input
                  type="text"
                  id="handleName"
                  value={handleName}
                  onChange={(e) => setHandleName(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent caret-slate-500 text-slate-400"
                  placeholder="Enter handle name"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ChannelModal;
