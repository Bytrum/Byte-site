import React from "react";

export default function AdminDashboard() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
			<div className="w-full max-w-2xl p-8 bg-white rounded-xl shadow-md">
				<h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Admin Dashboard</h1>
				<div className="flex flex-col items-center">
					<div className="w-24 h-24 mb-6 flex items-center justify-center bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full animate-pulse">
						<span className="text-5xl text-white">🚧</span>
					</div>
					<h2 className="text-xl font-semibold text-gray-700 mb-2">Coming Soon</h2>
					  <p className="text-gray-500 text-center">We&apos;re working hard to bring you a powerful dashboard experience. Stay tuned for updates!</p>
				</div>
			</div>
		</div>
	);
}
